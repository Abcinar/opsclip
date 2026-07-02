"use client";
import { type Translations } from "@/lib/i18n";
import { Upload, Sparkles, Download } from "lucide-react";

const icons = [Upload, Sparkles, Download];

export default function HowItWorks({ t }: { t: Translations }) {
  return (
    <section id="how" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="section-badge mb-4">{t.how.badge}</span>
        <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-14">{t.how.title}</h2>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-0.5 bg-teal-border" />
          {t.how.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  <Icon size={28} className="text-gold" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-teal rounded-full text-white text-xs font-black flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-text/70 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
