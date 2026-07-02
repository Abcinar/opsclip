"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Upload, Link2, Sparkles, Globe, ChevronDown, X, Film } from "lucide-react";

const languages = [
  { code: "ar", label: "Arabic (العربية)", flag: "🇸🇦", sublabel: "All dialects supported" },
  { code: "hi", label: "Hindi / Hinglish",  flag: "🇮🇳", sublabel: "Code-switching supported" },
  { code: "id", label: "Indonesian",         flag: "🇮🇩", sublabel: "Bahasa Indonesia" },
  { code: "tr", label: "Turkish",            flag: "🇹🇷", sublabel: "Türkçe" },
  { code: "en", label: "English",            flag: "🇬🇧", sublabel: "Phase 2" },
];

type Step = "input" | "processing" | "done";

const processingSteps = [
  { label: "Uploading video...",           done: true  },
  { label: "Transcribing audio...",        done: true  },
  { label: "AI analyzing content...",      done: false },
  { label: "Selecting best moments...",    done: false },
  { label: "Rendering subtitles...",       done: false },
];

export default function UploadPage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [tab,      setTab]      = useState<"file" | "url">("url");
  const [url,      setUrl]      = useState("");
  const [file,     setFile]     = useState<File | null>(null);
  const [lang,     setLang]     = useState(languages[0]);
  const [langOpen, setLangOpen] = useState(false);
  const [command,  setCommand]  = useState("");
  const [step,     setStep]     = useState<Step>("input");
  const [progress, setProgress] = useState(0);
  const [current,  setCurrent]  = useState(0);

  const handleGenerate = () => {
    if (!url && !file) return;
    setStep("processing");
    let p = 0; let c = 0;
    const iv = setInterval(() => {
      p += Math.random() * 4 + 1;
      if (p >= 100) { p = 100; clearInterval(iv); setTimeout(() => router.push("/clips"), 800); }
      const nc = Math.min(Math.floor(p / 20), processingSteps.length - 1);
      if (nc !== c) { c = nc; setCurrent(nc); }
      setProgress(Math.round(p));
    }, 180);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) { setFile(f); setTab("file"); }
  };

  if (step === "processing") return (
    <div className="max-w-xl mx-auto mt-16">
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-teal-light rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Film size={28} className="text-teal animate-pulse" />
        </div>
        <h2 className="text-navy font-bold text-xl mb-2">Processing your video...</h2>
        <p className="text-gray-mid text-sm mb-8">Estimated time: ~3 min for this video</p>

        {/* Progress bar */}
        <div className="h-2 bg-gray-line rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-teal rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }} />
        </div>
        <div className="text-teal font-bold text-lg mb-8">{progress}%</div>

        {/* Steps */}
        <div className="space-y-3 text-left">
          {processingSteps.map((s, i) => (
            <div key={i} className={`flex items-center gap-3 text-sm transition-all
              ${i < current ? "text-teal" : i === current ? "text-navy font-semibold" : "text-gray-mid"}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold
                ${i < current ? "bg-teal text-white" : i === current ? "bg-navy text-white animate-pulse" : "bg-gray-line text-gray-mid"}`}>
                {i < current ? "✓" : i + 1}
              </div>
              {s.label}
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-mid mt-6">
          Credits are auto-refunded if processing fails ✓
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-navy">Upload Video</h1>
        <p className="text-gray-mid text-sm mt-1">Paste a link or upload a file — we'll generate clips in seconds.</p>
      </div>

      <div className="card p-6 space-y-5">
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-light p-1 rounded-xl">
          {(["url", "file"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all
                ${tab === t ? "bg-white text-navy shadow-sm" : "text-gray-mid hover:text-navy"}`}>
              {t === "url" ? "🔗  Paste URL" : "📁  Upload File"}
            </button>
          ))}
        </div>

        {/* URL input */}
        {tab === "url" && (
          <div className="relative">
            <Link2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
            <input value={url} onChange={e => setUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" />
            {url && (
              <button onClick={() => setUrl("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-mid hover:text-navy">
                <X size={14} />
              </button>
            )}
          </div>
        )}

        {/* File drop */}
        {tab === "file" && (
          <div onDrop={onDrop} onDragOver={e => e.preventDefault()}
            onClick={() => fileRef.current?.click()}
            className="border-2 border-dashed border-gray-line rounded-xl p-8 text-center cursor-pointer
              hover:border-teal hover:bg-teal-light/30 transition-all group">
            <input ref={fileRef} type="file" accept="video/*" className="hidden"
              onChange={e => setFile(e.target.files?.[0] ?? null)} />
            {file ? (
              <div className="flex items-center justify-center gap-2 text-teal">
                <Film size={20} />
                <span className="font-medium text-sm truncate max-w-xs">{file.name}</span>
                <button onClick={e => { e.stopPropagation(); setFile(null); }}
                  className="text-gray-mid hover:text-red-400 ml-2"><X size={14} /></button>
              </div>
            ) : (
              <>
                <Upload size={28} className="text-gray-mid group-hover:text-teal mx-auto mb-3 transition-colors" />
                <p className="text-sm text-gray-mid">Drag & drop or <span className="text-teal font-semibold">browse</span></p>
                <p className="text-xs text-gray-mid/60 mt-1">MP4, MOV, AVI, MKV · Max 4GB</p>
              </>
            )}
          </div>
        )}

        {/* Language picker */}
        <div>
          <label className="block text-xs font-semibold text-gray-text mb-2 flex items-center gap-1.5">
            <Globe size={13} /> Video Language
          </label>
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)}
              className="w-full flex items-center justify-between px-4 py-3 border border-gray-line
                rounded-xl text-sm hover:border-teal transition-all bg-white">
              <span className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium text-navy">{lang.label}</span>
                <span className="text-gray-mid text-xs">{lang.sublabel}</span>
              </span>
              <ChevronDown size={16} className={`text-gray-mid transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-line
                rounded-xl shadow-lg z-20 overflow-hidden">
                {languages.map(l => (
                  <button key={l.code} onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-teal-light transition-colors
                      ${l.code === lang.code ? "bg-teal-light text-teal" : ""}`}>
                    <span className="text-lg">{l.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-navy">{l.label}</div>
                      <div className="text-xs text-gray-mid">{l.sublabel}</div>
                    </div>
                    {l.code === lang.code && <span className="ml-auto text-teal font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Command box */}
        <div>
          <label className="block text-xs font-semibold text-gray-text mb-2 flex items-center gap-1.5">
            <Sparkles size={13} className="text-gold" />
            What clips do you want?
            <span className="font-normal text-gray-mid">(optional)</span>
          </label>
          <textarea value={command} onChange={e => setCommand(e.target.value)} rows={2}
            placeholder={`e.g. "Find moments where the price is mentioned" or "Extract the funniest parts"`}
            className="w-full px-4 py-3 border border-gray-line rounded-xl text-sm resize-none
              focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all" />
          <p className="text-xs text-gray-mid mt-1.5">
            Leave empty for automatic AI detection · 1 credit per video
          </p>
        </div>

        {/* Generate button */}
        <button onClick={handleGenerate}
          disabled={!url && !file}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
            ${url || file
              ? "bg-navy text-white hover:bg-navy-light shadow-lg hover:-translate-y-0.5"
              : "bg-gray-line text-gray-mid cursor-not-allowed"}`}>
          <Sparkles size={17} />
          Generate Clips
        </button>
      </div>

      {/* Tips */}
      <div className="bg-teal-light border border-teal-border rounded-xl px-4 py-3 text-sm text-teal">
        <strong>💡 Tip:</strong> Use the command box to find specific moments —
        e.g. <em>"Extract moments where the speaker mentions competitors"</em>
      </div>
    </div>
  );
}
