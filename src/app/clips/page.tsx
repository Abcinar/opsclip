"use client";
import { useEffect, useState } from "react";
import { Download, Share2, RefreshCw, Filter, Search, Play, Clock, Loader2 } from "lucide-react";
import { getClips, getDownloadUrl } from "@/lib/api";

interface ClipData {
  id: string;
  video_id: string;
  title: string;
  duration: number;
  viral_score: number;
  language: string;
  output_url: string;
  created_at: string;
}

const langs = ["All", "ar", "hi", "tr", "id", "en"];
const langFlag: Record<string, string> = { ar: "🇸🇦", hi: "🇮🇳", tr: "🇹🇷", id: "🇮🇩", en: "🇬🇧" };

export default function ClipsPage() {
  const [clips, setClips] = useState<ClipData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [langF, setLangF] = useState("All");
  const [sort, setSort] = useState<"score" | "date">("score");
  const [playing, setPlaying] = useState<string | null>(null);

  useEffect(() => {
    getClips()
      .then(data => setClips(data.clips))
      .catch(err => setError(err.message || "Klipler yüklenemedi"))
      .finally(() => setLoading(false));
  }, []);

  async function handleDownload(clipId: string) {
    try {
      const data = await getDownloadUrl(clipId);
      window.open(data.download_url, "_blank");
    } catch (err) {
      alert("İndirme başarısız, tekrar deneyin.");
    }
  }

  const filtered = clips
    .filter(c => c.title.toLowerCase().includes(search.toLowerCase()))
    .filter(c => langF === "All" || c.language === langF)
    .sort((a, b) => sort === "score" ? b.viral_score - a.viral_score : b.created_at.localeCompare(a.created_at));

  const scoreColor = (s: number) =>
    s >= 90 ? "text-teal bg-teal-light border-teal-border" :
    s >= 75 ? "text-gold bg-gold/10 border-gold/20" :
              "text-gray-mid bg-gray-light border-gray-line";

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32 text-gray-mid">
        <Loader2 className="animate-spin mr-2" size={20} /> Loading clips...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-600">
        <p className="font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-navy">My Clips</h1>
          <p className="text-gray-mid text-sm mt-0.5">{filtered.length} clips · ready to download</p>
        </div>
      </div>

      <div className="card p-4 flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-52">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search clips..."
            className="w-full pl-8 pr-3 py-2 border border-gray-line rounded-xl text-sm
              focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {langs.map(l => (
            <button key={l} onClick={() => setLangF(l)}
              className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all
                ${langF === l ? "bg-navy text-white border-navy" : "border-gray-line text-gray-mid hover:border-navy/30"}`}>
              {l === "All" ? "All" : `${langFlag[l] || ""} ${l}`}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <Filter size={14} className="text-gray-mid" />
          <select value={sort} onChange={e => setSort(e.target.value as "score" | "date")}
            className="text-sm border border-gray-line rounded-xl px-3 py-1.5 focus:outline-none focus:border-teal">
            <option value="score">Sort: Viral Score</option>
            <option value="date">Sort: Date</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map(clip => (
          <div key={clip.id} className="card overflow-hidden group">
            <div className="relative h-36 bg-navy flex items-center justify-center">
              {playing === clip.id ? (
                <video src={clip.output_url} controls autoPlay className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center cursor-pointer"
                  onClick={() => setPlaying(clip.id)}>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full
                    flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play size={20} className="text-white fill-white ml-0.5" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs
                    px-1.5 py-0.5 rounded flex items-center gap-1">
                    <Clock size={10} /> {clip.duration}s
                  </div>
                  <div className="absolute top-2 left-2 text-lg">{langFlag[clip.language] || ""}</div>
                </div>
              )}
            </div>
            <div className="p-3">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm font-semibold text-navy leading-tight line-clamp-2 flex-1">
                  {clip.title}
                </h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${scoreColor(clip.viral_score)}`}>
                  {clip.viral_score}
                </span>
              </div>
              <div className="flex gap-1.5 mt-3">
                <button onClick={() => handleDownload(clip.id)}
                  className="flex-1 flex items-center justify-center gap-1 bg-teal text-white
                  text-xs py-1.5 rounded-lg hover:bg-teal-dark transition-colors font-medium">
                  <Download size={12} /> Download
                </button>
                <button className="p-1.5 border border-gray-line rounded-lg text-gray-mid
                  hover:border-gold hover:text-gold transition-all">
                  <Share2 size={13} />
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
        </div>
      )}
    </div>
  );
}
