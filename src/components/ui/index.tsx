'use client';

import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export { Hero9 } from './hero9';
export type { Hero9Props, Hero9NavItem, Hero9Avatar } from './hero9';

export interface Auth11Props {
  onBackToHome?: () => void;
  showBackToHome?: boolean;
}

export default function Auth11({ onBackToHome, showBackToHome = true }: Auth11Props = {}) {
  const [email, setEmail] = useState('adminkarur@123');
  const [password, setPassword] = useState('vsbec@123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [submittedMessage, setSubmittedMessage] = useState('');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const autoFill = (u: string, p: string) => {
    setEmail(u);
    setPassword(p);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedMessage(`Welcome back! Authenticated as ${email}`);
    setTimeout(() => {
      setSubmittedMessage('');
    }, 3000);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#050505] font-sans text-neutral-200 antialiased selection:bg-white/20 selection:text-white lg:flex-row">
      {/* Left Image Panel */}
      <div className="relative hidden w-full flex-col justify-end p-4 lg:flex lg:min-h-screen lg:w-1/2">
        {/* Background Image Wrapper */}
        <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
          <img
            src="https://assets.watermelon.sh/auth-11.avif"
            alt="Serene landscape with a lone tree"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Dark Gradient Overlay for text readability */}
          <div
            className="absolute inset-0 bg-linear-to-t bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"
            style={{
              background:
                'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.2) 40%, transparent 100%)',
            }}
          />

          {/* Bottom Content within the image */}
          <div className="absolute right-0 bottom-0 left-0 z-10 flex w-full flex-col items-center justify-center pb-12 text-center px-6">
            <h1 className="text-3xl font-medium tracking-tight text-balance text-white md:text-4xl lg:text-5xl">
              Move fast. Feel Free
            </h1>
            {/* Pagination Indicators */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="h-1 w-6 rounded-full bg-white"></div>
              <div className="h-1 w-1.5 rounded-full bg-white/40"></div>
              <div className="h-1 w-1.5 rounded-full bg-white/40"></div>
              <div className="h-1 w-1.5 rounded-full bg-white/40"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="relative flex w-full flex-col items-center justify-center p-6 sm:p-12 lg:w-1/2">
        {showBackToHome && (
          <div className="absolute top-6 left-6 z-20">
            <button
              type="button"
              onClick={() => {
                if (onBackToHome) {
                  onBackToHome();
                } else if (typeof window !== 'undefined') {
                  window.location.href = '/';
                }
              }}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors py-2 px-3 rounded-full border border-white/10 bg-[#0c0c0c] hover:bg-[#181818]"
            >
              &larr; Back to SPHEREX
            </button>
          </div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-[420px]"
        >
          {/* Titles */}
          <motion.div variants={itemVariants} className="mb-8 text-center">
            <h2 className="text-3xl leading-tight font-medium tracking-tight text-balance text-white md:text-[40px]">
              Welcome to
              <br />
              <span className="font-semibold text-white">V.S.B. GROUP OF</span>{' '}
              <span className="font-serif font-light italic text-sky-400">INSTITUTIONS.</span>
            </h2>
          </motion.div>

          {/* Success Banner */}
          {submittedMessage && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-3 text-center text-xs text-emerald-300"
            >
              {submittedMessage}
            </motion.div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Email */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-wider text-neutral-300"
              >
                EMAIL
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="adminkarur@123"
                className="w-full rounded-[14px] border border-white/10 bg-[#0A0A0A] px-4 py-3.5 text-sm text-white transition-colors placeholder:text-neutral-500 focus:border-neutral-500 focus:bg-[#111] focus:ring-1 focus:ring-neutral-500 focus:outline-none"
              />
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-wider text-neutral-300"
                >
                  PASSWORD
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Default Credentials:\nAdmin Karur: adminkarur@123 / vsbec@123\nAdmin Covai: admincovai@123 / vsbectc@1213\nFaculty: teacherkarur@123 / vsbteacher@123');
                  }}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-[14px] border border-white/10 bg-[#0A0A0A] px-4 py-3.5 pr-11 text-sm text-white transition-colors placeholder:text-neutral-500 focus:border-neutral-500 focus:bg-[#111] focus:ring-1 focus:ring-neutral-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors p-1"
                >
                  {showPassword ? (
                    <FiEyeOff className="text-base" />
                  ) : (
                    <FiEye className="text-base" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Checkbox Row */}
            <motion.div variants={itemVariants} className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-neutral-300 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-[#0A0A0A] text-sky-500 focus:ring-sky-500"
                />
                <span>Remember me</span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="mt-3">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-bold text-black shadow-[0_4px_25px_rgba(255,255,255,0.18)] transition-all hover:bg-neutral-100 active:scale-[0.97]"
                style={{ color: "#000000" }}
              >
                <span style={{ color: "#000000", fontWeight: 700 }}>Login</span>
                <span aria-hidden="true" style={{ color: "#000000", fontSize: "16px", fontWeight: "bold" }}>&rarr;</span>
              </button>
            </motion.div>
          </form>

          {/* Security Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400"
          >
            <div className="flex items-center gap-1.5 font-medium text-emerald-400">
              <span>🛡️ 256-Bit Encrypted Portal</span>
            </div>
            <span className="font-mono text-emerald-400 font-bold">
              ● Live VSB Gateway
            </span>
          </motion.div>

          {/* Quick One-Click Demo Logins */}
          <motion.div variants={itemVariants} className="mt-4 pt-3 border-t border-white/10">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mb-2 text-center">
              QUICK ONE-CLICK DEMO LOGINS:
            </span>
            <div className="flex flex-wrap gap-2 text-xs justify-center">
              <button
                type="button"
                onClick={() => autoFill("adminkarur@123", "vsbec@123")}
                className="px-3 py-1.5 rounded-full bg-[#141414] hover:bg-[#202020] text-purple-300 font-semibold border border-purple-500/30 transition-all hover:scale-105"
              >
                👑 Admin (Karur)
              </button>
              <button
                type="button"
                onClick={() => autoFill("admincovai@123", "vsbectc@1213")}
                className="px-3 py-1.5 rounded-full bg-[#141414] hover:bg-[#202020] text-sky-300 font-semibold border border-sky-500/30 transition-all hover:scale-105"
              >
                🏛️ Admin (Coimbatore)
              </button>
              <button
                type="button"
                onClick={() => autoFill("teacherkarur@123", "vsbteacher@123")}
                className="px-3 py-1.5 rounded-full bg-[#141414] hover:bg-[#202020] text-emerald-300 font-semibold border border-emerald-500/30 transition-all hover:scale-105"
              >
                🧑‍🏫 Faculty (Karur)
              </button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-6 pt-3 border-t border-white/10 text-[11px] text-neutral-400 text-center"
          >
            Created by{' '}
            <span className="font-bold text-white">
              Department of Artificial Intelligence and Data Science
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export { Auth11 };
