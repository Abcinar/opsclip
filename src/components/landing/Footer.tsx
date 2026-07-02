"use client";
import { type Translations } from "@/lib/i18n";

export default function Footer({ t }: { t: Translations }) {
  return (
    <footer className="bg-navy py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">C</span>
              </div>
              <span className="text-white font-bold">ClipAI</span>
            </div>
            <p className="text-white/40 text-sm">{t.footer.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {t.footer.links.map((link, i) => (
              <a key={i} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">{link}</a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/30 text-xs">
          {t.footer.copy}
        </div>
      </div>
    </footer>
  );
}
