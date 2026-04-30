export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.06),transparent_26%)]" />
      <div className="absolute left-[4%] top-12 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulseGlow" />
      <div className="absolute right-[6%] top-24 h-[24rem] w-[24rem] rounded-full bg-accent-2/10 blur-3xl animate-float" />
      <div className="absolute bottom-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute inset-0 bg-grid opacity-[0.04] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] opacity-40" />
    </div>
  );
}
