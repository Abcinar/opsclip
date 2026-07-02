"use client";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { type Translations } from "@/lib/i18n";

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="hero-gradient min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/30 text-teal-light rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse-slow" />
          Beta — Join free today
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 animate-fade-up">
          {t.hero.headline.split("—")[0]}
          <span className="text-gold">—</span>
          {t.hero.headline.split("—")[1]}
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link href="/signup" className="btn-gold flex items-center gap-2 text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            {t.hero.cta}
            <ArrowRight size={18} />
          </Link>
          <button className="btn-secondary flex items-center gap-2 text-base px-8 py-3.5 w-full sm:w-auto justify-center">
            <Play size={16} className="fill-white" />
            {t.hero.ctaSecondary}
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {t.hero.trust.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-white/60 text-sm">
              <CheckCircle size={14} className="text-teal" />
              {item}
            </div>
          ))}
        </div>

        {/* Language flags */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-white/40 text-xs uppercase tracking-widest">Supported Languages</p>
          <div className="flex items-center gap-3">
            {[
              { flag: "🇸🇦", lang: "Arabic" },
              { flag: "🇮🇳", lang: "Hindi" },
              { flag: "🇮🇩", lang: "Indonesian" },
              { flag: "🇹🇷", lang: "Turkish" },
              { flag: "🇬🇧", lang: "English" },
            ].map(({ flag, lang }) => (
              <div key={lang} className="flex flex-col items-center gap-1 group">
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{flag}</span>
                <span className="text-white/30 text-xs group-hover:text-white/60 transition-colors">{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
