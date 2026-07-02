"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Translations } from "@/lib/i18n";

export default function CTA({ t }: { t: Translations }) {
  return (
    <section className="py-20 px-4 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{t.cta.headline}</h2>
        <p className="text-white/70 mb-8">{t.cta.sub}</p>
        <Link href="/signup" className="btn-gold inline-flex items-center gap-2 text-base px-8 py-4">
          {t.cta.btn}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
