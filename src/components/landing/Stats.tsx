"use client";
import { type Translations } from "@/lib/i18n";

export default function Stats({ t }: { t: Translations }) {
  return (
    <section className="py-16 px-4 hero-gradient">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.stats.items.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-gold mb-1">{s.num}</div>
            <div className="text-white/60 text-xs sm:text-sm leading-tight">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
