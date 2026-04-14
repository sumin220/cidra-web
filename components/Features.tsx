"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Brightness & Volume",
    desc: "DDC/CI for supported monitors. Gamma fallback for the rest. DisplayServices for built-in.",
    icon: "sun",
  },
  {
    title: "One-tap Presets",
    desc: "Save brightness and volume combos across all monitors. Apply with a single click.",
    icon: "preset",
  },
  {
    title: "Auto Triggers",
    desc: "Switch presets automatically by time of day or when an app launches.",
    icon: "clock",
  },
  {
    title: "BlackOut",
    desc: "⌘⇧B instantly turns off every display and mutes audio. Perfect for presentations.",
    icon: "power",
  },
  {
    title: "HiDPI Sharpening",
    desc: "Adds HiDPI modes to your external monitor for sharper text rendering.",
    icon: "text",
  },
  {
    title: "Ambient Light Sync",
    desc: "Mirror your MacBook's ambient brightness to external monitors in real time.",
    icon: "sensor",
  },
  {
    title: "Software Dimming",
    desc: "Drag the slider below zero to dim past the hardware minimum. Great for night use.",
    icon: "moon",
  },
  {
    title: "XDR Brightness",
    desc: "Push built-in displays beyond the SDR 500-nit cap on Apple Silicon.",
    icon: "xdr",
  },
  {
    title: "Zero Tracking",
    desc: "No analytics. No telemetry. No network calls. Your data stays on your Mac.",
    icon: "shield",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <div className="inline-block px-3 py-1 rounded-full bg-bg-elevated border border-border text-[12px] text-fg-muted mb-4">
          Features
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 gradient-text leading-[1.15] pb-1">
          Everything macOS should do.
          <br />
          Nothing it shouldn&apos;t.
        </h2>
        <p className="text-fg-muted text-lg max-w-xl mx-auto">
          Built for the menu bar. Designed to get out of your way.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            className="group relative p-6 rounded-xl bg-bg-elevated border border-border hover:border-white/20 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Icon name={f.icon} />
            </div>
            <h3 className="font-semibold text-[15px] mb-1.5">{f.title}</h3>
            <p className="text-[13px] text-fg-muted leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Icon({ name }: { name: string }) {
  const cls = "w-4 h-4 text-white";
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, fill: "none" } as const;
  switch (name) {
    case "sun":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case "preset":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "power":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <path d="M12 2v10" />
          <path d="M6 8a8 8 0 1 0 12 0" />
        </svg>
      );
    case "text":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <path d="M4 7V5h16v2M9 19h6M12 5v14" />
        </svg>
      );
    case "sensor":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <circle cx="12" cy="12" r="3" />
          <path d="M4 20s2-5 8-5 8 5 8 5" />
          <path d="M12 4v2M5.6 6.6l1.4 1.4M18.4 6.6l-1.4 1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      );
    case "xdr":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
          <path d="M9 10l1.5 2L12 9l1.5 3L15 10" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={cls} {...stroke}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
