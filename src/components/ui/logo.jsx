export default function Logo({ size = 40, showText = true, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        role="img"
        aria-label="Logo Luiz Henrique"
      >
        <rect
          x="0.75"
          y="0.75"
          width="62.5"
          height="62.5"
          rx="16"
          fill="#07070b"
          stroke="#2a2a3a"
          strokeWidth="1.5"
        />
        <circle cx="32" cy="32" r="15" fill="#bd93f9" />
        <circle cx="38" cy="28" r="12.5" fill="#07070b" />
        <circle cx="47" cy="17" r="2.2" fill="#8be9fd" />
      </svg>

      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-light tracking-tight text-white">
            Luiz
          </span>
          <span className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-white/40">
            Web Developer
          </span>
        </span>
      )}
    </span>
  );
}