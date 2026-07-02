"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { type Translations } from "@/lib/i18n";

export default function FAQ({ t }: { t: Translations }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 px-4 bg-gray-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">{t.faq.badge}</span>
          <h2 className="text-3xl font-black text-navy mt-4">{t.faq.title}</h2>
        </div>
        <div className="space-y-3">
          {t.faq.items.map((item, i) => (
            <div key={i} className="card overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-semibold text-navy text-sm pr-4">{item.q}</span>
                <ChevronDown size={18} className={`text-teal flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-text/70 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
