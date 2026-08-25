export const metadata = {
  title: 'Wildlife Safaris — Serengeti, Ngorongoro, Tarangire, Manyara',
  description:
    'Licensed guides, custom itineraries, and luxury vehicles for immersive Tanzania wildlife safaris across Serengeti, Ngorongoro, Tarangire, and Lake Manyara.',
};

export default function WildlifePage() {
  return (
    <div className="container py-14 space-y-12">
      <header>
        <h1 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Wildlife Safaris</h1>
        <p className="mt-3 max-w-2xl text-white/80">From the Serengeti plains to the Ngorongoro Crater, witness the Big Five, the Great Migration, and golden-hour landscapes with our licensed, conservation-minded guides.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold" style={{fontFamily:'var(--font-display)'}}>The Great Migration</h2>
          <p className="mt-2 text-white/80">Plan around seasonal river crossings, calving, and predator action. We craft routes to position you close to the action while respecting wildlife and habitats.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-2xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Luxury Safari Vehicles</h2>
          <p className="mt-2 text-white/80">Extended pop-top 4x4s, charging ports, fridge, and window seats for every guest—engineered for comfort, safety, and photography.</p>
        </div>
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Sample Itinerary</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-white/80">
          <li>Day 1–2: Arusha to Tarangire — elephants & baobabs</li>
          <li>Day 3: Lake Manyara — tree-climbing lions, flamingos</li>
          <li>Day 4: Ngorongoro Crater — Big Five in a day</li>
          <li>Day 5–6: Serengeti — migration tracking & sundowners</li>
          <li>Day 7: Fly back to Arusha or continue to Zanzibar</li>
        </ul>
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-semibold" style={{fontFamily:'var(--font-display)'}}>FAQ</h2>
        <details className="mt-2">
          <summary className="cursor-pointer">When is the best time to see the migration?</summary>
          <p className="mt-2 text-white/80">Peak river crossings often occur Jun–Sep (north), while calving season runs Jan–Mar (south). We advise based on current movement.</p>
        </details>
      </section>
    </div>
  );
}