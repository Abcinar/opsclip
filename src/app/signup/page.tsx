"use client";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, CheckCircle } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-teal rounded-xl flex items-center justify-center">
              <span className="text-white font-black">C</span>
            </div>
            <span className="text-white font-bold text-xl">ClipAI</span>
          </Link>
          <h1 className="text-2xl font-black text-white">Start free today</h1>
          <p className="text-white/60 mt-1 text-sm">No credit card required</p>
        </div>
        <div className="card p-7 space-y-4">
          {/* Perks */}
          <div className="flex flex-wrap gap-3 justify-center mb-2">
            {["3 free clips/month", "Credits never expire", "4 languages"].map(p => (
              <span key={p} className="flex items-center gap-1 text-xs text-teal bg-teal-light
                border border-teal-border px-2.5 py-1 rounded-full font-medium">
                <CheckCircle size={11} /> {p}
              </span>
            ))}
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-text mb-1.5">Full Name</label>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
              <input type="text" placeholder="Your name"
                className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-text mb-1.5">Email</label>
            <div className="relative">
              <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
              <input type="email" placeholder="you@example.com"
                className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-text mb-1.5">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-mid" />
              <input type="password" placeholder="Min 8 characters"
                className="w-full pl-9 pr-4 py-3 border border-gray-line rounded-xl text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal" />
            </div>
          </div>
          <Link href="/dashboard" className="btn-gold w-full flex items-center justify-center gap-2 py-3 font-bold">
            Create Free Account <ArrowRight size={16} />
          </Link>
          <div className="relative my-1">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-line" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-gray-mid">or</span>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-line
            rounded-xl text-sm font-medium text-gray-text hover:bg-gray-light transition-colors">
            <span className="text-lg">G</span> Sign up with Google
          </button>
          <p className="text-center text-xs text-gray-mid">
            Already have an account?{" "}
            <Link href="/login" className="text-teal font-semibold hover:underline">Sign in</Link>
          </p>
          <p className="text-center text-xs text-gray-mid/60">
            By signing up you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
