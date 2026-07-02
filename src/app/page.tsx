"use client";
import { useState } from "react";
import { type Locale, translations } from "@/lib/i18n";
import Navbar       from "@/components/landing/Navbar";
import Hero         from "@/components/landing/Hero";
import ProblemSolution from "@/components/landing/ProblemSolution";
import Features     from "@/components/landing/Features";
import HowItWorks   from "@/components/landing/HowItWorks";
import Stats        from "@/components/landing/Stats";
import Pricing      from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ          from "@/components/landing/FAQ";
import CTA          from "@/components/landing/CTA";
import Footer       from "@/components/landing/Footer";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = translations[locale] ?? translations.en;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir} lang={locale}>
      <Navbar locale={locale} onLocaleChange={setLocale} />
      <Hero            t={t} />
      <ProblemSolution t={t} />
      <Features        t={t} />
      <HowItWorks      t={t} />
      <Stats           t={t} />
      <Pricing         t={t} />
      <Testimonials    t={t} />
      <FAQ             t={t} />
      <CTA             t={t} />
      <Footer          t={t} />
    </div>
  );
}
