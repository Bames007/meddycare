"use client";

import { motion } from "framer-motion";
import {
  Heart,
  CalendarCheck,
  Activity,
  ClipboardList,
  ShieldCheck,
  Users,
} from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const FEATURES = [
  {
    title: "Comprehensive Wellness",
    desc: "We nurture the whole person—physical, emotional, and social—so your loved one truly feels like themselves at home.",
    icon: Heart,
  },
  {
    title: "Simple Scheduling",
    desc: "We take the weight off your shoulders, gently managing appointments and daily rhythms so you don't have to worry about a thing.",
    icon: CalendarCheck,
  },
  {
    title: "Connected Living",
    desc: "We provide quiet, consistent updates so your family stays connected to your loved one’s journey, no matter the distance.",
    icon: Activity,
  },
  {
    title: "Care That Listens",
    desc: "Care plans built on conversation. We honor your family’s unique story and preferences in every decision we make.",
    icon: ClipboardList,
  },
  {
    title: "Safe & Secure",
    desc: "Peace of mind is our promise. Our presence ensures a safe environment where your loved one can rest easy, day and night.",
    icon: ShieldCheck,
  },
  {
    title: "Side-by-Side",
    desc: "Preserving the life you have built together. We make it possible for couples to remain in the home they cherish, together.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section
      className="py-32 px-6 relative overflow-hidden"
      style={{ backgroundColor: colors.brand.logoPurple }}
    >
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: colors.brand.logoPink }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-24">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-purple-200 mb-6 block">
            Designed for connection
          </span>
          <h2
            className="text-[clamp(3rem,6vw,5rem)] font-black tracking-tighter leading-[0.95] text-white"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Care that feels <br />
            <span className="italic font-light text-purple-200">
              like family.
            </span>
          </h2>
        </div>

        {/* FLUID GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-12 h-12 mb-8 flex items-center justify-center rounded-2xl bg-white/10 text-white">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-purple-100/70 leading-relaxed font-light text-sm">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
