"use client";
import { XCircle, CheckCircle } from "lucide-react";
import { type Translations } from "@/lib/i18n";

export default function ProblemSolution({ t }: { t: Translations }) {
  const competitors = ["OpusClip", "Reap", "Vizard", "Klap", "Choppity"];
  const problems = [
    "Transcription errors in Arabic, Hindi, Indonesian",
    "Broken audio-video sync after silence removal",
    "Subtitles that break mid-word in non-Latin scripts",
    "Credits that vanish when you cancel",
    "Black-box AI — you can't tell it what to find",
  ];

  return (
    <section className="py-20 px-4 bg-gray-light">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Problem */}
        <div className="card p-8 border-l-4 border-l-red-400">
          <span className="inline-block bg-red-50 text-red-500 text-xs font-bold px-3 py-1 rounded-full border border-red-100 mb-4">
            {t.problem.badge}
          </span>
          <h2 className="text-2xl font-black text-navy mb-4">{t.problem.headline}</h2>
          <p className="text-gray-text/70 text-sm mb-6 leading-relaxed">{t.problem.body}</p>
          <div className="space-y-2">
            {problems.map((p, i) => (
              <div key={i} className="flex items-start gap-2">
                <XCircle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-text/70">{p}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {competitors.map(c => (
              <span key={c} className="text-xs bg-red-50 text-red-400 border border-red-100 px-2 py-1 rounded">{c}</span>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div className="card p-8 border-l-4 border-l-teal bg-gradient-to-br from-teal-light to-white">
          <span className="section-badge mb-4">{t.solution.badge}</span>
          <h2 className="text-2xl font-black text-navy mb-4 mt-2">{t.solution.headline}</h2>
          <p className="text-gray-text/70 text-sm mb-6 leading-relaxed">{t.solution.body}</p>
          <div className="space-y-3">
            {[
              "4 languages — but done right, every single time",
              "Native-speaker verified transcription quality",
              "Dialect-aware: Egyptian Arabic ≠ Gulf Arabic",
              "Credits that never expire, ever",
              "Natural language commands — you're in control",
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-text">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
