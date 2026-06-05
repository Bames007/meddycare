"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Heart,
  CalendarCheck,
  Activity,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";
import { useRef } from "react";

const { typography, colors } = DESIGN_TOKENS;

const FEATURES = [
  {
    title: "Comprehensive Wellness",
    desc: "We nurture the whole person—physical, emotional, and social.",
    icon: Heart,
  },
  {
    title: "Simple Scheduling",
    desc: "Gently managing appointments and daily rhythms for peace of mind.",
    icon: CalendarCheck,
  },
  {
    title: "Connected Living",
    desc: "Consistent updates so your family stays connected to your loved one’s journey.",
    icon: Activity,
  },
  {
    title: "Care That Listens",
    desc: "Care plans built on conversation, honoring your family’s unique story.",
    icon: ClipboardList,
  },
];

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#FBFBFA] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 mb-20 border-b border-gray-100 pb-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
          style={{ color: colors.brand.logoPurple }}
        >
          Why Choose MeddyCare
        </motion.span>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 lg:col-span-8 text-4xl sm:text-5xl xl:text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Care That Prioritizes <br />
            Dignity & Connection.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="col-span-1 lg:col-span-4 text-gray-500 text-sm xl:text-base leading-relaxed font-medium lg:pb-1"
            style={{ fontFamily: typography.fontFamilies.body }}
          >
            We go beyond basic assistance, fostering genuine relationships and
            nurturing the emotional well-being of your loved ones through
            thoughtful, personalized care plans.
          </motion.p>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[3rem] bg-white border border-[#552976]/10 shadow-[0_20px_50px_rgba(85,41,118,0.05)] overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#552976] to-[#A37EB8] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="absolute top-6 right-8 text-8xl font-bold text-[#552976]/5 tracking-tighter">
                0{index + 1}
              </span>
              <div className="w-14 h-14 mb-8 flex items-center justify-center bg-[#552976]/5 rounded-2xl text-[#552976] group-hover:bg-[#552976] group-hover:text-white transition-colors">
                <Icon size={28} />
              </div>
              <h3
                className="text-2xl font-medium text-[#140E1B] mb-3"
                style={{ fontFamily: typography.fontFamilies.heading }}
              >
                {item.title}
              </h3>
              <p
                className="text-[#4A4453] leading-relaxed max-w-[80%] font-light"
                style={{ fontFamily: typography.fontFamilies.body }}
              >
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* IMMERSIVE MISSION SECTION */}
      <motion.div
        style={{ y }}
        className="mt-32 py-32 bg-[#552976]/5 border-y border-[#552976]/10"
      >
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative h-[500px] flex items-center justify-center">
            <motion.div
              whileHover={{ rotate: -3 }}
              className="absolute w-[280px] h-[360px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <img
                src="/meddycareone.jpg"
                alt="Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ rotate: 3 }}
              className="absolute w-[280px] h-[360px] translate-x-20 translate-y-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#552976]/10 text-[#552976] text-xs font-bold uppercase tracking-widest">
              Our Mission
            </div>
            <h2
              className="text-6xl font-light text-[#140E1B] leading-[1.1]"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              We take care of <br />{" "}
              <span className="italic">Senior Persons.</span>
            </h2>
            <p
              className="text-[#4A4453] text-lg leading-relaxed font-light"
              style={{ fontFamily: typography.fontFamilies.body }}
            >
              At MeddyCare, we believe that every senior deserves to live with
              dignity, comfort, and joy. Our mission is to provide compassionate
              and personalized elder care.
            </p>
            <button className="flex items-center gap-3 px-8 py-4 bg-[#552976] text-white rounded-full font-medium hover:bg-[#43215E] transition-all">
              Explore Our Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
