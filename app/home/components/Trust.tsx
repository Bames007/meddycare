"use client";

import { useEffect, useRef } from "react";
import {
  HeartHandshake,
  Star,
  ArrowRight,
  UserCheck,
  FileText,
  ShieldCheck,
  Fingerprint,
  Users2,
  Building2,
  Lock,
  EyeOff,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DESIGN_TOKENS } from "../../utils/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Trust() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Solid typographic entry layout
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
          },
        },
      );

      // Clean architectural container presentation sequence
      const items = gridRef.current?.querySelectorAll(".trust-structural-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.8,
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

  const { colors } = DESIGN_TOKENS;

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-28 bg-[#FFFFFF] overflow-hidden select-none font-sans"
    >
      {/* SECTION HEADER SYSTEM */}
      <div
        ref={headerRef}
        className="w-full max-w-[1400px] mx-auto flex flex-col items-start text-left mb-20 border-b border-gray-100 pb-12"
      >
        <span
          className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-5 block font-inter"
          style={{ color: colors.brand.logoPurple }}
        >
          Verification Protocol
        </span>
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <h2 className="col-span-1 lg:col-span-8 text-4xl sm:text-5xl xl:text-[clamp(3rem,4.5vw,5rem)] font-black tracking-tighter leading-[0.9] text-gray-900 uppercase font-plus-jakarta">
            Our Core Pillar <br />
            Is Absolute Trust.
          </h2>
          <p className="col-span-1 lg:col-span-4 text-gray-500 text-lg italic leading-relaxed font-medium lg:pb-1 font-cormorant">
            We eliminate matching uncertainties. Through clinical oversight
            protocols and continuous compliance management, we offer families
            true safety.
          </p>
        </div>
      </div>

      {/* DISTINCT EDITORIAL BLOCK ARCHITECTURE */}
      <div
        ref={gridRef}
        className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* LEFT COLUMN: THE SOLID ANCHOR OF AUTHORITY (Spans 5 Columns) */}
        <div className="trust-structural-item col-span-1 lg:col-span-5 p-8 lg:p-10 rounded-[2rem] bg-gray-50 border border-gray-200/70 flex flex-col justify-between items-start text-left min-h-[500px] lg:min-h-auto">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-200/80 shadow-3xs">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span className="text-gray-900 font-mono text-xs font-black font-inter tracking-tight">
                Vetting Standard 100%
              </span>
            </div>
          </div>

          <div className="my-10 lg:my-0">
            <span
              className="text-xs font-mono font-bold uppercase tracking-widest mb-3 block font-inter"
              style={{ color: colors.brand.logoPink }}
            >
              Integrity
            </span>
            <h3 className="text-gray-900 text-3xl lg:text-[2.4rem] font-black tracking-tight uppercase leading-[1.0] mb-5 font-plus-jakarta">
              Recognized By Home Care Experts.
            </h3>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-normal font-cormorant">
              We hold our platform parameters to rigorous medical ecosystem
              benchmarks. From identity security tracing to real-time clinical
              evaluations, our platform acts as a protective shield for your
              home environment.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: RESTRUCTURED GEOMETRIC DATA STACKS (Spans 7 Columns) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          {/* BLOCK 2: VETTED & DBS SCREENING (Horizontal Strip Layout) */}
          <div className="trust-structural-item w-full p-6 lg:p-8 rounded-[2rem] border border-gray-200 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
            <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <div
                className="p-3.5 rounded-2xl bg-gray-50"
                style={{ color: colors.brand.logoPurple }}
              >
                <Fingerprint size={24} strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 font-inter block">
                  Step 01
                </span>
                <span className="text-gray-900 font-plus-jakarta font-black text-sm uppercase tracking-wider">
                  Background
                </span>
              </div>
            </div>

            <div className="md:col-span-8">
              <h4 className="text-gray-900 font-plus-jakarta font-black text-lg uppercase tracking-wide mb-2">
                Vetted & DBS Checked
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium font-cormorant">
                Every single live-in carer undergoes an advanced, rigorous
                vetting matrix. This includes immediate Enhanced DBS criminal
                history validations, independent face-to-face identity
                evaluations, and manual clinical reference verification.
              </p>
            </div>
          </div>

          {/* BLOCK 3: VERIFIED CARERS TRACKING (Horizontal Strip Layout) */}
          <div className="trust-structural-item w-full p-6 lg:p-8 rounded-[2rem] border border-gray-200 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
            <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <div
                className="p-3.5 rounded-2xl bg-gray-50"
                style={{ color: colors.brand.logoPink }}
              >
                <Users2 size={24} strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 font-inter block">
                  Step 02
                </span>
                <span className="text-gray-900 font-plus-jakarta font-black text-sm uppercase tracking-wider">
                  Monitoring
                </span>
              </div>
            </div>

            <div className="md:col-span-8">
              <h4 className="text-gray-900 font-plus-jakarta font-black text-lg uppercase tracking-wide mb-2">
                Verified Carers Only
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium font-cormorant">
                We reject standard database lists. All matching candidates are
                strictly interviewed in person, evaluated for clinical
                capability matching, and continuously checked for high-tier care
                delivery.
              </p>
            </div>
          </div>

          {/* BLOCK 4: TRANSPARENT ACCOUNTING STRUCTURE (Horizontal Strip Layout) */}
          <div className="trust-structural-item w-full p-6 lg:p-8 rounded-[2rem] border border-gray-200 bg-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
            <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start gap-4 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4">
              <div
                className="p-3.5 rounded-2xl bg-gray-50"
                style={{ color: colors.brand.logoPurple }}
              >
                <FileText size={24} strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 font-inter block">
                  Step 03
                </span>
                <span className="text-gray-900 font-plus-jakarta font-black text-sm uppercase tracking-wider">
                  Flat Fee
                </span>
              </div>
            </div>

            <div className="md:col-span-8">
              <h4 className="text-gray-900 font-plus-jakarta font-black text-lg uppercase tracking-wide mb-2">
                Transparent Pricing Guarantee
              </h4>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium font-cormorant">
                Know exactly what your family pays from day one. Our pricing is
                completely flat and structured upfront—guaranteeing no
                administrative penalties, unexpected placement upcharges, or
                hidden agency retention cuts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 5: THE PRIMARY LOGO-PURPLE FRAME SYSTEM */}
      <div
        className="trust-structural-item w-full max-w-[1400px] mx-auto mt-6 p-8 lg:p-10 rounded-[2.5rem] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border relative overflow-hidden text-white text-left"
        style={{
          backgroundColor: colors.brand.logoPurple,
          borderColor: colors.brand.logoPurple,
        }}
      >
        <div className="flex flex-col max-w-2xl relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={14} className="text-white/60" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 font-inter">
              Ecosystem Standard
            </span>
          </div>

          <h4 className="text-white font-plus-jakarta font-black text-2xl lg:text-3xl uppercase tracking-wide mb-3">
            Build Your Secure Care Environment Today.
          </h4>
          <p className="text-white/70 text-base leading-relaxed font-normal font-cormorant">
            Link directly with verified care specialists who align perfectly
            with your family values, protect personal independent routines, and
            safeguard home wellness.
          </p>
        </div>

        <button className="w-full md:w-auto px-8 h-14 bg-white text-gray-900 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-3 whitespace-nowrap shadow-xl cursor-pointer active:scale-[0.98] shrink-0 font-inter">
          Initialize Care Matching
          <ArrowRight
            size={13}
            strokeWidth={3}
            style={{ color: colors.brand.logoPink }}
          />
        </button>
      </div>

      {/* INSTITUTIONAL COMPLIANCE GRID FOOTER */}
      <div className="w-full max-w-[1400px] mx-auto mt-20 pt-12 border-t border-gray-100">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 block text-center font-inter">
          Institutional Compliance Registries
        </span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {[
            {
              tag: "CQC Regulated",
              code: "Directive Audited",
              icon: ShieldCheck,
            },
            { tag: "ICO Registered", code: "Data Privacy Locked", icon: Lock },
            { tag: "GDPR Compliant", code: "Encrypted Protocol", icon: EyeOff },
            {
              tag: "ISO Certified",
              code: "Quality Management",
              icon: Building2,
            },
          ].map((reg, index) => {
            const IconComponent = reg.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50/50 border border-gray-200/40 flex items-center justify-between text-left"
              >
                <div className="flex flex-col">
                  <span className="text-gray-900 font-plus-jakarta font-black text-sm lg:text-base uppercase tracking-wide">
                    {reg.tag}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-gray-400 uppercase tracking-wider mt-0.5 font-inter">
                    {reg.code}
                  </span>
                </div>
                <IconComponent
                  size={16}
                  className="text-gray-300 shrink-0 ml-2"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
