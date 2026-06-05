"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  category: string;
  span: string;
  img: string;
}

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/home/blog/${post.slug}`} className={`${post.span}`}>
      <motion.div
        whileHover={{ y: -8 }}
        className="h-full rounded-[2.5rem] p-8 flex flex-col justify-end group cursor-pointer overflow-hidden relative shadow-lg"
      >
        {/* Background Image using Next.js Image for optimization */}
        <Image
          src={post.img}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

        {/* Text Content */}
        <div className="relative z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3 block">
            {post.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-brand-logoPink transition-colors">
            {post.title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
