import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import { getDict } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://manonadventure.example"),
  title: {
    default: "MAN ON ADVENTURE — Luxury Tanzania Safaris & Kilimanjaro",
    template: "%s · MAN ON ADVENTURE",
  },
  description:
    "Explore Tanzania beyond limits. Wildlife Safaris, Kilimanjaro Climbing, and Zanzibar escapes crafted by licensed local experts.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MAN ON ADVENTURE — Luxury Tanzania Safaris",
    description:
      "Premium, cinematic adventures across Serengeti, Kilimanjaro, and Zanzibar.",
    url: "https://manonadventure.example",
    siteName: "MAN ON ADVENTURE",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang")?.value;
  const dict = getDict(langCookie);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} antialiased bg-background text-foreground`}>
        <I18nProvider dict={dict}>
          <div className="min-h-dvh flex flex-col">
            <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-md">
              <div className="container flex items-center justify-between py-4">
                <Link href="/" className="inline-flex items-center gap-2 focus-ring" aria-label="MAN ON ADVENTURE home">
                  <span className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,122,69,0.6),_transparent_60%)] ring-1 ring-white/15" />
                  <span className="font-semibold tracking-wide" style={{fontFamily:'var(--font-display)'}}>MAN ON ADVENTURE</span>
                </Link>
                <nav className="hidden md:flex items-center gap-4 text-sm">
                  <Link className="opacity-90 hover:opacity-100 transition" href="/wildlife">{dict.nav.wildlife}</Link>
                  <Link className="opacity-90 hover:opacity-100 transition" href="/kilimanjaro">{dict.nav.kilimanjaro}</Link>
                  <Link className="opacity-90 hover:opacity-100 transition" href="/zanzibar">{dict.nav.zanzibar}</Link>
                  <Link className="opacity-90 hover:opacity-100 transition" href="/packages">{dict.nav.packages}</Link>
                  <Link className="opacity-90 hover:opacity-100 transition" href="/about">{dict.nav.about}</Link>
                  <Link className="opacity-90 hover:opacity-100 transition" href="/contact">{dict.nav.contact}</Link>
                  <Link href="/packages" className="ml-2 rounded-full bg-accent px-4 py-2 text-black font-medium hover:brightness-110 transition ripple">{dict.nav.cta}</Link>
                  <div className="ml-3"><LanguageSwitcher /></div>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t border-white/10 bg-background/80">
              <div className="container py-10 grid gap-6 sm:grid-cols-3">
                <div>
                  <div className="font-semibold" style={{fontFamily:'var(--font-display)'}}>MAN ON ADVENTURE</div>
                  <p className="mt-2 text-sm text-muted">Luxury Tanzania safaris, Kilimanjaro climbs, and Zanzibar escapes.</p>
                </div>
                <div className="text-sm">
                  <div className="font-medium mb-2">Explore</div>
                  <ul className="space-y-1 opacity-90">
                    <li><a href="/wildlife" className="hover:opacity-100">Wildlife Safaris</a></li>
                    <li><a href="/kilimanjaro" className="hover:opacity-100">Kilimanjaro</a></li>
                    <li><a href="/zanzibar" className="hover:opacity-100">Zanzibar</a></li>
                  </ul>
                </div>
                <div className="text-sm">
                  <div className="font-medium mb-2">Contact</div>
                  <p className="opacity-90">WhatsApp: +255 700 000 000</p>
                  <p className="opacity-90">Email: hello@manonadventure.com</p>
                </div>
              </div>
              <div className="border-t border-white/10 py-4 text-center text-xs opacity-70">© {new Date().getFullYear()} MAN ON ADVENTURE. All rights reserved.</div>
            </footer>
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
