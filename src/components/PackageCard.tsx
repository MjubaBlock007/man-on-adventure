"use client";
import Image from "next/image";

export type Package = {
  slug: string;
  title: string;
  hero: string;
  duration: string; // e.g., '7 Days / 6 Nights'
  price?: string;
  level: 'budget' | 'midrange' | 'luxury';
  type: 'wildlife' | 'kilimanjaro' | 'zanzibar';
};

export default function PackageCard({ p }: { p: Package }) {
  return (
    <a href={`/packages#${p.slug}`} className="group relative overflow-hidden rounded-2xl glass shadow-soft hover:shadow-glow transition block">
      <div className="relative h-52 w-full">
        <Image src={p.hero} alt={p.title} fill className="object-cover object-center opacity-90 group-hover:opacity-100 transition" />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold" style={{fontFamily:'var(--font-display)'}}>{p.title}</h3>
          <span className="text-xs rounded-full border border-white/15 px-2 py-1 opacity-80">{p.duration}</span>
        </div>
        <div className="mt-2 text-sm text-white/80">
          {p.price ? p.price : 'Request Quote'}
        </div>
      </div>
    </a>
  );
}