"use client";
import { useMemo, useState } from "react";
import { packages as all } from "@/data/packages";
import PackageCard from "@/components/PackageCard";

export default function PackagesPage() {
  const [type, setType] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [duration, setDuration] = useState<string>("");

  const filtered = useMemo(() => {
    return all.filter((p) =>
      (!type || p.type === type) &&
      (!level || p.level === level) &&
      (!duration || p.duration.startsWith(duration))
    );
  }, [type, level, duration]);

  return (
    <div className="container py-14">
      <h1 className="text-4xl font-semibold mb-6" style={{fontFamily:'var(--font-display)'}}>Safari Packages</h1>
      <div className="glass rounded-2xl p-4 grid gap-4 sm:grid-cols-3 mb-6">
        <select className="rounded-md bg-white/5 border border-white/15 px-3 py-2" value={type} onChange={(e)=>setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="wildlife">Wildlife</option>
          <option value="kilimanjaro">Kilimanjaro</option>
          <option value="zanzibar">Zanzibar</option>
        </select>
        <select className="rounded-md bg-white/5 border border-white/15 px-3 py-2" value={level} onChange={(e)=>setLevel(e.target.value)}>
          <option value="">All Levels</option>
          <option value="budget">Budget</option>
          <option value="midrange">Midrange</option>
          <option value="luxury">Luxury</option>
        </select>
        <select className="rounded-md bg-white/5 border border-white/15 px-3 py-2" value={duration} onChange={(e)=>setDuration(e.target.value)}>
          <option value="">All Durations</option>
          <option value="4 Days">4 Days</option>
          <option value="5 Days">5 Days</option>
          <option value="7 Days">7 Days</option>
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p)=> (
          <PackageCard key={p.slug} p={p} />
        ))}
      </div>
      {/* Simple JSON-LD schema for tours */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: filtered.map((p, i)=> ({
              '@type': 'ListItem',
              position: i+1,
              item: {
                '@type': 'TouristTrip',
                name: p.title,
                description: `${p.title} — ${p.duration}`,
                itinerary: p.duration,
              }
            })),
          })
        }}
      />
    </div>
  );
}