export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92dvh] overflow-hidden bg-hero-gradient">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,17,21,0.9),rgba(15,17,21,0.2))]" />
        <div className="relative container z-10 flex h-full flex-col items-center justify-center text-center">
          <p className="animate-fade-in text-sm tracking-[0.25em] text-muted">TANZANIA • EAST AFRICA</p>
          <h1 className="mt-4 max-w-4xl text-balance text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight" style={{fontFamily:'var(--font-display)'}}>
            Explore Tanzania Beyond Limits
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Wildlife Safaris • Kilimanjaro Climbing • Zanzibar Escape
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="/packages" className="rounded-full bg-accent px-7 py-3 text-black font-medium hover:brightness-110 transition ripple focus-ring">Plan Your Adventure</a>
            <a href="#categories" className="rounded-full px-7 py-3 border border-white/15 hover:border-white/30 transition focus-ring">View Safari Packages</a>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="h-10 w-[2px] bg-white/40 mx-auto rounded" />
            <div className="mt-2 h-3 w-[2px] bg-white/80 mx-auto rounded animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Our Brand Story</h2>
          <p className="mt-4 text-white/80">Founded by passionate Tanzanian explorers, MAN ON ADVENTURE blends local authenticity with global service standards. Every journey supports conservation, celebrates culture, and seeks the moments that change us.</p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="container py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[{t:"Wildlife Safari",d:"Serengeti, Ngorongoro, Tarangire, Manyara"},{t:"Kilimanjaro & Meru",d:"Machame • Marangu • Lemosho"},{t:"Zanzibar Escape",d:"Stone Town • Beaches • Spice"}].map((c)=> (
            <a key={c.t} href="#" className="group glass rounded-2xl p-6 shadow-soft hover:shadow-glow transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>{c.t}</h3>
                <span aria-hidden className="rounded-full border border-white/15 p-2 group-hover:bg-accent group-hover:text-black transition">→</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Packages */}
      <section className="container py-10">
        <h2 className="text-3xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>Featured Safari Packages</h2>
        {/* @ts-expect-error Async Server Component boundary for simplicity */}
        <FeaturedGrid />
      </section>

      {/* Why Choose */}
      <section className="container py-10">
        <h2 className="text-3xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>Why Choose MAN ON ADVENTURE</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Licensed professional guides","Custom itineraries","24/7 global support","Sustainable tourism","Safety & comfort","Luxury safari vehicles"].map((x)=> (
            <div key={x} className="glass rounded-2xl p-6">
              <div className="text-accent mb-2">★</div>
              <p className="text-white/90">{x}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] border-t border-white/10">
        <div className="container text-center">
          <h2 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Your African Adventure Starts Here</h2>
          <p className="mt-3 text-white/80">Tell us your dreams—wildlife, summits, or island escapes—and we’ll craft a cinematic itinerary that fits your pace and style.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="/contact" className="rounded-full bg-accent px-7 py-3 text-black font-medium hover:brightness-110 transition ripple">Inquiry Form</a>
            <a href="https://wa.me/255700000000" target="_blank" className="rounded-full px-7 py-3 border border-white/15 hover:border-white/30 transition">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

async function FeaturedGrid() {
  const { packages } = await import("@/data/packages");
  const { default: PackageCard } = await import("@/components/PackageCard");
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {packages.slice(0,3).map((p)=> (
        // @ts-expect-error dynamic import type relax
        <PackageCard key={p.slug} p={p} />
      ))}
    </div>
  );
}
