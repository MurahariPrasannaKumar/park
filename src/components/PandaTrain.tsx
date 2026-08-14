export default function PandaTrain({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 620 220"
      className={className}
      aria-hidden="true"
    >
      {/* track */}
      <line x1="0" y1="200" x2="620" y2="200" stroke="#14213d" strokeWidth="6" strokeDasharray="14 10" />

      {/* carriage 2 */}
      <g transform="translate(430,60)">
        <rect x="0" y="60" width="140" height="80" rx="22" fill="#ffc93c" stroke="#14213d" strokeWidth="5" />
        <rect x="16" y="76" width="40" height="34" rx="8" fill="#fff" stroke="#14213d" strokeWidth="4" />
        <rect x="84" y="76" width="40" height="34" rx="8" fill="#fff" stroke="#14213d" strokeWidth="4" />
        <circle cx="30" cy="150" r="16" fill="#14213d" />
        <circle cx="110" cy="150" r="16" fill="#14213d" />
        <circle cx="30" cy="150" r="6" fill="#ffc93c" />
        <circle cx="110" cy="150" r="6" fill="#ffc93c" />
      </g>

      {/* connector */}
      <rect x="410" y="150" width="24" height="8" rx="4" fill="#14213d" />

      {/* panda engine */}
      <g transform="translate(150,20)">
        {/* body */}
        <rect x="0" y="70" width="230" height="90" rx="26" fill="#ffffff" stroke="#14213d" strokeWidth="5" />
        <rect x="0" y="70" width="230" height="90" rx="26" fill="#ffffff" />
        {/* black patches on body */}
        <ellipse cx="55" cy="115" rx="28" ry="26" fill="#14213d" />
        <ellipse cx="180" cy="115" rx="30" ry="30" fill="#14213d" />

        {/* chimney */}
        <rect x="170" y="20" width="26" height="50" rx="8" fill="#ff5d8f" stroke="#14213d" strokeWidth="4" />
        <circle cx="183" cy="10" r="10" fill="#e5e7eb" opacity="0.8" />
        <circle cx="200" cy="-2" r="13" fill="#e5e7eb" opacity="0.6" />

        {/* panda face */}
        <circle cx="60" cy="55" r="46" fill="#ffffff" stroke="#14213d" strokeWidth="5" />
        <circle cx="24" cy="18" r="16" fill="#14213d" />
        <circle cx="96" cy="18" r="16" fill="#14213d" />
        <ellipse cx="42" cy="55" rx="12" ry="15" fill="#14213d" />
        <ellipse cx="78" cy="55" rx="12" ry="15" fill="#14213d" />
        <circle cx="45" cy="53" r="4" fill="#fff" />
        <circle cx="81" cy="53" r="4" fill="#fff" />
        <ellipse cx="60" cy="72" rx="9" ry="6" fill="#14213d" />
        <path d="M52 82 Q60 90 68 82" stroke="#14213d" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="24" cy="70" rx="8" ry="6" fill="#ffb6c1" opacity="0.7" />
        <ellipse cx="96" cy="70" rx="8" ry="6" fill="#ffb6c1" opacity="0.7" />

        {/* wheels */}
        <circle cx="45" cy="180" r="20" fill="#14213d" />
        <circle cx="120" cy="180" r="20" fill="#14213d" />
        <circle cx="195" cy="180" r="20" fill="#14213d" />
        <circle cx="45" cy="180" r="7" fill="#ff9a3d" />
        <circle cx="120" cy="180" r="7" fill="#ff9a3d" />
        <circle cx="195" cy="180" r="7" fill="#ff9a3d" />
      </g>

      {/* connector 2 */}
      <rect x="130" y="150" width="24" height="8" rx="4" fill="#14213d" />

      {/* steam puffs */}
      <circle cx="345" cy="15" r="10" fill="#fff" opacity="0.85" className="animate-float-slow" />
      <circle cx="365" cy="0" r="14" fill="#fff" opacity="0.7" className="animate-float-slower" />
      <circle cx="390" cy="-15" r="18" fill="#fff" opacity="0.55" className="animate-float-slow" />
    </svg>
  );
}
