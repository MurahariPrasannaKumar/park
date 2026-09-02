"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import opentype from "opentype.js";

const FONT_URL =
  "https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf";
const WORD = "Hello";
const GLYPH_SIZE = 200;
const LETTER_TRACKING = 6;
const GROUP_SCALE = 0.011;

type LetterData = { char: string; shapes: THREE.Shape[]; x: number };

// Convert an opentype.js glyph path into THREE.Shape objects (outer contour + holes),
// bypassing three.js's own Font/TextGeometry class.
function pathToShapes(path: opentype.Path): THREE.Shape[] {
  const scale = 1;
  const contours: THREE.Vector2[][] = [];
  let current: THREE.Vector2[] = [];
  let cursor = new THREE.Vector2();

  const pushCurrent = () => {
    if (current.length > 1) contours.push(current);
    current = [];
  };

  for (const cmd of path.commands) {
    switch (cmd.type) {
      case "M":
        pushCurrent();
        cursor = new THREE.Vector2(cmd.x * scale, cmd.y * scale);
        current.push(cursor.clone());
        break;
      case "L":
        cursor = new THREE.Vector2(cmd.x * scale, cmd.y * scale);
        current.push(cursor.clone());
        break;
      case "Q": {
        const ctrl = new THREE.Vector2(cmd.x1 * scale, cmd.y1 * scale);
        const end = new THREE.Vector2(cmd.x * scale, cmd.y * scale);
        const curve = new THREE.QuadraticBezierCurve(cursor.clone(), ctrl, end);
        current.push(...curve.getPoints(8).slice(1));
        cursor = end;
        break;
      }
      case "C": {
        const c1 = new THREE.Vector2(cmd.x1 * scale, cmd.y1 * scale);
        const c2 = new THREE.Vector2(cmd.x2 * scale, cmd.y2 * scale);
        const end = new THREE.Vector2(cmd.x * scale, cmd.y * scale);
        const curve = new THREE.CubicBezierCurve(cursor.clone(), c1, c2, end);
        current.push(...curve.getPoints(8).slice(1));
        cursor = end;
        break;
      }
      case "Z":
        pushCurrent();
        break;
    }
  }
  pushCurrent();

  if (contours.length === 0) return [];

  const signedArea = (pts: THREE.Vector2[]) => {
    let sum = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i];
      const b = pts[(i + 1) % pts.length];
      sum += a.x * b.y - b.x * a.y;
    }
    return sum / 2;
  };

  // outer contour = largest absolute area; remaining contours become holes
  const withArea = contours.map((pts) => ({ pts, area: signedArea(pts) }));
  withArea.sort((a, b) => Math.abs(b.area) - Math.abs(a.area));
  const [outer, ...rest] = withArea;

  const shape = new THREE.Shape(outer.pts);
  for (const hole of rest) {
    shape.holes.push(new THREE.Path(hole.pts));
  }
  return [shape];
}

function Letter({ shapes, x }: { shapes: THREE.Shape[]; x: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    if (shapes.length === 0) return null;
    return new THREE.ExtrudeGeometry(shapes, {
      depth: 55,
      bevelEnabled: true,
      bevelThickness: 12,
      bevelSize: 9,
      bevelSegments: 3,
      curveSegments: 6,
    });
  }, [shapes]);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);
    const ndc = worldPos.clone().project(state.camera);

    const dx = state.pointer.x - ndc.x;
    const dy = state.pointer.y - ndc.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const proximity = THREE.MathUtils.clamp(1 - dist / 0.35, 0, 1);

    const targetZ = proximity * 0.7;
    const targetScale = 1 + proximity * 0.3;
    const targetRotZ = -dx * proximity * 0.5;

    mesh.position.z = THREE.MathUtils.lerp(mesh.position.z, targetZ, 0.15);
    mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.15));
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, targetRotZ, 0.15);
  });

  if (!geometry) return null;

  return (
    <mesh ref={meshRef} geometry={geometry} position={[x, 0, 0]}>
      <meshPhysicalMaterial
        color="#ff8fb3"
        metalness={0.55}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.12}
        emissive="#ff5d8f"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
}

function ChromeGroup({ letters }: { letters: LetterData[] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const group = groupRef.current;
    if (!group) return;
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, state.pointer.x * 0.3, 0.05);
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -state.pointer.y * 0.18, 0.05);
  });

  return (
    <group ref={groupRef} scale={GROUP_SCALE}>
      <Center>
        <group>
          {letters.map((letter, i) => (
            <Letter key={`${letter.char}-${i}`} shapes={letter.shapes} x={letter.x} />
          ))}
        </group>
      </Center>
    </group>
  );
}

function useLetterData() {
  const [letters, setLetters] = useState<LetterData[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(FONT_URL)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        if (cancelled) return;
        const font = opentype.parse(buffer);
        let cursorX = 0;
        const data = WORD.split("").map((char) => {
          const shapes = pathToShapes(font.getPath(char, 0, 0, GLYPH_SIZE));
          const letter: LetterData = { char, shapes, x: cursorX };
          cursorX += font.getAdvanceWidth(char, GLYPH_SIZE) + LETTER_TRACKING;
          return letter;
        });
        setLetters(data);
      })
      .catch((err) => console.error("Failed to load chrome hero font", err));
    return () => {
      cancelled = true;
    };
  }, []);

  return letters;
}

export default function ChromeHeroText() {
  const letters = useLetterData();

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 32 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 6]} intensity={1.6} />
        <directionalLight position={[-5, -3, 4]} intensity={0.6} color="#ffc93c" />
        <pointLight position={[0, 2, 5]} intensity={0.6} color="#ffffff" />
        {letters && <ChromeGroup letters={letters} />}
      </Canvas>
    </div>
  );
}
