// Drawn pictures in brand colours for services and products.
// Pass "image" to show a real photo or screenshot instead.
const C = {
  blue: "#0060be",
  orange: "#ff9700",
  sky: "#4db2ff",
  midnight: "#101a2e",
  body: "#1d2b45",
  white: "#ffffff",
  tint: "#f3f7fc",
  mist: "#e6eef7",
  line: "#cbd8e6",
};

function Web() {
  return (
    <>
      <rect x="40" y="28" width="240" height="150" rx="10" fill={C.white} />
      <path d="M50 28h220a10 10 0 0 1 10 10v12H40V38a10 10 0 0 1 10-10z" fill={C.mist} />
      <circle cx="54" cy="39" r="3" fill={C.orange} />
      <circle cx="64" cy="39" r="3" fill={C.sky} />
      <circle cx="74" cy="39" r="3" fill={C.line} />
      <rect x="88" y="34" width="120" height="10" rx="5" fill={C.white} />
      <rect x="52" y="60" width="216" height="44" rx="6" fill={C.blue} />
      <rect x="64" y="72" width="90" height="7" rx="3.5" fill={C.white} />
      <rect x="64" y="85" width="60" height="5" rx="2.5" fill={C.white} opacity="0.6" />
      <rect x="200" y="75" width="54" height="15" rx="4" fill={C.orange} />
      {[52, 127, 202].map((x, i) => (
        <g key={x}>
          <rect x={x} y="114" width="66" height="52" rx="6" fill={C.tint} stroke={C.line} />
          <rect x={x + 8} y="122" width="14" height="14" rx="3" fill={i === 1 ? C.orange : C.sky} />
          <rect x={x + 8} y="144" width="44" height="5" rx="2.5" fill={C.line} />
          <rect x={x + 8} y="153" width="30" height="5" rx="2.5" fill={C.line} />
        </g>
      ))}
      <rect x="242" y="12" width="54" height="28" rx="8" fill={C.orange} />
      <path d="m258 21-5 5 5 5M280 21l5 5-5 5M272 19l-6 14" fill="none" stroke={C.midnight} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Mobile() {
  return (
    <>
      <rect x="40" y="58" width="70" height="36" rx="8" fill={C.white} />
      <circle cx="55" cy="76" r="7" fill={C.orange} />
      <rect x="67" y="70" width="34" height="4" rx="2" fill={C.line} />
      <rect x="67" y="79" width="22" height="4" rx="2" fill={C.line} />

      <rect x="116" y="12" width="96" height="180" rx="18" fill={C.body} stroke={C.sky} strokeOpacity="0.35" />
      <rect x="122" y="22" width="84" height="160" rx="12" fill={C.white} />
      <path d="M134 22h60a12 12 0 0 1 12 12v28h-84V34a12 12 0 0 1 12-12z" fill={C.blue} />
      <rect x="150" y="26" width="28" height="5" rx="2.5" fill={C.body} />
      <rect x="130" y="40" width="40" height="6" rx="3" fill={C.white} />
      <rect x="130" y="50" width="26" height="4" rx="2" fill={C.white} opacity="0.6" />
      <circle cx="194" cy="46" r="7" fill={C.orange} />
      {[70, 96, 122, 148].map((y, i) => (
        <g key={y}>
          <rect x="130" y={y} width="68" height="20" rx="5" fill={C.tint} />
          <circle cx="140" cy={y + 10} r="5" fill={i % 2 ? C.orange : C.sky} />
          <rect x="150" y={y + 6} width="36" height="4" rx="2" fill={C.line} />
          <rect x="150" y={y + 12} width="24" height="4" rx="2" fill={C.line} />
        </g>
      ))}
      <rect x="150" y="174" width="28" height="3" rx="1.5" fill={C.line} />

      <rect x="220" y="116" width="66" height="40" rx="8" fill={C.white} />
      <circle cx="237" cy="136" r="8" fill={C.blue} />
      <path d="m233 136 3 3 5-6" fill="none" stroke={C.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="251" y="130" width="27" height="4" rx="2" fill={C.line} />
      <rect x="251" y="139" width="18" height="4" rx="2" fill={C.line} />
    </>
  );
}

function Ai() {
  const nodes = [
    [66, 50],
    [258, 50],
    [64, 158],
    [258, 158],
  ];
  return (
    <>
      {nodes.map(([x, y]) => (
        <path key={`${x}-${y}`} d={`M160 100L${x} ${y}`} stroke={C.sky} strokeWidth="2" strokeDasharray="4 5" opacity="0.7" />
      ))}

      <rect x="36" y="32" width="62" height="36" rx="10" fill={C.white} />
      <path d="M48 68v10l10-10z" fill={C.white} />
      <rect x="46" y="42" width="40" height="5" rx="2.5" fill={C.line} />
      <rect x="46" y="52" width="28" height="5" rx="2.5" fill={C.line} />

      <rect x="232" y="28" width="54" height="44" rx="8" fill={C.white} />
      <rect x="243" y="52" width="7" height="12" rx="1.5" fill={C.orange} />
      <rect x="254" y="45" width="7" height="19" rx="1.5" fill={C.sky} />
      <rect x="265" y="38" width="7" height="26" rx="1.5" fill={C.blue} />

      <rect x="34" y="140" width="60" height="36" rx="8" fill={C.orange} />
      <rect x="44" y="150" width="38" height="5" rx="2.5" fill={C.midnight} opacity="0.75" />
      <rect x="44" y="160" width="26" height="5" rx="2.5" fill={C.midnight} opacity="0.45" />

      <circle cx="258" cy="158" r="20" fill={C.white} />
      <path d="m249 158 6 6 12-12" fill="none" stroke={C.blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {[145, 160, 175].map((p) => (
        <g key={p} stroke={C.sky} strokeWidth="2.5" strokeLinecap="round">
          <path d={`M${p} 60v10M${p} 130v10`} />
        </g>
      ))}
      {[85, 100, 115].map((p) => (
        <g key={p} stroke={C.sky} strokeWidth="2.5" strokeLinecap="round">
          <path d={`M120 ${p}h10M190 ${p}h10`} />
        </g>
      ))}
      <rect x="130" y="70" width="60" height="60" rx="12" fill={C.blue} />
      <rect x="143" y="83" width="34" height="34" rx="7" fill={C.midnight} />
      <text x="160" y="105" textAnchor="middle" fill={C.white} fontFamily="Sora, Arial, sans-serif" fontSize="14" fontWeight="700">
        AI
      </text>
    </>
  );
}

const drawings = { web: Web, mobile: Mobile, ai: Ai };

export default function Illustration({ art, image, alt = "", className = "" }) {
  const classes = `art ${className}`.trim();
  if (image) {
    return (
      <div className={`${classes} art-photo`}>
        <img src={image} alt={alt} loading="lazy" />
      </div>
    );
  }
  const Drawing = drawings[art] ?? Web;
  return (
    <div className={classes}>
      <svg viewBox="0 0 320 200" role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
        <Drawing />
      </svg>
    </div>
  );
}
