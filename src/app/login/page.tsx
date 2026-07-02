"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass,  setPass]  = useState("");
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
              <span className="text-white font-black">C</span>
            </div>
            <span className="text-white font-bold text-xl">ClipAI</span>
          </Link>
          <h1 className="text-2xl font-black text-white">Welcome back</h1>
          <p className="text-white/60 mt-1 text-sm">Sign in to your account</p>
        </div>
        <div className="card p-7 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-text mb-1.5">Email</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-text mb-1.5">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
              <input type="password" value={pass} onChange={e => setPass(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal" />
            </div>
          </div>
          <Link href="/dashboard" className="btn-primary w-full flex items-center justify-center gap-2 py-3">
            Sign In <ArrowRight size={16} />
          </Link>
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-line" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-mid">or continue with</span>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-line
            rounded-xl text-sm font-medium text-gray-text hover:bg-gray-light transition-colors">
            <span className="text-lg">G</span> Continue with Google
          </button>
          <p className="text-center text-sm text-gray-mid">
            No account?{" "}
            <Link href="/signup" className="text-teal font-semibold hover:underline">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
