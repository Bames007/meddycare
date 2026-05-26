"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShieldCheck,
  Clock,
  Smile,
  PawPrint,
  BadgeCheck,
  Star,
} from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const PROMISES = [
  {
    title: "Stay at Home",
    desc: "Preserve the life you’ve built in your own familiar surroundings.",
    icon: Heart,
  },
  {
    title: "Fully Regulated",
    desc: "Stringently vetted care for total peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Support",
    desc: "Always available, always watching, always there.",
    icon: Clock,
  },
  {
    title: "Consistent Faces",
    desc: "Building deep, lasting bonds with the same familiar carer.",
    icon: Smile,
  },
  {
    title: "Keep Your Life",
    desc: "Pets, gardens, and routines—all exactly as they should be.",
    icon: PawPrint,
  },
  {
    title: "Cost-Effective",
    desc: "Premium care without the overhead of institutional facilities.",
    icon: BadgeCheck,
  },
];

export default function CommitmentAndImpact() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* COMMITMENT GRID */}
        <div className="mb-32">
          <span
            className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-6 block"
            style={{ color: colors.brand.logoPurple }}
          >
            Our Commitment
          </span>
          <h2
            className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.95] text-gray-900 mb-20"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Care that feels <br />
            <span className="italic font-light text-gray-400">
              like family.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROMISES.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all"
              >
                <div
                  className="p-3 w-fit rounded-2xl bg-white mb-6 shadow-sm"
                  style={{ color: colors.brand.logoPurple }}
                >
                  <item.icon size={24} />
                </div>
                <h3
                  className="text-sm font-black uppercase tracking-tight mb-3"
                  style={{ color: colors.brand.logoPurple }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMPACT / TESTIMONIAL BLOCK (PINK GRADIENT) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl"
          style={{ backgroundColor: colors.brand.logoPink }}
        >
          {/* Subtle overlay texture/glow */}
          <div className="absolute inset-0 bg-black/5" />

          <div className="relative z-10 max-w-4xl">
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-white text-white" />
              ))}
            </div>

            <h3
              className="text-white text-[clamp(2rem,4vw,3.5rem)] font-black mb-12 leading-[1.1]"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              "MeddyCare gave us our mum back. She's happy, safe, and exactly
              where she wants to be."
            </h3>

            <div className="flex items-center gap-6 pt-8 border-t border-white/20">
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm uppercase">
                M
              </div>
              <div>
                <p className="text-white font-black uppercase tracking-widest text-sm">
                  Margaret's Family, Surrey
                </p>
                <p className="text-white/70 text-xs mt-1 font-medium">
                  Verified Success Story • 2026
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
