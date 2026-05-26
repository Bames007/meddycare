"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Award } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const CARERS = [
  {
    name: "Sarah Jenkins",
    role: "Specialist Dementia Lead",
    location: "London, UK",
    rating: 4.9,
    specialties: ["Dementia", "End-of-Life"],
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Senior Live-in Carer",
    location: "Manchester, UK",
    rating: 5.0,
    specialties: ["Mobility", "Stroke Care"],
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Companion & Wellbeing",
    location: "Bristol, UK",
    rating: 4.9,
    specialties: ["Loneliness", "Companionship"],
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Complex Needs Specialist",
    location: "Leeds, UK",
    rating: 4.8,
    specialties: ["Diabetes", "Parkinson's"],
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Aisha Khan",
    role: "Clinical Support Carer",
    location: "Birmingham, UK",
    rating: 5.0,
    specialties: ["Wound Care", "Medication"],
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David O'Connor",
    role: "Rehabilitation Expert",
    location: "Glasgow, UK",
    rating: 4.9,
    specialties: ["Post-Op", "Physiotherapy"],
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sophie Bennett",
    role: "Senior Dementia Carer",
    location: "London, UK",
    rating: 5.0,
    specialties: ["Memory Loss", "Art Therapy"],
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Thomas Wright",
    role: "Live-in Specialist",
    location: "Oxford, UK",
    rating: 4.9,
    specialties: ["MS Care", "Mobility"],
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
];

export default function MeetOurCarers() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span
              className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
              style={{ color: colors.brand.logoPurple }}
            >
              Our Care Network
            </span>
            <h2
              className="text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              Meet the{" "}
              <span className="italic font-light text-gray-400">experts.</span>
            </h2>
          </div>
          <p
            className="text-gray-500 max-w-sm"
            style={{ fontFamily: typography.fontFamilies.body }}
          >
            Every MeddyCare specialist is rigorously vetted, ensuring not just
            clinical excellence, but genuine companionship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARERS.map((carer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-gray-50 rounded-[2rem] overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={carer.img}
                  alt={carer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-lg font-black uppercase tracking-tight"
                    style={{
                      color: colors.brand.logoPurple,
                      fontFamily: typography.fontFamilies.heading,
                    }}
                  >
                    {carer.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-lg border border-gray-200">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-[10px] font-bold">
                      {carer.rating}
                    </span>
                  </div>
                </div>

                <p className="text-xs font-bold text-gray-900 mb-4 tracking-wider uppercase">
                  {carer.role}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {carer.specialties.map((spec, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 bg-white border border-gray-200 rounded-md text-[9px] font-mono font-bold uppercase text-gray-500"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest border-t border-gray-200 pt-4">
                  <MapPin size={12} /> {carer.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
