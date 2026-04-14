"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function Install() {
  const [copied, setCopied] = useState(false);
  const cmd = "brew install sumin220/cidra/cidra";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="install" className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-bg-elevated border border-border text-[12px] text-fg-muted mb-4">
          Install
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 gradient-text">
          One command.
        </h2>
        <p className="text-fg-muted text-lg mb-10">
          Requires macOS 14 (Sonoma) or later. Apple Silicon recommended.
        </p>

        <button
          onClick={copy}
          className="group relative w-full max-w-xl mx-auto flex items-center justify-between gap-4 px-5 py-4 rounded-xl bg-bg-elevated border border-border hover:border-white/20 transition text-left"
        >
          <code className="font-mono text-[14px] text-fg">
            <span className="text-fg-dim">$ </span>
            {cmd}
          </code>
          <span className="text-[12px] text-fg-muted group-hover:text-fg transition min-w-[40px] text-right">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>

        <p className="text-[12px] text-fg-dim mt-4">
          Or{" "}
          <a
            href="https://github.com/sumin220/cidra/releases/latest"
            className="underline hover:text-fg-muted"
          >
            download the .dmg
          </a>{" "}
          from GitHub Releases.
        </p>
      </motion.div>
    </section>
  );
}
