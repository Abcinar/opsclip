"use client";
import Link from "next/link";
import { Upload, Film, TrendingUp, Clock, ArrowRight, Plus } from "lucide-react";

const recentProjects = [
  { id: 1, title: "Podcast Episode #47 — Arabic Interview", lang: "🇸🇦", status: "done",     clips: 8,  duration: "58m", ago: "2h ago" },
  { id: 2, title: "Hindi Product Review — Samsung Galaxy",  lang: "🇮🇳", status: "done",     clips: 5,  duration: "22m", ago: "1d ago" },
  { id: 3, title: "Turkish Business Webinar Q3 2026",       lang: "🇹🇷", status: "processing",clips: 0, duration: "1h 12m", ago: "5m ago" },
  { id: 4, title: "Indonesian Travel Vlog — Bali Series",   lang: "🇮🇩", status: "done",     clips: 12, duration: "34m", ago: "3d ago" },
];

const stats = [
  { icon: Film,       label: "Total Clips",      value: "34",   sub: "this month",   color: "bg-teal-light text-teal" },
  { icon: Upload,     label: "Videos Processed", value: "12",   sub: "this month",   color: "bg-gold/10 text-gold" },
  { icon: TrendingUp, label: "Avg Viral Score",  value: "78%",  sub: "across clips", color: "bg-blue-50 text-blue-500" },
  { icon: Clock,      label: "Hours Saved",      value: "~14h", sub: "this month",   color: "bg-purple-50 text-purple-500" },
];

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Welcome */}
      <div className="bg-navy rounded-2xl p-6 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xl mb-1">Welcome back 👋</h1>
          <p className="text-white/60 text-sm">You have <span className="text-gold font-semibold">47 credits</span> — they never expire.</p>
        </div>
        <Link href="/upload" className="btn-gold flex items-center gap-2 text-sm px-5 py-2.5">
          <Plus size={16} /> New Clip
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ icon: Icon, label, value, sub, color }) => (
          <div key={label} className="card p-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${color}`}>
              <Icon size={18} />
            </div>
            <div className="text-2xl font-black text-navy">{value}</div>
            <div className="text-xs font-semibold text-gray-text mt-0.5">{label}</div>
            <div className="text-xs text-gray-mid">{sub}</div>
          </div>
        ))}
      </div>

      {/* Recent projects */}
      <div className="card">
        <div className="flex items-center justify-between p-5 border-b border-gray-line">
          <h2 className="font-bold text-navy">Recent Projects</h2>
          <Link href="/clips" className="text-teal text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="divide-y divide-gray-line">
          {recentProjects.map(p => (
            <div key={p.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-light/50 transition-colors">
              <span className="text-2xl">{p.lang}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-navy truncate">{p.title}</div>
                <div className="text-xs text-gray-mid">{p.duration} · {p.ago}</div>
              </div>
              {p.status === "processing" ? (
                <span className="flex items-center gap-1.5 text-xs bg-gold/10 text-gold border border-gold/20 px-2.5 py-1 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" /> Processing
                </span>
              ) : (
                <span className="text-xs bg-teal-light text-teal border border-teal-border px-2.5 py-1 rounded-full font-medium">
                  {p.clips} clips
                </span>
              )}
              <Link href={`/clips?id=${p.id}`}
                className="text-gray-mid hover:text-teal transition-colors">
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Quick start */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/upload"
          className="card p-5 flex items-center gap-4 hover:border-teal transition-colors group">
          <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-all">
            <Upload size={22} className="text-teal group-hover:text-white" />
          </div>
          <div>
            <div className="font-semibold text-navy">Upload new video</div>
            <div className="text-sm text-gray-mid">Paste URL or upload file</div>
          </div>
          <ArrowRight size={16} className="ml-auto text-gray-mid group-hover:text-teal transition-colors" />
        </Link>
        <Link href="/clips"
          className="card p-5 flex items-center gap-4 hover:border-teal transition-colors group">
          <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold transition-all">
            <Film size={22} className="text-gold" />
          </div>
          <div>
            <div className="font-semibold text-navy">Browse my clips</div>
            <div className="text-sm text-gray-mid">34 clips ready to download</div>
          </div>
          <ArrowRight size={16} className="ml-auto text-gray-mid group-hover:text-gold transition-colors" />
        </Link>
      </div>
    </div>
  );
}
