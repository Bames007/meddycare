"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserCheck, Search, HeartHandshake } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const STEPS = [
  {
    id: "01",
    title: "Request Care Easily",
    desc: "Fill in our simple questionnaire or speak directly with a care advisor. Tell us about your loved one's needs and preferences.",
    icon: UserCheck,
  },
  {
    id: "02",
    title: "Get Matched Quickly",
    desc: "Our AI-powered matching system finds the perfect carer based on skills, personality, and care requirements. Review profiles and meet them before care begins.",
    icon: Search,
  },
  {
    id: "03",
    title: "Start Care Smoothly",
    desc: "Your matched carer moves in and begins providing compassionate support. We stay involved with regular check-ins and 24/7 support.",
    icon: HeartHandshake,
  },
];

export default function GettingStarted() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="w-full max-w-[1400px] mx-auto px-6 mb-20 border-b border-gray-100 pb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            Getting Started
          </motion.span>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-1 lg:col-span-8 text-4xl sm:text-5xl xl:text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              A Gentle Path <br />
              <span className="italic font-light text-gray-400">
                To Quality Care.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="col-span-1 lg:col-span-4 text-gray-500 text-sm xl:text-base leading-relaxed font-medium lg:pb-1"
              style={{ fontFamily: typography.fontFamilies.body }}
            >
              We’ve replaced complex paperwork with a human-first approach.
              Follow these three simple steps to connect with a carer who truly
              understands your family’s needs.
            </motion.p>
          </div>
        </div>

        {/* REFINED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-200">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                whileHover={{ backgroundColor: "#FAFAFA" }}
                className="p-10 lg:p-12 border-b border-r border-gray-200 group flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <span className="font-mono text-xl font-black text-gray-900">
                      {step.id}
                    </span>
                    <Icon
                      className="transition-colors duration-500"
                      style={{ color: colors.brand.logoPink }}
                      size={24}
                      strokeWidth={2}
                    />
                  </div>
                  <h3
                    className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase"
                    style={{ fontFamily: typography.fontFamilies.heading }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm lg:text-base">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-3 text-gray-900 font-bold text-[10px] uppercase tracking-[0.2em]">
                  Learn More
                  <div
                    className="h-[2px] w-8 transition-all group-hover:w-16"
                    style={{ backgroundColor: colors.brand.logoPurple }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <button
            className="px-12 h-14 text-white font-bold text-xs uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-3 active:scale-[0.98]"
            style={{
              backgroundColor: colors.brand.logoPurple,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            Get Started Today
            <ArrowRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
