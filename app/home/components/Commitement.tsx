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
    <section className="py-32 bg-white px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* REFINED HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span
              className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-6 block"
              style={{ color: colors.brand.logoPurple }}
            >
              Our Core Commitment
            </span>
            <h2
              className="text-[clamp(3rem,6vw,5.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-gray-900"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Care that feels <br />{" "}
              <span className="italic font-light text-gray-400">
                like family.
              </span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            We don't just provide care; we provide a sanctuary. Designed for
            those who value independence, comfort, and human connection.
          </p>
        </div>

        {/* BENTO-INSPIRED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-32">
          {PROMISES.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group p-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:border-gray-200 transition-all duration-500"
            >
              <div
                className="mb-8 p-4 w-fit rounded-2xl bg-white shadow-sm border border-gray-100 transition-transform group-hover:scale-110"
                style={{ color: colors.brand.logoPurple }}
              >
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* REFINED TESTIMONIAL BLOCK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative rounded-[3rem] p-16 md:p-24 bg-gray-900 overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              background: `linear-gradient(to left, ${colors.brand.logoPink}, transparent)`,
            }}
          />

          <div className="relative z-10 max-w-3xl">
            <div className="flex gap-1 mb-10">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-[#FFB800] text-[#FFB800]"
                />
              ))}
            </div>
            <blockquote className="text-4xl md:text-5xl font-light text-white leading-[1.2] mb-12">
              "MeddyCare gave us our mum back. She's happy, safe, and exactly
              where she wants to be—in her own home."
            </blockquote>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div>
                <p className="text-white font-bold uppercase tracking-widest">
                  Margaret's Family
                </p>
                <p className="text-white/50 text-sm italic">
                  Surrey, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
