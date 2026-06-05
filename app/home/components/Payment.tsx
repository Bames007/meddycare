"use client";

import { DESIGN_TOKENS } from "../../utils/constants";
import { Check } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    title: "Visiting Care",
    price: "£45",
    period: "per visit",
    desc: "Perfect for extra help with daily tasks.",
    features: [
      "Personal care assistance",
      "Medication support",
      "Light housekeeping",
    ],
  },
  {
    title: "Respite Care",
    price: "£180",
    period: "per day",
    desc: "Short-term relief for family caregivers.",
    features: ["Temporary relief", "Total peace of mind", "Full daily support"],
  },
  {
    title: "Full-Time Live-in",
    price: "£1,250",
    period: "per week",
    desc: "24/7 dedicated care in your own home.",
    features: [
      "Constant companionship",
      "Complex care expertise",
      "Emotional wellbeing",
    ],
  },
];

export function PaymentPlans() {
  const { colors, typography, transitions } = DESIGN_TOKENS;

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-[11px] font-bold tracking-[0.3em] uppercase block mb-4"
            style={{
              color: colors.brand.logoPurple,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            Investment in Quality
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
            style={{
              color: colors.structure.primary,
              fontFamily: typography.fontFamilies.heading,
            }}
          >
            Transparent Care Plans
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: colors.brand.logoPurple }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-2xl border border-[#E5E3E0] shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Top accent bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: colors.brand.logoPurple }}
              />

              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  color: colors.structure.primary,
                  fontFamily: typography.fontFamilies.heading,
                }}
              >
                {plan.title}
              </h3>
              <p
                className="text-sm mb-6"
                style={{
                  color: colors.structure.secondary,
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span
                  className="text-5xl font-bold"
                  style={{
                    color: colors.brand.logoPurple,
                    fontFamily: typography.fontFamilies.heading,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm ml-2"
                  style={{ color: colors.structure.secondary }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Features list */}
              <ul className="space-y-3 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm"
                    style={{
                      color: colors.structure.secondary,
                      fontFamily: typography.fontFamilies.body,
                    }}
                  >
                    <Check
                      size={18}
                      style={{ color: colors.brand.logoPurple }}
                      strokeWidth={1.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full py-4 text-center rounded-full font-semibold text-sm transition-all ${transitions.perf} hover:scale-[1.02] active:scale-[0.98]`}
                style={{
                  backgroundColor: colors.brand.logoPurple,
                  color: "white",
                  fontFamily: typography.fontFamilies.body,
                }}
              >
                Select {plan.title}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust footer */}
        <div className="text-center mt-16">
          <p
            className="text-xs uppercase tracking-wider"
            style={{
              color: colors.structure.secondary,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            No hidden fees · Personalised care plans · Free consultation
          </p>
        </div>
      </div>
    </section>
  );
}
