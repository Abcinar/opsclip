"use client";
import { useState } from "react";
import Link from "next/link";
import { translations, LOCALES, type Locale } from "@/lib/i18n";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps { locale: Locale; onLocaleChange: (l: Locale) => void; }

export default function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = translations[locale]?.nav ?? translations.en.nav;
  const current = LOCALES.find(l => l.code === locale)!;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — LC */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-teal to-navy-mid rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-gold font-black text-sm tracking-tight">LC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-black text-base tracking-tight">Lumina</span>
              <span className="text-gold font-semibold text-xs tracking-widest uppercase">Clip</span>
            </div>
            <span className="hidden sm:block bg-gold/20 text-gold text-xs font-semibold px-2 py-0.5 rounded-full border border-gold/30">BETA</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: t.features,   href: "#features"  },
              { label: t.howItWorks, href: "#how"        },
              { label: t.pricing,    href: "#pricing"    },
            ].map(item => (
              <a key={item.href} href={item.href}
                className="text-white/70 hover:text-white text-sm font-medium nav-link transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors">
                <Globe size={14} />
                <span>{current.flag}</span>
                <span className="text-xs">{current.label.split(" ")[0]}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 bg-navy-mid border border-white/10 rounded-xl shadow-xl overflow-hidden w-48">
                  {LOCALES.map(l => (
                    <button key={l.code}
                      onClick={() => { onLocaleChange(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors
                        ${l.code === locale ? "text-gold" : "text-white/80"}`}>
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                      {l.code === locale && <span className="ml-auto text-gold">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link href="/login" className="text-white/70 hover:text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t.login}
            </Link>
            <Link href="/signup"
              className="bg-gold text-navy font-bold text-sm px-5 py-2 rounded-xl hover:bg-gold-dark transition-all shadow-lg hover:-translate-y-0.5">
              {t.startFree}
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy border-t border-white/10 px-4 py-4 space-y-2">
          {[t.features, t.howItWorks, t.pricing].map((label, i) => (
            <a key={i} href={["#features","#how","#pricing"][i]}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white py-2 text-sm font-medium">
              {label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex gap-2">
            <Link href="/login" className="flex-1 text-center text-white/70 border border-white/20 py-2 rounded-lg text-sm">
              {t.login}
            </Link>
            <Link href="/signup" className="flex-1 text-center bg-gold text-navy font-bold py-2 rounded-lg text-sm">
              {t.startFree}
            </Link>
          </div>
          <div className="pt-2 border-t border-white/10">
            <p className="text-white/40 text-xs mb-2">Language / Dil</p>
            <div className="flex flex-wrap gap-2">
              {LOCALES.map(l => (
                <button key={l.code} onClick={() => { onLocaleChange(l.code); setOpen(false); }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs border transition-colors
                    ${l.code === locale ? "bg-gold text-navy border-gold font-bold" : "border-white/20 text-white/70"}`}>
                  {l.flag} {l.label.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
