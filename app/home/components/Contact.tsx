"use client";

import { DESIGN_TOKENS } from "../../utils/constants";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  const { colors } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-[#F8F8F6]">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Side */}
        <div className="space-y-12">
          <div>
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: colors.brand.logoPurple }}
            >
              Start the conversation
            </span>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[0.9] text-[#1A1A1A] uppercase tracking-[-0.02em]">
              Let’s talk <br />
              <span style={{ color: colors.brand.logoPink }}>about care.</span>
            </h2>
          </div>

          <div className="space-y-8">
            <p className="text-[#4A4540] text-lg leading-relaxed max-w-md">
              Whether you are ready to begin or just have a few questions, our
              team is here to listen. We pride ourselves on being accessible,
              empathetic, and human.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[#1A1A1A]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border"
                  style={{ borderColor: colors.brand.logoPink }}
                >
                  <Phone size={16} style={{ color: colors.brand.logoPink }} />
                </div>
                <span className="font-bold text-lg">0800 123 4567</span>
              </div>
              <div className="flex items-center gap-4 text-[#1A1A1A]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white border"
                  style={{ borderColor: colors.brand.logoPurple }}
                >
                  <Mail size={16} style={{ color: colors.brand.logoPurple }} />
                </div>
                <span className="font-bold text-lg">hello@meddycare.co.uk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - With improved contrast inputs */}
        <form className="bg-white p-10 md:p-12 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-purple-600 transition-all placeholder:text-gray-500 text-gray-900"
              placeholder="Your Name"
            />
            <input
              className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl outline-none focus:border-purple-600 transition-all placeholder:text-gray-500 text-gray-900"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="w-full p-5 bg-white border-2 border-gray-200 rounded-xl h-40 mb-8 outline-none focus:border-purple-600 transition-all placeholder:text-gray-500 text-gray-900"
            placeholder="Tell us a little about your needs..."
          />
          <button
            className="w-full py-6 text-white font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.brand.logoPurple }}
          >
            Send Inquiry
          </button>
          <p className="text-center text-[11px] text-gray-500 mt-6 uppercase tracking-widest font-medium">
            Typically responds within 2 hours
          </p>
        </form>
      </div>
    </section>
  );
}
