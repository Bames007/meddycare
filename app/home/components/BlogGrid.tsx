"use client";

import { motion } from "framer-motion";
import { DESIGN_TOKENS } from "../../utils/constants";

const BLOG_POSTS = [
  {
    title: "The Cost of Care in 2026",
    category: "Guides",
    span: "md:col-span-2",
  },
  {
    title: "Signs Your Parent Needs Help",
    category: "Insights",
    span: "md:col-span-1",
  },
  {
    title: "How to Vet a Private Carer",
    category: "Authority",
    span: "md:col-span-1",
  },
  {
    title: "Why Respite Care Matters",
    category: "Empathy",
    span: "md:col-span-2",
  },
  {
    title: "Live-in vs. Visiting Care",
    category: "Advice",
    span: "md:col-span-3",
  },
  // ... continue for 10
];

export default function BlogGrid() {
  const { colors } = DESIGN_TOKENS;

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter">
          Insights & Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`${post.span} rounded-[2rem] p-8 bg-white border border-gray-100 flex flex-col justify-end group cursor-pointer overflow-hidden relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
              <span className="relative z-20 text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">
                {post.category}
              </span>
              <h3 className="relative z-20 text-2xl font-bold text-white leading-tight">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
