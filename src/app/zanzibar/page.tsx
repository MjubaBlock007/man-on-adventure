export const metadata = {
  title: 'Zanzibar — Culture, Beaches, Honeymoons, and Activities',
  description:
    'Tailored Zanzibar escapes: Stone Town heritage, beach resorts, spice tours, snorkeling, and romantic honeymoons.',
};

export default function ZanzibarPage() {
  return (
    <div className="container py-14 space-y-12">
      <header>
        <h1 className="text-4xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Zanzibar</h1>
        <p className="mt-3 max-w-2xl text-white/80">Blend Swahili culture with turquoise waters. Curated properties from boutique to ultra-luxury, with private transfers and guided experiences.</p>
      </header>
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {t:'Cultural Tours', d:'Stone Town alleys, architecture, and local cuisine.'},
          {t:'Beach Holidays', d:'World-class beaches from Nungwi to Paje with watersports.'},
          {t:'Honeymoon', d:'Private villas, sundowners, and bespoke romantic touches.'},
        ].map((x)=> (
          <div key={x.t} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-semibold" style={{fontFamily:'var(--font-display)'}}>{x.t}</h3>
            <p className="mt-2 text-white/80">{x.d}</p>
          </div>
        ))}
      </section>
      <section className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-semibold" style={{fontFamily:'var(--font-display)'}}>Activity Highlights</h2>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-white/80">
          <li>Snorkeling and dolphin tours</li>
          <li>Spice plantations and cooking classes</li>
          <li>Sunset dhow cruises and sandbank picnics</li>
        </ul>
      </section>
    </div>
  );
}