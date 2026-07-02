"use client";
import { useState } from "react";
import { Download, Edit2, Share2, RefreshCw, Star, Filter, Search, Play, Clock } from "lucide-react";

const mockClips = [
  { id: 1, title: "AI will change everything — trust me",     score: 94, duration: "0:47", lang: "🇸🇦", thumb: "bg-gradient-to-br from-teal to-navy",      project: "Podcast #47 Arabic" },
  { id: 2, title: "The price nobody talks about",             score: 87, duration: "1:02", lang: "🇸🇦", thumb: "bg-gradient-to-br from-navy to-teal-dark", project: "Podcast #47 Arabic" },
  { id: 3, title: "3 tips I wish I knew earlier (Hinglish)", score: 91, duration: "0:55", lang: "🇮🇳", thumb: "bg-gradient-to-br from-gold/60 to-teal",    project: "Hindi Product Review" },
  { id: 4, title: "Why everyone's switching to this",         score: 78, duration: "0:38", lang: "🇮🇳", thumb: "bg-gradient-to-br from-teal-dark to-navy", project: "Hindi Product Review" },
  { id: 5, title: "2026 yılında ne değişecek?",              score: 83, duration: "1:14", lang: "🇹🇷", thumb: "bg-gradient-to-br from-navy to-gold/50",    project: "Turkish Webinar" },
  { id: 6, title: "Bali'de gizli kalan bu yer...",           score: 96, duration: "0:52", lang: "🇮🇩", thumb: "bg-gradient-to-br from-teal to-gold/40",   project: "Indonesian Travel" },
  { id: 7, title: "Cara mudah dapat 10k followers",           score: 89, duration: "0:44", lang: "🇮🇩", thumb: "bg-gradient-to-br from-navy-mid to-teal",  project: "Indonesian Travel" },
  { id: 8, title: "Controversial opinion on this topic",      score: 72, duration: "1:08", lang: "🇸🇦", thumb: "bg-gradient-to-br from-teal-dark to-navy", project: "Podcast #47 Arabic" },
];

const langs = ["All", "🇸🇦 Arabic", "🇮🇳 Hindi", "🇹🇷 Turkish", "🇮🇩 Indonesian"];

export default function ClipsPage() {
  const [search,  setSearch]  = useState("");
  const [langF,   setLangF]   = useState("All");
  const [sort,    setSort]    = useState<"score" | "date">("score");
  const [playing, setPlaying] = useState<number | null>(null);

  const filtered = mockClips
    .filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
    .filter(c => langF === "All" || c.lang === langF.split(" ")[1])
    .sort((a, b) => sort === "score" ? b.score - a.score : b.id - a.id);

  const scoreColor = (s: number) =>
    s >= 90 ? "text-teal bg-teal-light border-teal-border" :
    s >= 75 ? "text-gold bg-gold/10 border-gold/20" :
              "text-gray-mid bg-gray-light border-gray-line";

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-navy">My Clips</h1>
          <p className="text-gray-mid text-sm mt-0.5">{filtered.length} clips · all ready to download</p>
        </div>
        <button className="flex items-center gap-1.5 text-sm text-gray-mid border border-gray-line
          px-3 py-2 rounded-xl hover:border-teal hover:text-teal transition-all">
          <Download size={14} /> Download All
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 flex flex-wrap gap-3 items-center">
        {/* Search */}
        <div className="relative flex-1 min-w-52">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search clips..."
            className="w-full pl-8 pr-3 py-2 border border-gray-line rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" />
        </div>

        {/* Lang filter */}
        <div className="flex gap-1.5 flex-wrap">
          {langs.map(l => (
            <button key={l} onClick={() => setLangF(l)}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all
                ${langF === l ? "bg-navy text-white border-navy" : "border-gray-line text-gray-mid hover:border-navy/30"}`}>
              {l}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 ml-auto">
          <Filter size={14} className="text-gray-mid" />
          <select value={sort} onChange={e => setSort(e.target.value as "score" | "date")}
            className="text-sm border border-gray-line rounded-xl px-3 py-1.5 focus:outline-none focus:border-teal">
            <option value="score">Sort: Viral Score</option>
            <option value="date">Sort: Date</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(clip => (
          <div key={clip.id} className="card overflow-hidden group">
            {/* Thumbnail */}
            <div className={`relative h-36 ${clip.thumb} flex items-center justify-center cursor-pointer`}
              onClick={() => setPlaying(playing === clip.id ? null : clip.id)}>
              <div className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full
                flex items-center justify-center transition-transform group-hover:scale-110
                ${playing === clip.id ? "bg-teal/80" : ""}`}>
                <Play size={20} className="text-white fill-white ml-0.5" />
              </div>
              {/* Duration */}
              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs
                px-1.5 py-0.5 rounded flex items-center gap-1">
                <Clock size={10} /> {clip.duration}
              </div>
              {/* Lang */}
              <div className="absolute top-2 left-2 text-lg">{clip.lang}</div>
              {/* Playing indicator */}
              {playing === clip.id && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="flex gap-1 items-end">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-1 bg-white rounded-full animate-pulse"
                        style={{ height: `${8 + i * 4}px`, animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-3">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-navy leading-tight line-clamp-2 flex-1">
                  {clip.title}
                </h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${scoreColor(clip.score)}`}>
                  {clip.score}
                </span>
              </div>
              <p className="text-xs text-gray-mid mb-3">{clip.project}</p>

              {/* Actions */}
              <div className="flex gap-1.5">
                <button className="flex-1 flex items-center justify-center gap-1 bg-teal text-white
                  text-xs py-1.5 rounded-lg hover:bg-teal-dark transition-colors font-medium">
                  <Download size={12} /> Download
                </button>
                <button className="p-1.5 border border-gray-line rounded-lg text-gray-mid
                  hover:border-teal hover:text-teal transition-all">
                  <Edit2 size={13} />
                </button>
                <button className="p-1.5 border border-gray-line rounded-lg text-gray-mid
                  hover:border-gold hover:text-gold transition-all">
                  <Share2 size={13} />
                </button>
                <button className="p-1.5 border border-gray-line rounded-lg text-gray-mid
                  hover:border-teal hover:text-teal transition-all">
                  <RefreshCw size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-mid">
          <Search size={32} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium">No clips found</p>
          <p className="text-sm">Try a different search or language filter</p>
        </div>
      )}
    </div>
  );
}
