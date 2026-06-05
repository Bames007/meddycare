"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { DESIGN_TOKENS } from "@/app/utils/constants";

const { colors, radii, transitions, typography } = DESIGN_TOKENS;

export default function MeddyCareHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -0]);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen p-2 md:p-4 overflow-hidden"
      style={{ backgroundColor: `${colors.brand.logoPurple}10` }}
    >
      <div className="relative w-full h-full rounded-[3rem] overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/meddycareone.jpg')" }}
        />

        {/* Tint Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(to bottom, ${colors.brand.logoPurple}66, transparent, ${colors.brand.logoPurple}33)`,
          }}
        />
        {/* TEXT LAYER (top‑left) */}
        <div className="relative z-[2] w-full h-full flex flex-col items-start justify-start pt-20 lg:pt-24 px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-left"
          >
            <h1
              className={`text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-[0.9]`}
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              MEDDY
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">
                CARE.
              </span>
            </h1>
            <p
              className={`text-white/70 mt-6 text-sm md:text-base uppercase tracking-[0.2em]`}
              style={{ fontFamily: typography.fontFamilies.body }}
            >
              Premier Vetted Care for Every Family.
            </p>
            <button
              className={`mt-10 px-10 py-4 ${radii.button} font-bold text-xs uppercase tracking-widest flex items-center gap-2 ${transitions.perf} hover:scale-[1.02]`}
              style={{
                backgroundColor: colors.brand.logoPurple,
                color: "white",
                fontFamily: typography.fontFamilies.body,
              }}
            >
              Find Care <ArrowUpRight size={16} />
            </button>
          </motion.div>
        </div>

        {/* FOREGROUND IMAGE */}
        <div
          className="absolute inset-0 z-[3] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/meddycareone-transparent.png')" }}
        />

        {/* BOTTOM‑RIGHT PANEL – flush to bottom edge */}
        <motion.div style={{ y }} className="absolute bottom-0 right-0 z-[4]">
          <div
            className="relative bg-[#FBFBFA] p-6 pt-10 pl-12 pr-8 pb-6 flex flex-col items-end gap-2 shadow-xl"
            style={{ borderRadius: "1.5rem 0 0 0" }} // only top-left rounded
          >
            {/* Corner cut SVGs (creates the “peeled” look) */}
            <div className="absolute -top-14 right-0 w-14 h-14 pointer-events-none">
              <svg viewBox="0 0 56 56" fill="none">
                <path
                  d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z"
                  fill="#FBFBFA"
                />
              </svg>
            </div>
            <div className="absolute bottom-0 -left-14 w-14 h-14 pointer-events-none">
              <svg viewBox="0 0 56 56" fill="none">
                <path
                  d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z"
                  fill="#FBFBFA"
                />
              </svg>
            </div>

            <div className="text-right mr-1">
              <h4
                className="text-xl tracking-wider"
                style={{
                  fontFamily: typography.fontFamilies.heading,
                  color: colors.brand.logoPurple,
                }}
              >
                CLINICAL STANDARDS
              </h4>
              <p
                className="text-[10px] uppercase tracking-widest text-[rgba(30,50,90,0.5)]"
                style={{ fontFamily: typography.fontFamilies.body }}
              >
                Access our rigorous protocols
              </p>
            </div>

            <div className="flex items-center gap-3 py-3 px-6 bg-[rgba(30,50,90,0.05)] rounded-full border border-[rgba(30,50,90,0.1)]">
              <span
                className="font-bold text-[11px] uppercase tracking-widest"
                style={{
                  fontFamily: typography.fontFamilies.body,
                  color: colors.brand.logoPurple,
                }}
              >
                View Protocols
              </span>
              <div
                className="p-2 rounded-full text-white"
                style={{ backgroundColor: colors.brand.logoPurple }}
              >
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
