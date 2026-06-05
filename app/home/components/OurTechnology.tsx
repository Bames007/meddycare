"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { DESIGN_TOKENS } from "../../utils/constants";

const { colors, typography } = DESIGN_TOKENS;
const HLS_URL =
  "https://stream.mux.com/Q3hYHAcLU82ceOUgwDeO4HiwOc3WZn9JD02PugwzxHOI.m3u8";

export default function OurTechnology() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(HLS_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.playbackRate = 0.7;
        video.play();
      });
      return () => hls.destroy();
    }
  }, []);

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* INTEGRATED HEADER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 mb-20 border-b border-gray-100 pb-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
          style={{ color: colors.brand.logoPurple }}
        >
          Our Technology
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
            We’ve replaced complex paperwork with a human-first approach. Follow
            these three simple steps to connect with a carer who truly
            understands your family’s needs.
          </motion.p>
        </div>
      </div>

      {/* TECH VISUALIZATION - MASKED VIDEO */}
      <div className="relative w-full max-w-[1400px] mx-auto px-6 h-[500px] rounded-[3rem] overflow-hidden">
        {/* SVG Mask Definition */}
        <svg className="absolute w-0 h-0">
          <defs>
            <mask id="meddyMask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-black text-[120px] fill-black"
              >
                MEDDYCARE
              </text>
            </mask>
          </defs>
        </svg>

        {/* Video Background Layer */}
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Mask Layer */}
        <div
          className="absolute inset-0 bg-[#552976] backdrop-blur-[20px] [mask-image:url(#meddyMask)]"
          style={{ backgroundColor: colors.brand.logoPurple }}
        />

        {/* Decorative elements */}
        <div className="absolute inset-0 border border-white/10 rounded-[3rem]" />
      </div>
    </section>
  );
}
