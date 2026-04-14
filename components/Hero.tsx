"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-elevated border border-border text-[12px] text-fg-muted mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span>Free & open-source. v0.1.0</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-6 gradient-text"
      >
        Control your displays.
        <br />
        Without tracking.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-fg-muted max-w-2xl mx-auto mb-10"
      >
        A macOS menu bar utility for external monitor brightness, volume,
        presets, HiDPI sharpening, and BlackOut. No analytics. No telemetry. Ever.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
      >
        <a
          href="https://github.com/sumin220/cidra/releases/latest"
          className="px-5 py-3 rounded-lg bg-white text-black font-medium text-[14px] hover:bg-gray-200 transition flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.46v-1.64c-2.67.58-3.23-1.29-3.23-1.29-.44-1.11-1.07-1.4-1.07-1.4-.87-.6.07-.58.07-.58.96.07 1.47 1 1.47 1 .86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.13-.24-4.37-1.07-4.37-4.74 0-1.05.37-1.9.98-2.57-.1-.24-.43-1.22.09-2.54 0 0 .8-.26 2.62.98a9.04 9.04 0 0 1 4.76 0c1.81-1.24 2.61-.98 2.61-.98.52 1.32.19 2.3.09 2.54.61.67.97 1.52.97 2.57 0 3.68-2.24 4.5-4.38 4.74.35.3.65.88.65 1.78v2.64c0 .26.18.55.66.46A9.5 9.5 0 0 0 12 2.5z" />
          </svg>
          Download for macOS
        </a>
        <a
          href="https://github.com/sumin220/cidra"
          className="px-5 py-3 rounded-lg bg-bg-elevated border border-border text-fg hover:bg-[#1a1a1e] transition text-[14px] font-medium"
        >
          View on GitHub →
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="relative mx-auto max-w-[420px]"
      >
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            inset: "-40%",
            background:
              "radial-gradient(55% 50% at 50% 55%, rgba(10,132,255,0.95) 0%, rgba(10,132,255,0.6) 25%, rgba(10,132,255,0.25) 55%, rgba(10,132,255,0) 80%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            inset: "-15%",
            background:
              "radial-gradient(45% 40% at 50% 55%, rgba(10,132,255,0.5) 0%, rgba(10,132,255,0) 70%)",
            filter: "blur(40px)",
          }}
        />
        <Image
          src="/screenshot.png"
          alt="Cidra menu bar panel"
          width={714}
          height={1120}
          priority
          className="relative w-full h-auto"
        />
      </motion.div>
    </section>
  );
}
