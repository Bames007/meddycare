"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

export function Footer() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <footer
      className="pt-24 pb-12 px-6"
      style={{ backgroundColor: "#F5F0F9" }} // Light purple tint
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Branding with logo */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="MeddyCare"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{
                color: colors.structure.secondary,
                fontFamily: typography.fontFamilies.body,
              }}
            >
              Premium live‑in care services dedicated to dignity, independence,
              and the preservation of your home environment.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold border-b border-[#552976]/30 pb-1 hover:border-[#552976]/70 transition-colors">
              <span className="text-[#552976]">CQC Regulated & Insured</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4
                className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em]"
                style={{
                  color: colors.brand.logoPurple,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                Service
              </h4>
              <ul
                className="space-y-3 text-sm"
                style={{
                  color: colors.structure.secondary,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Live‑in Care
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Respite
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Specialist
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Dementia Support
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em]"
                style={{
                  color: colors.brand.logoPurple,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                Company
              </h4>
              <ul
                className="space-y-3 text-sm"
                style={{
                  color: colors.structure.secondary,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Our Carers
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-[#552976] transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4
                className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em]"
                style={{
                  color: colors.brand.logoPurple,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                Stay Updated
              </h4>
              <div className="flex bg-white rounded-full p-1 border border-[#E5E3E0] transition-all focus-within:ring-1 focus-within:ring-[#552976]/40">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent px-4 py-2.5 text-sm w-full outline-none placeholder:text-[#4A4453]/60"
                  style={{
                    color: colors.structure.primary,
                    fontFamily: typography.fontFamilies.body,
                  }}
                />
                <button className="bg-[#552976] text-white p-2 rounded-full hover:scale-105 transition-transform group">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
              <p
                className="text-xs mt-3"
                style={{
                  color: colors.structure.secondary,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                No spam, just care insights.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E5E3E0] text-[10px] uppercase tracking-[0.2em] gap-4">
          <p
            style={{
              color: colors.structure.secondary,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            © {new Date().getFullYear()} MeddyCare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#552976] transition-colors"
              style={{ color: colors.structure.secondary }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#552976] transition-colors"
              style={{ color: colors.structure.secondary }}
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-[#552976] transition-colors"
              style={{ color: colors.structure.secondary }}
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
