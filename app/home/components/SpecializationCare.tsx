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
  const { colors, typography, transitions } = DESIGN_TOKENS;

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span
            className="text-[11px] font-bold tracking-[0.3em] uppercase block mb-4"
            style={{
              color: colors.brand.logoPurple,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            Expert Care Pathways
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
            style={{
              color: colors.structure.primary,
              fontFamily: typography.fontFamilies.heading,
            }}
          >
            Specialist support for{" "}
            <span
              className="font-medium"
              style={{ color: colors.brand.logoPurple }}
            >
              every condition.
            </span>
          </h2>
          <div
            className="w-16 h-px mt-6"
            style={{ backgroundColor: colors.brand.logoPurple }}
          />
        </div>

        {/* Staggered Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-5 md:gap-6">
          {SPECIALTIES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                item.size === "large"
                  ? "md:col-span-2 bg-[#F3EEF8] border-[#E0D7EB] hover:border-[#552976]/30"
                  : "bg-white border-[#E5E3E0] hover:border-[#552976]/30"
              }`}
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.02)" }}
            >
              {/* Icon – consistent dark purple */}
              <div
                className="transition-all duration-300 group-hover:scale-105"
                style={{ color: colors.brand.logoPurple }}
              >
                <item.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Title – always dark, readable */}
              <h3
                className="text-sm font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-[#552976]"
                style={{
                  color: colors.structure.primary, // #140E1B
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                {item.title}
              </h3>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: colors.brand.logoPurple }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            className={`px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${transitions.perf}`}
            style={{
              backgroundColor: colors.brand.logoPurple,
              color: "white",
              fontFamily: typography.fontFamilies.body,
            }}
          >
            Find Specialist Care
          </button>
        </div>
      </div>
    </section>
  );
}
