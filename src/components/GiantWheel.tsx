export default function GiantWheel({ className = "" }: { className?: string }) {
  const spokeColors = [
    "#ff5d8f",
    "#ffc93c",
    "#38c47a",
    "#2f8fe0",
    "#8b5cf6",
    "#ff9a3d",
  ];

  return (
    <div className={`relative ${className}`}>
      {/* support legs */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d="M200 200 L120 400"
          stroke="#14213d"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M200 200 L280 400"
          stroke="#14213d"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* spinning wheel */}
      <svg
        viewBox="0 0 400 400"
        className="h-full w-full animate-spin-slower drop-shadow-[0_20px_35px_rgba(20,33,61,0.25)]"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#14213d"
          strokeWidth="10"
        />
        <circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.6"
          strokeWidth="2"
        />
        {spokeColors.map((color, i) => {
          const angle = (i / spokeColors.length) * 2 * Math.PI;
          const x = 200 + 170 * Math.cos(angle);
          const y = 200 + 170 * Math.sin(angle);
          return (
            <line
              key={i}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
        <circle cx="200" cy="200" r="22" fill="#14213d" />

        {spokeColors.map((color, i) => {
          const angle = (i / spokeColors.length) * 2 * Math.PI;
          const x = 200 + 170 * Math.cos(angle);
          const y = 200 + 170 * Math.sin(angle);
          return (
            <g key={`cab-${i}`}>
              <rect
                x={x - 18}
                y={y - 14}
                width="36"
                height="28"
                rx="8"
                fill="white"
                stroke={color}
                strokeWidth="4"
              />
              <circle cx={x} cy={y - 22} r="3" fill={color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
