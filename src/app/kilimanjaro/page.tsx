export const metadata = {
  title: 'Kilimanjaro — Routes, Safety, and Preparation',
  description:
    'Compare Machame, Marangu, and Lemosho routes. Learn about difficulty, altitude, safety, and how we prepare you for a successful Kilimanjaro summit.',
};

export default function KilimanjaroPage() {
  return (
    <div className="container py-14 space-y-12">
      <header>
        <h1 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Kilimanjaro</h1>
        <p className="mt-3 max-w-2xl text-white/80">Safety-first ascents led by certified mountain guides. Dedicated acclimatization, comprehensive briefings, and top-tier equipment.</p>
      </header>
      <section className="glass rounded-2xl p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4" style={{fontFamily:'var(--font-display)'}}>Route Comparison</h2>
        <table className="w-full text-sm">
          <thead className="text-left text-white/70">
            <tr><th className="py-2 pr-4">Route</th><th className="py-2 pr-4">Duration</th><th className="py-2 pr-4">Difficulty</th><th className="py-2 pr-4">Highlights</th></tr>
          </thead>
          <tbody className="text-white/90">
            <tr><td className="py-2 pr-4">Machame</td><td className="py-2 pr-4">6–7 days</td><td className="py-2 pr-4">Challenging</td><td className="py-2 pr-4">Scenic, good acclimatization</td></tr>
            <tr><td className="py-2 pr-4">Marangu</td><td className="py-2 pr-4">5–6 days</td><td className="py-2 pr-4">Moderate</td><td className="py-2 pr-4">Huts, gradual ascent</td></tr>
            <tr><td className="py-2 pr-4">Lemosho</td><td className="py-2 pr-4">7–8 days</td><td className="py-2 pr-4">Moderate–Challenging</td><td className="py-2 pr-4">Quiet, panoramic west approach</td></tr>
          </tbody>
        </table>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Altitude Guidance</h3><p className="mt-2 text-white/80">Climb high, sleep low; hydration; and staged ascents reduce AMS risk. Pulse-ox monitoring on all climbs.</p></div>
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Safety Procedures</h3><p className="mt-2 text-white/80">WFR-trained leaders, evacuation plans, satellite comms, and thorough equipment checks each day.</p></div>
      </section>
      <section className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Preparation Guide</h3><p className="mt-2 text-white/80">Training tips, gear lists, and nutrition planning provided upon booking. Private pre-climb briefing in Arusha.</p></section>
    </div>
  );
}