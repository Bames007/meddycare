"use client";

import { ArrowRight } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

export function Footer() {
  const { colors } = DESIGN_TOKENS;

  return (
    <footer
      className="pt-24 pb-12 px-6 text-white"
      style={{ backgroundColor: colors.brand.logoPurple }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Branding */}
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6 text-white">
              MeddyCare
            </h2>
            <p className="text-purple-100 text-sm leading-relaxed mb-8 max-w-xs">
              Premium live-in care services dedicated to dignity, independence,
              and the preservation of your home environment.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold border-b border-white/20 pb-2 inline-block">
              CQC Regulated & Insured
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-purple-200">
                Service
              </h4>
              <ul className="space-y-4 text-sm text-purple-50">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Live-in Care
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Respite
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Specialist
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-purple-200">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-purple-50">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-purple-200">
                Stay Updated
              </h4>
              <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent px-4 py-2 text-sm w-full outline-none placeholder:text-purple-200"
                />
                <button className="bg-white text-purple-900 p-2 rounded-full">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-[10px] uppercase tracking-[0.2em] text-purple-200 gap-6">
          <p>© 2026 MeddyCare. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
