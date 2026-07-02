"use client";
import { type Translations } from "@/lib/i18n";

export default function Testimonials({ t }: { t: Translations }) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">{t.testimonials.badge}</span>
          <h2 className="text-3xl font-black text-navy mt-4">{t.testimonials.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="card p-6">
              <div className="flex text-gold text-sm mb-3">★★★★★</div>
              <p className="text-gray-text/80 text-sm leading-relaxed italic mb-4">{item.quote}</p>
              <div>
                <div className="font-semibold text-navy text-sm">{item.name}</div>
                <div className="text-gray-mid text-xs">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
