"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  Users,
  Activity,
  MessageSquare,
  ClipboardCheck,
} from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const TECH_FEATURES = [
  {
    title: "Real-time visibility",
    icon: Activity,
    desc: "See daily notes, medication logs, and photos instantly.",
  },
  {
    title: "Secure data & privacy",
    icon: ShieldCheck,
    desc: "Bank-level encryption for your family's sensitive information.",
  },
  {
    title: "Direct messaging",
    icon: MessageSquare,
    desc: "Connect with the care team instantly, wherever you are.",
  },
  {
    title: "Dynamic care plans",
    icon: ClipboardCheck,
    desc: "Care that adapts immediately to changing health needs.",
  },
];

export default function OurTechnology() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <span
            className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            The Digital Ecosystem
          </span>
          <h2
            className="text-[clamp(3rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.95] text-gray-900 mb-6"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            How technology <br /> connects{" "}
            <span className="italic font-light text-gray-400">everything.</span>
          </h2>
        </div>

        {/* CENTRALIZED GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* NODE 1: CARER (Purple Focus) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-100 flex flex-col items-center text-center transition-colors duration-500 hover:border-purple-200"
          >
            <div
              className="p-6 rounded-3xl bg-purple-50 mb-6 transition-colors duration-500 group-hover:bg-purple-100"
              style={{ color: colors.brand.logoPurple }}
            >
              <Smartphone size={32} />
            </div>
            <h3
              className="text-xl font-black uppercase tracking-tight mb-4"
              style={{
                color: colors.brand.logoPurple,
                fontFamily: typography.fontFamilies.heading,
              }}
            >
              The Carer App
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Powered by real-time digital logging for every task, mobility
              need, and medication.
            </p>
            <div className="w-full h-[1px] bg-purple-100 my-4" />
            <ul className="text-left w-full space-y-4 text-sm font-bold text-gray-800">
              <li className="flex items-center gap-3">
                ✔ 24/7 Support tracking
              </li>
              <li className="flex items-center gap-3">
                ✔ Real-time task logging
              </li>
            </ul>
          </motion.div>

          {/* NODE 2: FAMILY PORTAL (Pink Focus) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] text-white flex flex-col justify-center items-center text-center shadow-xl shadow-pink-100 relative overflow-hidden transition-all duration-500"
            style={{ backgroundColor: colors.brand.logoPink }}
          >
            <h3
              className="text-3xl font-black uppercase tracking-tight mb-6"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Family Portal
            </h3>
            <p className="text-white/90 text-sm leading-relaxed mb-8">
              Peace of mind, no matter where you are. Stay connected to your
              loved one’s journey.
            </p>
            <button className="bg-white px-8 py-4 text-gray-900 font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-lg hover:scale-105 transition-transform">
              Access Portal
            </button>
          </motion.div>

          {/* NODE 3: COORDINATOR (Purple Focus) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl shadow-gray-100 flex flex-col items-center text-center transition-colors duration-500 hover:border-purple-200"
          >
            <div
              className="p-6 rounded-3xl bg-purple-50 mb-6"
              style={{ color: colors.brand.logoPurple }}
            >
              <Users size={32} />
            </div>
            <h3
              className="text-xl font-black uppercase tracking-tight mb-4"
              style={{
                color: colors.brand.logoPurple,
                fontFamily: typography.fontFamilies.heading,
              }}
            >
              Coordinator Access
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Continuous quality monitoring to ensure professional standards are
              met every single day.
            </p>
            <div className="w-full h-[1px] bg-purple-100 my-4" />
            <ul className="text-left w-full space-y-4 text-sm font-bold text-gray-800">
              <li className="flex items-center gap-3">
                ✔ Quality score monitoring
              </li>
              <li className="flex items-center gap-3">✔ Clinical oversight</li>
            </ul>
          </motion.div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {TECH_FEATURES.map((feat, idx) => (
            <motion.div
              key={idx}
              className="p-8 bg-gray-50 rounded-[2rem] border border-transparent hover:border-purple-100 transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="mb-6" style={{ color: colors.brand.logoPurple }}>
                <feat.icon size={28} />
              </div>
              <h4 className="text-xs font-black uppercase tracking-tight mb-2 text-gray-900">
                {feat.title}
              </h4>
              <p className="text-xs text-gray-500 font-medium">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
