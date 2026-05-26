"use client";

import { DESIGN_TOKENS } from "../../utils/constants";
import { Check } from "lucide-react";

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
  const { colors } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-[#FBFBFA]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase block mb-4"
            style={{ color: colors.brand.logoPurple }}
          >
            Investment in Quality
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-[#1A1A1A] uppercase tracking-[-0.02em]">
            Transparent Care Plans
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] flex flex-col transition-transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-500 text-sm mb-8">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-5xl font-black text-[#1A1A1A]">
                  {plan.price}
                </span>
                <span className="text-gray-400 font-medium ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <Check size={18} style={{ color: colors.brand.logoPink }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-5 rounded-2xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: colors.brand.logoPurple }}
              >
                Select {plan.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
