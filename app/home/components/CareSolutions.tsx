"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const SOLUTIONS = [
  {
    title: "Hospital Discharge",
    challenge: "Recovering alone at home can be risky and lead to readmission.",
    solution:
      "We arrange immediate live-in support to ensure a safe recovery, managing medications and mobility so you can heal comfortably at home.",
    image:
      "https://images.unsplash.com/photo-1640074413489-0b6c43934c99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dementia Care",
    challenge: "Confusion increases in new environments like care homes.",
    solution:
      "Staying in familiar surroundings with a specialist carer reduces anxiety and helps maintain cherished memories and routines.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Loneliness & Isolation",
    challenge: "Isolation is a major health risk for seniors living alone.",
    solution:
      "A live-in carer provides companionship for tea, walks, and conversation, brightening every day with genuine connection.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CareSolutions() {
  const [selected, setSelected] = useState<number | null>(null);
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="mb-20">
          <span
            className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            Care Pathways
          </span>
          <h2
            className="text-4xl sm:text-5xl xl:text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Care Solutions Tailored <br />
            <span className="italic font-light text-gray-400">
              to every situation.
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOLUTIONS.map((item, idx) => (
            <motion.div
              key={idx}
              layoutId={`card-${idx}`}
              onClick={() => setSelected(idx)}
              className="group cursor-pointer bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3
                  className="text-xl font-black mb-4 uppercase tracking-tight"
                  style={{
                    color: colors.brand.logoPurple,
                    fontFamily: typography.fontFamilies.heading,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 text-sm font-medium line-clamp-2"
                  style={{ fontFamily: typography.fontFamilies.body }}
                >
                  {item.challenge}
                </p>
                <div
                  className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: colors.brand.logoPurple }}
                >
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              layoutId={`card-${selected}`}
              className="fixed inset-0 m-auto z-50 w-[90%] max-w-4xl h-[600px] bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={20} className="text-gray-900" />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-full">
                <img
                  src={SOLUTIONS[selected].image}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h3
                  className="text-4xl font-black uppercase mb-8 tracking-tighter"
                  style={{
                    color: colors.brand.logoPurple,
                    fontFamily: typography.fontFamilies.heading,
                  }}
                >
                  {SOLUTIONS[selected].title}
                </h3>
                <div className="mb-8">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    The Challenge
                  </h4>
                  <p
                    className="text-gray-900 font-medium text-lg leading-relaxed"
                    style={{ fontFamily: typography.fontFamilies.body }}
                  >
                    {SOLUTIONS[selected].challenge}
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Our Solution
                  </h4>
                  <p
                    className="text-gray-600 leading-relaxed mb-10"
                    style={{ fontFamily: typography.fontFamilies.body }}
                  >
                    {SOLUTIONS[selected].solution}
                  </p>
                </div>
                <button
                  className="px-8 py-4 text-white font-bold text-xs uppercase tracking-widest self-start transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: colors.brand.logoPurple,
                    fontFamily: typography.fontFamilies.body,
                  }}
                >
                  Start Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
