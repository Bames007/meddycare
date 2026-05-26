"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  User,
  ShieldCheck,
  Heart,
  Clock,
  Activity,
  CalendarCheck,
} from "lucide-react";
import gsap from "gsap";
import { DESIGN_TOKENS } from "../../utils/constants";

const REASONS_DATA = [
  {
    id: 0,
    label: "Medical Team",
    title: "EXPERT DOCTORS",
    description:
      "Get direct, 24/7 access to board-certified medical specialists who coordinate your treatment plan personally.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    icon: User,
  },
  {
    id: 1,
    label: "Emergency Care",
    title: "FAST RESPONSE",
    description:
      "Skip traditional waiting rooms entirely with our instant clinical matchmaking and priority triage channels.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    icon: Clock,
  },
  {
    id: 2,
    label: "Patient Privacy",
    title: "SECURE RECORDS",
    description:
      "Your comprehensive clinical histories and diagnostics are fully protected inside medical-grade encrypted health vaults.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck,
  },
  {
    id: 3,
    label: "Modern Facilities",
    title: "HEALING SPACES",
    description:
      "Physical clinics structured deliberately around sensory peace, hygiene excellence, and patient comfort.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    icon: Heart,
  },
  {
    id: 4,
    label: "Smart Diagnostics",
    title: "REALTIME VITALS",
    description:
      "Continuous health tracking metrics streamed safely and instantly to your primary family doctor network.",
    image:
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
    icon: Activity,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLImageElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // Cinematic high-performance background response logic
  useEffect(() => {
    if (!bgImageRef.current) return;
    gsap.fromTo(
      bgImageRef.current,
      { opacity: 0.75, scale: 1.01 },
      { opacity: 1, scale: 1, duration: 0.25, ease: "sine.out" },
    );
  }, [activeIndex]);

  // Premium editorial initial entrance sequence
  useEffect(() => {
    const interactiveCards = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.5 },
      });

      tl.fromTo(
        textGroupRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2 },
      );

      tl.fromTo(
        interactiveCards,
        { opacity: 0, y: 60, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.06, duration: 1.3 },
        "-=0.9",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  const handleScrollDirection = (direction: "left" | "right") => {
    if (scrollTrackRef.current) {
      const scrollAmount = 260;
      scrollTrackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const currentScene = REASONS_DATA[activeIndex];
  const { colors, typography, radii, transitions } = DESIGN_TOKENS;

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen xl:min-h-[100vh] flex items-end justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pb-10 sm:pb-14 lg:pb-16 pt-28 xl:pt-36 overflow-hidden select-none"
      style={{ backgroundColor: colors.structure.primary }}
    >
      {/* BACKGROUND GRAPHIC MEDIA LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#140E1B]/30 to-[#140E1B]/95 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140E1B]/85 via-transparent to-[#140E1B]/70 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140E1B]/20 via-transparent to-[#140E1B]/95 z-10 pointer-events-none" />

        <img
          ref={bgImageRef}
          src={currentScene.image}
          alt="Meddy Care premium clinic backdrop"
          className="w-full h-full object-cover opacity-100 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="w-full max-w-[1536px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-end relative z-20">
        {/* COMPARTMENT LEFT: Engine Copy Elements */}
        <div
          ref={textGroupRef}
          className="col-span-1 lg:col-span-5 flex flex-col items-start text-left lg:pb-4 xl:pb-8"
        >
          {/* Fluid Typography Title built optimized with clamp for Laptop-to-TV dynamic sizing scaling */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[min(4.5vw,4.8rem)] xl:text-[clamp(3.5rem,4.2vw,5.8rem)] font-black tracking-tighter leading-[0.92] mb-5 xl:mb-7 text-white uppercase"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            Never face <br />
            medical care <br />
            alone.
          </h1>

          <p
            className="text-white/80 text-sm md:text-base xl:text-[clamp(1rem,1.15vw,1.25rem)] xl:leading-relaxed leading-relaxed mb-7 xl:mb-9 max-w-md lg:max-w-sm xl:max-w-xl font-medium"
            style={{ fontFamily: typography.fontFamilies.editorial }}
          >
            {currentScene.description}
          </p>

          {/* ACTION HANDLING BUTTON ELEMENTS */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3.5">
            <button
              className={`w-full sm:w-auto px-6 lg:px-7 h-12 lg:h-13 xl:h-14 ${radii.button} ${transitions.perf} flex items-center justify-center gap-2 text-white font-bold text-xs lg:text-[13px] uppercase tracking-wider shadow-2xl hover:brightness-110 active:scale-[0.97] cursor-pointer whitespace-nowrap`}
              style={{
                backgroundColor: colors.brand.logoPurple,
                fontFamily: typography.fontFamilies.body,
              }}
            >
              Get Immediate Help
              <ArrowRight size={14} className="stroke-[2.5]" />
            </button>

            <button
              className={`w-full sm:w-auto px-6 lg:px-7 h-12 lg:h-13 xl:h-14 ${radii.button} ${transitions.perf} flex items-center justify-center gap-2 text-white font-bold text-xs lg:text-[13px] uppercase tracking-wider border bg-white/5 backdrop-blur-md hover:bg-white/10 active:scale-[0.97] cursor-pointer whitespace-nowrap`}
              style={{
                borderColor: colors.brand.logoPink,
                fontFamily: typography.fontFamilies.body,
              }}
            >
              <CalendarCheck
                size={14}
                style={{ color: colors.brand.logoPink }}
              />
              Book Appointment
            </button>
          </div>
        </div>

        {/* COMPARTMENT RIGHT: Sleeker, Thinner Card Runways */}
        <div className="col-span-1 lg:col-span-7 w-full flex flex-col gap-4 overflow-hidden self-end">
          <div className="flex items-center justify-between px-1">
            <span
              className="text-white/50 text-[10px] xl:text-xs font-bold tracking-widest uppercase"
              style={{ fontFamily: typography.fontFamilies.body }}
            >
              Our Core
            </span>
          </div>

          <div
            ref={scrollTrackRef}
            className="w-full flex gap-4 xl:gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory touch-pan-x cursor-grab active:cursor-grabbing items-end h-[360px] lg:h-[380px] xl:h-[420px]"
            style={{ scrollbarWidth: "none" }}
          >
            {REASONS_DATA.map((card, index) => {
              const IconComponent = card.icon;
              const isSelected = activeIndex === index;

              return (
                <div
                  key={card.id}
                  ref={(el) => addToRefs(el, index)}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[200px] sm:min-w-[220px] lg:min-w-[210px] xl:min-w-[240px] p-4 lg:p-5 xl:p-6 flex flex-col justify-between relative overflow-hidden snap-start border transition-all duration-500 ease-[0.25,1,0.5,1] ${radii.card} cursor-pointer group`}
                  style={{
                    height: isSelected ? "100%" : "88%",
                    backgroundColor: isSelected
                      ? "#23182F"
                      : "rgba(28, 21, 36, 0.45)",
                    borderColor: isSelected
                      ? colors.brand.logoPink
                      : "rgba(255,255,255,0.5)",
                    boxShadow: isSelected
                      ? `0 16px 36px rgba(227, 30, 102, 0.22)`
                      : "none",
                  }}
                >
                  {/* Overlay Masks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140E1B] via-[#140E1B]/40 to-transparent z-10 pointer-events-none" />
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out scale-100 ${
                      isSelected
                        ? "opacity-50"
                        : "opacity-15 group-hover:opacity-40"
                    }`}
                  />

                  {/* Icon Frame */}
                  <div className="w-full flex justify-between items-start relative z-20">
                    <div
                      className="p-2 rounded-xl border bg-white/5 backdrop-blur-md transition-all duration-300"
                      style={{
                        borderColor: isSelected
                          ? colors.brand.logoPink
                          : "rgba(255,255,255,0.08)",
                      }}
                    >
                      <IconComponent
                        size={15}
                        style={{
                          color: isSelected ? colors.brand.logoPink : "#FFFFFF",
                        }}
                      />
                    </div>
                  </div>

                  {/* Heading Text Labels */}
                  <div className="relative z-20 flex flex-col items-start text-left">
                    <span
                      className="text-[9px] xl:text-[10px] font-bold tracking-wider uppercase mb-1 transition-colors duration-300"
                      style={{
                        fontFamily: typography.fontFamilies.body,
                        color: isSelected
                          ? colors.brand.logoPink
                          : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {card.label}
                    </span>
                    <h3
                      className="text-white text-xs lg:text-sm xl:text-base font-black tracking-wide uppercase transition-all duration-300"
                      style={{ fontFamily: typography.fontFamilies.heading }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LOWER CONTROLS ANCHOR SYSTEM */}
          <div className="w-full grid grid-cols-12 items-center border-t border-white/5 pt-5 mt-1 relative">
            {/* Nav Vector Paddle Array */}
            <div className="col-span-4 sm:col-span-3 flex items-center gap-2 relative z-20">
              <button
                onClick={() => handleScrollDirection("left")}
                className={`w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 ${transitions.perf} bg-white/5 active:scale-95 cursor-pointer`}
              >
                <span className="transform rotate-180 block text-xs xl:text-sm">
                  →
                </span>
              </button>
              <button
                onClick={() => handleScrollDirection("right")}
                className={`w-9 h-9 xl:w-11 xl:h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 ${transitions.perf} bg-white/5 active:scale-95 cursor-pointer`}
              >
                <span className="text-xs xl:text-sm">→</span>
              </button>
            </div>

            {/* Linear Progress Metric Indicators */}
            <div className="col-span-8 sm:col-span-9 flex items-center justify-end relative h-10">
              <div className="absolute left-6 right-20 xl:right-24 top-1/2 -translate-y-1/2 h-[1px] bg-white/5 hidden sm:block" />

              <div
                className="absolute top-1/2 -translate-y-1/2 h-[2px] bg-white transition-all duration-500 ease-[0.25,1,0.5,1] hidden sm:block shadow-[0_0_8px_#FFF]"
                style={{
                  width: `${(1 / REASONS_DATA.length) * 50}%`,
                  left: `calc(1.5rem + ${(activeIndex / REASONS_DATA.length) * 50}%)`,
                }}
              />

              {/* Dynamic Number Index Module */}
              <div
                className="text-white font-black text-4xl xl:text-5xl font-mono tracking-tighter leading-none pr-1 select-none transition-all duration-300"
                style={{
                  color: colors.brand.logoPink,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                0{activeIndex + 1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
