"use client";
import { Check } from "lucide-react";
import { type Translations } from "@/lib/i18n";

export default function Pricing({ t }: { t: Translations }) {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-badge mb-4">{t.pricing.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mt-4 mb-3">{t.pricing.title}</h2>
          <p className="text-gray-text/70 max-w-xl mx-auto text-sm">{t.pricing.sub}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {t.pricing.plans.map((plan, i) => (
            <div key={i} className={`card p-6 relative flex flex-col
              ${plan.popular ? "border-2 border-teal ring-4 ring-teal/10 scale-[1.02]" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-4">
                <div className="text-navy font-bold text-lg">{plan.name}</div>
                <div className="text-gray-text/60 text-xs">{plan.desc}</div>
              </div>
              <div className="mb-5">
                <span className="text-4xl font-black text-navy">{plan.price}</span>
                {plan.price !== "Custom" && plan.price !== "İletişim" && plan.price !== "Hubungi Kami" && plan.price !== "تواصل معنا" && plan.price !== "संपर्क करें" && (
                  <span className="text-gray-text/50 text-sm ml-1">/mo</span>
                )}
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check size={14} className="text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-gray-text/80">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all
                ${plan.popular
                  ? "bg-teal text-white hover:bg-teal-dark"
                  : "border-2 border-navy text-navy hover:bg-navy hover:text-white"}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* PPP Note */}
        <div className="text-center text-sm text-gray-text/60 bg-teal-light border border-teal-border rounded-xl px-6 py-3 max-w-2xl mx-auto">
          {t.pricing.note}
        </div>
      </div>
    </section>
  );
}
