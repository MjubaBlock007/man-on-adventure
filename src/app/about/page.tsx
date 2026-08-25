export const metadata = {
  title: 'About Us — MAN ON ADVENTURE',
  description:
    'Founded by passionate Tanzanian explorers, blending local authenticity with international service standards and a commitment to sustainability.',
};

export default function AboutPage() {
  return (
    <div className="container py-14 space-y-10">
      <header>
        <h1 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Our Story</h1>
        <p className="mt-3 max-w-3xl text-white/80">We are Tanzanian-born explorers who craft cinematic journeys across our homeland. Our ethos: genuine hospitality, cultural respect, and conservation-first travel that changes lives—yours and ours.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Founder Story</h3><p className="mt-2 text-white/80">Born in Arusha, raised on the plains—our founders turned lifelong passion into world-class guiding.</p></div>
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Mission & Vision</h3><p className="mt-2 text-white/80">Elevate authentic East African travel while preserving the ecosystems and cultures that define it.</p></div>
        <div className="glass rounded-2xl p-6"><h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Sustainability</h3><p className="mt-2 text-white/80">We support local conservation initiatives and community projects through every itinerary.</p></div>
      </section>
    </div>
  );
}