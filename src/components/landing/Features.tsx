"use client";
import { type Translations } from "@/lib/i18n";

export default function Features({ t }: { t: Translations }) {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-badge mb-4">{t.features.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-4">{t.features.title}</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((f, i) => (
            <div key={i} className="card p-6 group hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-text/70 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
