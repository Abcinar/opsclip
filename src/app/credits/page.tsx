"use client";
import { CreditCard, Zap, Shield, Clock } from "lucide-react";

const packages = [
  { credits: 10,  price: "$5",  label: "Starter Pack",  per: "$0.50/video" },
  { credits: 30,  price: "$12", label: "Creator Pack",  per: "$0.40/video", popular: true },
  { credits: 100, price: "$35", label: "Pro Pack",      per: "$0.35/video" },
  { credits: 300, price: "$90", label: "Agency Pack",   per: "$0.30/video" },
];

const history = [
  { date: "Jun 28, 2026", desc: "Podcast #47 — Arabic Interview",  credits: -1, balance: 47 },
  { date: "Jun 25, 2026", desc: "Hindi Product Review",             credits: -1, balance: 48 },
  { date: "Jun 20, 2026", desc: "Creator Pack purchased",           credits: +30, balance: 49 },
  { date: "Jun 18, 2026", desc: "Turkish Webinar (failed — refund)",credits: 0,  balance: 19 },
];

export default function CreditsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-black text-navy">Credits</h1>
        <p className="text-gray-mid text-sm mt-1">Your credits never expire — ever.</p>
      </div>

      {/* Balance card */}
      <div className="bg-navy rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-sm mb-1">Current Balance</p>
          <div className="text-5xl font-black text-gold">47</div>
          <div className="flex items-center gap-1.5 mt-2 text-white/50 text-xs">
            <Shield size={12} className="text-teal" />
            Credits never expire, even if you cancel
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <div className="text-center">
              <div className="text-white font-bold text-xl">34</div>
              <div className="text-xs">used</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl">0</div>
              <div className="text-xs">refunded</div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy credits */}
      <div className="card p-5">
        <h2 className="font-bold text-navy mb-1">Buy Credits</h2>
        <p className="text-xs text-gray-mid mb-4">1 credit = 1 video (any length up to 4GB)</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {packages.map(p => (
            <button key={p.credits}
              className={`relative flex flex-col items-center p-4 rounded-xl border-2 transition-all
                hover:border-teal hover:shadow-md group
                ${p.popular ? "border-teal" : "border-gray-line"}`}>
              {p.popular && (
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal text-white
                  text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  Best value
                </span>
              )}
              <div className="text-2xl font-black text-navy">{p.credits}</div>
              <div className="text-xs text-gray-mid">credits</div>
              <div className="text-lg font-black text-teal my-1">{p.price}</div>
              <div className="text-xs text-gray-mid">{p.per}</div>
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-mid">
          <CreditCard size={13} />
          Secure payment · Regional pricing available · Instant delivery
        </div>
      </div>

      {/* Perks */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Zap,    title: "Instant",    desc: "Credits added immediately after payment" },
          { icon: Shield, title: "Safe",       desc: "Auto-refunded if processing fails" },
          { icon: Clock,  title: "No Expiry",  desc: "Use them whenever, no rush" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="card p-4 text-center">
            <Icon size={20} className="text-teal mx-auto mb-2" />
            <div className="font-semibold text-navy text-sm">{title}</div>
            <div className="text-xs text-gray-mid mt-0.5">{desc}</div>
          </div>
        ))}
      </div>

      {/* History */}
      <div className="card">
        <div className="p-4 border-b border-gray-line">
          <h2 className="font-bold text-navy text-sm">Transaction History</h2>
        </div>
        <div className="divide-y divide-gray-line">
          {history.map((h, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3">
              <div>
                <div className="text-sm text-navy font-medium">{h.desc}</div>
                <div className="text-xs text-gray-mid">{h.date}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold text-sm
                  ${h.credits > 0 ? "text-teal" : h.credits < 0 ? "text-gray-text" : "text-gold"}`}>
                  {h.credits > 0 ? `+${h.credits}` : h.credits < 0 ? `${h.credits}` : "±0 refund"}
                </div>
                <div className="text-xs text-gray-mid">bal: {h.balance}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
