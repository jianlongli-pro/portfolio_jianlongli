export default function Waveform({ className = '', color = '#0F6E56' }) {
  return (
    <svg viewBox="0 0 800 60" className={className} preserveAspectRatio="none">
      <path
        d="M0,30 L60,30 L80,30 L95,8 L110,52 L125,30 L160,30 L220,30 L235,14 L248,46 L262,30 L300,30 L360,30 L375,4 L390,56 L404,30 L440,30 L500,30 L515,16 L528,44 L542,30 L580,30 L640,30 L655,10 L668,50 L682,30 L720,30 L800,30"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
