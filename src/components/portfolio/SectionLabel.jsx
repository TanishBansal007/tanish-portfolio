export default function SectionLabel({ number, title, side = 'dark' }) {
  const color = side === 'dark' ? 'text-white/40' : 'text-[#080808]/40';
  const accent = side === 'dark' ? 'text-[#1877F2]' : 'text-[#1877F2]';
  const line = side === 'dark' ? 'bg-white/20' : 'bg-[#080808]/20';
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className={`font-mono text-xs ${accent}`}>{number}</span>
      <div className={`h-px w-8 ${line}`} />
      <span className={`font-mono text-xs uppercase tracking-widest ${color}`}>{title}</span>
    </div>
  );
}