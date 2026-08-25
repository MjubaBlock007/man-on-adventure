import type { Package } from "@/components/PackageCard";

export const packages: Package[] = [
  {
    slug: 'serengeti-golden-tracks',
    title: 'Serengeti Golden Tracks',
    hero: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1600&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    price: 'From $3,450',
    level: 'midrange',
    type: 'wildlife'
  },
  {
    slug: 'ngorongoro-signature',
    title: 'Ngorongoro Signature',
    hero: 'https://images.unsplash.com/photo-1521007351133-cf8f8a1ddbb5?q=80&w=1600&auto=format&fit=crop',
    duration: '5 Days / 4 Nights',
    price: 'From $2,200',
    level: 'budget',
    type: 'wildlife'
  },
  {
    slug: 'machame-summit',
    title: 'Kilimanjaro Machame Summit',
    hero: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    duration: '7 Days / 6 Nights',
    price: 'From $2,900',
    level: 'midrange',
    type: 'kilimanjaro'
  },
  {
    slug: 'zanzibar-azure-coast',
    title: 'Zanzibar Azure Coast',
    hero: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1600&auto=format&fit=crop',
    duration: '4 Days / 3 Nights',
    price: 'From $1,250',
    level: 'luxury',
    type: 'zanzibar'
  }
];