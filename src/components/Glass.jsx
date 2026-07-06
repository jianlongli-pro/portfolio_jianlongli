// Liquid-glass surfaces.
//
// Two variants:
// - Glass: for content panels (cards, nav bar, list containers) — translucent
//   but legible, since text sits directly on it.
// - GlassButton: for interactive controls (buttons, toggles, tag chips) —
//   noticeably more translucent and brighter, with a stronger top highlight
//   and a soft outer glow, plus press/hover feedback. This is the layer that
//   should read as "liquid glass" at a glance.

export function Glass({ as: Tag = 'div', className = '', tint, style = {}, children, ...rest }) {
  const base = {
    background: tint
      ? `linear-gradient(135deg, ${tint.bg}CC 0%, ${tint.bg}66 65%)`
      : 'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.22) 65%)',
    backdropFilter: 'blur(20px) saturate(160%)',
    WebkitBackdropFilter: 'blur(20px) saturate(160%)',
    border: `1px solid ${tint ? tint.border + '66' : 'rgba(255,255,255,0.6)'}`,
    boxShadow: '0 1px 0 rgba(255,255,255,0.7) inset, 0 10px 30px -12px rgba(43,38,32,0.20)',
    ...style,
  };
  return (
    <Tag className={className} style={base} {...rest}>
      {children}
    </Tag>
  );
}

export function GlassButton({ as: Tag = 'button', className = '', tint, active, style = {}, children, ...rest }) {
  const resting = tint
    ? `linear-gradient(135deg, ${tint.bg}99 0%, ${tint.bg}26 75%)`
    : 'linear-gradient(135deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.10) 75%)';
  const activeBg = tint
    ? `linear-gradient(135deg, ${tint.bg}CC 0%, ${tint.bg}55 75%)`
    : 'linear-gradient(135deg, rgba(255,255,255,0.70) 0%, rgba(255,255,255,0.30) 75%)';

  const base = {
    background: active ? activeBg : resting,
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    border: `1px solid ${tint ? tint.border + (active ? 'AA' : '55') : `rgba(255,255,255,${active ? 0.85 : 0.45})`}`,
    boxShadow: active
      ? '0 1px 0 rgba(255,255,255,0.9) inset, 0 -8px 14px rgba(255,255,255,0.18) inset, 0 6px 16px -6px rgba(43,38,32,0.30)'
      : '0 1px 0 rgba(255,255,255,0.55) inset, 0 -6px 10px rgba(255,255,255,0.10) inset, 0 4px 10px -6px rgba(43,38,32,0.18)',
    ...style,
  };
  return (
    <Tag
      className={`transition-all duration-200 ease-out active:scale-[0.96] hover:brightness-105 will-change-transform ${className}`}
      style={base}
      {...rest}
    >
      {children}
    </Tag>
  );
}
