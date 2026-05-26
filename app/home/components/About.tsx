"use client";

import { useEffect, useRef } from "react";
import {
  HeartHandshake,
  Star,
  ArrowRight,
  UserCheck,
  FileText,
  Home,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESIGN_TOKENS } from "../../utils/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 88%",
          },
        },
      );

      const items = gridRef.current?.querySelectorAll(".bento-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-24 bg-[#FFFFFF] overflow-hidden select-none"
    >
      {/* SECTION HEADER */}
      <div
        ref={headerRef}
        className="w-full max-w-[1400px] mx-auto flex flex-col items-start text-left mb-16 border-b border-gray-100 pb-10"
      >
        <span
          className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
          style={{ color: colors.brand.logoPurple }}
        >
          Trusted Carers
        </span>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h2
            className="col-span-1 lg:col-span-8 text-4xl sm:text-5xl xl:text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Find Trusted, Vetted <br />
            Live-in Carers.
          </h2>
          <p
            className="col-span-1 lg:col-span-4 text-gray-500 text-sm xl:text-base leading-relaxed font-medium lg:pb-1"
            style={{ fontFamily: typography.fontFamilies.editorial }}
          >
            A clean, simplified platform matching families with premium care
            specialists, built to ensure your loved ones live safely and
            independently at home.
          </p>
        </div>
      </div>

      {/* PREMIUM ASYMMETRIC BENTO GRID */}
      <div
        ref={gridRef}
        className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 auto-rows-[240px] md:auto-rows-[200px] lg:auto-rows-[230px] xl:auto-rows-[250px]"
      >
        {/* BLOCK 1: THE CORE TRUST HERO (Spans 7 Columns, 2 Rows) */}
        <div className="bento-item col-span-1 md:col-span-7 row-span-2 p-8 lg:p-10 rounded-3xl bg-gray-50 border border-gray-200/60 flex flex-col justify-between items-start text-left">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-gray-200 shadow-3xs">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
              <span className="text-gray-900 font-mono text-xs font-black ml-1">
                4.9 / 5.0
              </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.brand.logoPink }}
              />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-600">
                Verified Ratings
              </span>
            </div>
          </div>

          <div className="max-w-xl my-6 md:my-0">
            <h3
              className="text-gray-900 text-3xl lg:text-[2.3rem] font-black tracking-tight uppercase leading-[1.02] mb-4"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Your Trusted Care Platform.
            </h3>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-medium">
              Over 120,000 professional care hours safely managed nationwide. We
              remove agency friction to link you directly with compassionate,
              professional carers who protect your family's independence.
            </p>
          </div>

          <div className="w-full pt-6 border-t border-gray-200/80 flex items-center justify-between gap-4">
            <div className="flex -space-x-3 overflow-hidden">
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Vetted Platform Carer Profile"
              />
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Vetted Platform Carer Profile"
              />
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Vetted Platform Carer Profile"
              />
            </div>

            <span className="text-xs font-mono font-black uppercase tracking-wider text-gray-900 flex items-center gap-2">
              Explore Network{" "}
              <ArrowRight
                size={14}
                strokeWidth={2.5}
                style={{ color: colors.brand.logoPink }}
              />
            </span>
          </div>
        </div>

        {/* BLOCK 2: 5-STEP VETTING (Spans 5 Columns) */}
        <div className="bento-item col-span-1 md:col-span-5 row-span-1 p-6 lg:p-8 rounded-3xl border border-gray-200 bg-white flex flex-col justify-between items-start text-left">
          <div className="w-full flex items-center justify-between">
            <div
              className="p-3 rounded-2xl bg-gray-50"
              style={{ color: colors.brand.logoPurple }}
            >
              <UserCheck size={20} strokeWidth={2.5} />
            </div>
            <span
              className="text-[9px] font-mono font-bold px-3 py-1 rounded-md border uppercase tracking-wide"
              style={{
                color: colors.brand.logoPurple,
                borderColor: colors.brand.logoPurple,
                backgroundColor: `${colors.brand.logoPurple}08`,
              }}
            >
              Checks Done
            </span>
          </div>

          <div>
            <h4
              className="text-gray-900 font-black text-base uppercase tracking-wide mb-1.5"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Rigorous 5-Step Vetting
            </h4>
            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed font-medium">
              Enhanced DBS criminal records validation, independent face-to-face
              identity screening, and strict professional reference calls
              completed.
            </p>
          </div>
        </div>

        {/* BLOCK 3: TRANSPARENT COST TRACKING (Spans 5 Columns) */}
        <div className="bento-item col-span-1 md:col-span-5 row-span-1 p-6 lg:p-8 rounded-3xl border border-gray-200 bg-white flex flex-col justify-between items-start text-left">
          <div className="w-full flex items-center justify-between">
            <div
              className="p-3 rounded-2xl bg-gray-50"
              style={{ color: colors.brand.logoPink }}
            >
              <FileText size={20} strokeWidth={2.5} />
            </div>
            <span
              className="text-[9px] font-mono font-bold px-3 py-1 rounded-md border uppercase tracking-wide"
              style={{
                color: colors.brand.logoPink,
                borderColor: colors.brand.logoPink,
                backgroundColor: `${colors.brand.logoPink}08`,
              }}
            >
              Transparent
            </span>
          </div>

          <div>
            <h4
              className="text-gray-900 font-black text-base uppercase tracking-wide mb-1.5"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Simple & Transparent
            </h4>
            <p className="text-gray-400 text-xs lg:text-sm leading-relaxed font-medium">
              One honest, predictable weekly rate. We maintain absolute zero
              hidden registration upcharges, ongoing platform retention fees, or
              placement penalties.
            </p>
          </div>
        </div>

        {/* BLOCK 4: PERSONALITY ALIGNMENT (Spans 4 Columns) */}
        <div className="bento-item col-span-1 md:col-span-4 row-span-1 p-6 lg:p-8 rounded-3xl border border-gray-200 bg-white flex flex-col justify-between items-start text-left">
          <div
            className="p-3 rounded-2xl bg-gray-50"
            style={{ color: colors.brand.logoPurple }}
          >
            <HeartHandshake size={20} strokeWidth={2.5} />
          </div>

          <div>
            <h4
              className="text-gray-900 font-black text-sm lg:text-base uppercase tracking-wide mb-1"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Carers Who Feel Like Family
            </h4>
            <p className="text-gray-400 text-xs lg:text-[13px] leading-relaxed font-medium">
              We match professionals based on shared personal hobbies, lifestyle
              pacing, and character traits, ensuring authentic companion
              alignment.
            </p>
          </div>
        </div>

        {/* BLOCK 5: SOLID PURPLE PRIMARY CALL TO ACTION (Spans 8 Columns) */}
        <div
          className="bento-item col-span-1 md:col-span-8 row-span-1 p-6 lg:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border relative overflow-hidden text-white"
          style={{
            backgroundColor: colors.brand.logoPurple,
            borderColor: colors.brand.logoPurple,
          }}
        >
          <div className="flex flex-col text-left max-w-lg relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 rounded-lg bg-white/10 text-white">
                <Home size={14} />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50">
                Independence Standard
              </span>
            </div>

            <h4
              className="text-white font-black text-xl lg:text-2xl uppercase tracking-wide mb-2"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Happy, Safe, and Independent at Home
            </h4>
            <p className="text-white/70 text-xs lg:text-sm leading-relaxed font-normal">
              We coordinate medical expectations with personal daily schedules
              cleanly, making sure your loved ones retain full control over
              their cherished routines.
            </p>
          </div>

          <button
            className="w-full sm:w-auto px-6 h-12 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 whitespace-nowrap shadow-md cursor-pointer active:scale-[0.98] shrink-0"
            style={{ fontFamily: typography.fontFamilies.body }}
          >
            Find a Carer
            <ArrowRight
              size={13}
              strokeWidth={3}
              style={{ color: colors.brand.logoPink }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
