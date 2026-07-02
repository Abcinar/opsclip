"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Upload, Film, CreditCard, Settings, HelpCircle, LogOut, ChevronRight } from "lucide-react";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/upload",    icon: Upload,          label: "Upload Video" },
  { href: "/clips",     icon: Film,            label: "My Clips" },
  { href: "/credits",   icon: CreditCard,      label: "Credits" },
  { href: "/settings",  icon: Settings,        label: "Settings" },
  { href: "/help",      icon: HelpCircle,      label: "Help" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  return (
    <div className="flex h-screen bg-gray-light overflow-hidden">
      <aside className="w-60 bg-navy flex flex-col flex-shrink-0">
        <div className="px-5 py-4 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <span className="text-white font-bold text-lg">ClipAI</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = path === href;
            return (
              <Link key={href} href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all
                  ${active ? "bg-teal text-white shadow-lg" : "text-white/60 hover:text-white hover:bg-white/10"}`}>
                <Icon size={17} />
                {label}
                {active && <ChevronRight size={14} className="ml-auto" />}
              </Link>
            );
          })}
        </nav>
        <div className="mx-3 mb-3 p-3 bg-white/5 rounded-xl border border-white/10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/60 text-xs">Credits Remaining</span>
            <span className="text-gold font-bold text-sm">47</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full">
            <div className="h-full w-[47%] bg-gold rounded-full" />
          </div>
          <p className="text-white/30 text-xs mt-1.5">Never expire ✓</p>
        </div>
        <div className="px-3 pb-4 border-t border-white/10 pt-3">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 bg-teal-light rounded-full flex items-center justify-center">
              <span className="text-teal font-bold text-sm">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-semibold truncate">Demo User</div>
              <div className="text-white/40 text-xs">Starter Plan</div>
            </div>
            <button className="text-white/30 hover:text-white/70 transition-colors">
              <LogOut size={15} />
            </button>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="bg-white border-b border-gray-line px-6 py-3 flex items-center justify-between sticky top-0 z-10">
          <span className="text-navy font-medium text-sm">
            {navItems.find(n => n.href === path)?.label ?? "Dashboard"}
          </span>
          <Link href="/upload" className="btn-primary text-sm px-4 py-2 flex items-center gap-1.5">
            <Upload size={14} /> New Video
          </Link>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
