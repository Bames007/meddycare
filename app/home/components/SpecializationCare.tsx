"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Hand,
  Zap,
  Shield,
  Clock,
  Ribbon,
  Accessibility,
} from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const SPECIALTIES = [
  { title: "Dementia Care", icon: Brain, size: "large" },
  { title: "Alzheimer's", icon: Heart, size: "small" },
  { title: "Parkinson's", icon: Hand, size: "small" },
  { title: "Stroke Recovery", icon: Zap, size: "large" },
  { title: "Palliative Care", icon: Shield, size: "small" },
  { title: "Respite Care", icon: Clock, size: "small" },
  { title: "Cancer Care", icon: Ribbon, size: "large" },
  { title: "Mobility Support", icon: Accessibility, size: "small" },
];

export default function SpecialistCare() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20">
          <span
            className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            Expert Care Pathways
          </span>
          <h2
            className="text-[clamp(2.5rem,4vw,4rem)] font-black uppercase tracking-tighter leading-[0.95] text-gray-900"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Specialist support for <br />
            <span className="italic font-light text-gray-400">
              every condition.
            </span>
          </h2>
        </div>

        {/* STAGGERED BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-6">
          {SPECIALTIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`group relative p-8 rounded-[2rem] border-2 border-gray-900 bg-gray-900 transition-all duration-500 flex flex-col justify-between overflow-hidden ${item.size === "large" ? "md:col-span-2" : "md:col-span-1"}`}
              whileHover={{
                backgroundColor: colors.brand.logoPurple,
                borderColor: colors.brand.logoPurple,
              }}
            >
              <div className="text-white transition-transform duration-500 group-hover:scale-110">
                <item.icon size={36} strokeWidth={1.5} />
              </div>
              <h3
                className="text-sm font-black uppercase tracking-tight text-white transition-colors duration-500"
                style={{ fontFamily: typography.fontFamilies.body }}
              >
                {item.title}
              </h3>
              {/* Subtle hover accent line */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-pink-500 w-0 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            className="px-12 py-5 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-pink-600"
            style={{ backgroundColor: colors.brand.logoPurple }}
          >
            Find Specialist Care
          </button>
        </div>
      </div>
    </section>
  );
}
