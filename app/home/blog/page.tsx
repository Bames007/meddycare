"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const ALL_POSTS = [
  {
    slug: "cost-of-care-2026",
    title: "The Cost of Care: 2026 Breakdown",
    excerpt:
      "A comprehensive look at what families are paying for senior care this year, and how to plan ahead.",
    category: "Finance",
    date: "May 15, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
    featured: true,
  },
  {
    slug: "signs-parent-needs-help",
    title: "Signs Your Parent Needs Help",
    excerpt:
      "Subtle behavioral changes that indicate it might be time to have the conversation.",
    category: "Insights",
    date: "May 10, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
  {
    slug: "vet-carer-checklist",
    title: "How to Vet a Private Carer",
    excerpt: "Essential questions and red flags when hiring independent care.",
    category: "Authority",
    date: "May 5, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
  },
  {
    slug: "why-respite-care-matters",
    title: "Why Respite Care Matters",
    excerpt: "The hidden gift of taking a break for family caregivers.",
    category: "Empathy",
    date: "April 28, 2026",
    readTime: "3 min read",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
  },
  {
    slug: "dementia-at-home",
    title: "Managing Dementia at Home",
    excerpt:
      "Practical strategies and safety tips for families navigating early‑stage dementia.",
    category: "Specialist",
    date: "April 20, 2026",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800",
  },
  {
    slug: "live-in-vs-visiting",
    title: "Live‑in vs. Visiting Care",
    excerpt:
      "Compare the benefits and costs of full‑time residential care versus hourly visits.",
    category: "Decision",
    date: "April 12, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
  },
  {
    slug: "medicare-explained",
    title: "What Medicare Covers (and Doesn't)",
    excerpt: "A clear guide to navigating government benefits for senior care.",
    category: "Finance",
    date: "April 5, 2026",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800",
  },
  {
    slug: "loneliness-elderly",
    title: "Combating Loneliness in the Elderly",
    excerpt: "Simple connection strategies that transform daily life.",
    category: "Wellness",
    date: "March 28, 2026",
    readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800",
  },
  {
    slug: "tech-care",
    title: "Tech Tools for Aging in Place",
    excerpt: "Smart home devices that help seniors live independently longer.",
    category: "Innovation",
    date: "March 20, 2026",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
  },
];

export default function BlogHub() {
  const featuredPost = ALL_POSTS.find((post) => post.featured);
  const regularPosts = ALL_POSTS.filter((post) => !post.featured);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] text-[#140E1B] mb-6">
            Insights.
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-xl">
            Expert guidance for families navigating the care journey.
          </p>
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-[1400px] mx-auto px-6 mb-16">
          <Link
            href={`/home/blog/${featuredPost.slug}`}
            className="group block"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-block px-3 py-1 bg-[#552976]/80 backdrop-blur-sm rounded-full text-xs font-medium mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {featuredPost.title}
                </h2>
                <p className="text-white/80 max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link
              href={`/home/blog/${post.slug}`}
              key={post.slug}
              className="group block"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block px-2 py-0.5 bg-[#552976]/10 text-[#552976] text-xs font-medium rounded-full mb-3">
                {post.category}
              </span>
              <h3 className="text-xl font-semibold text-[#140E1B] mb-2 group-hover:text-[#552976] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
