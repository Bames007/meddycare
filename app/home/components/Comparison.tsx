"use client";

import { DESIGN_TOKENS } from "../../utils/constants";

const COMPARISON_DATA = [
  {
    feature: "Staff Ratio",
    careHome: "1 carer to 4+ residents",
    meddyCare: "1-to-1 Dedicated Care",
  },
  {
    feature: "Environment",
    careHome: "Unfamiliar facility",
    meddyCare: "Your own home",
  },
  {
    feature: "Couples",
    careHome: "Often separated",
    meddyCare: "Stay together",
  },
  {
    feature: "Pets",
    careHome: "Rarely allowed",
    meddyCare: "Pets stay with you",
  },
  {
    feature: "Routine",
    careHome: "Set by the home",
    meddyCare: "Your personal routine",
  },
  {
    feature: "Cost for Couples",
    careHome: "Double the fees",
    meddyCare: "One shared cost",
  },
];

export default function ComparisonTable() {
  const { colors, typography } = DESIGN_TOKENS;

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span
            className="text-xs font-mono font-bold tracking-[0.3em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            The Better Choice
          </span>
          <h2
            className="text-[clamp(2.5rem,4vw,4rem)] font-black uppercase tracking-tighter leading-[0.95] text-gray-900"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            MeddyCare vs. <br />
            <span className="italic font-light text-gray-400">
              Residential Care.
            </span>
          </h2>
        </div>

        {/* TABLE */}
        <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-50/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Feature
                </th>
                <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                  Care Home
                </th>
                <th
                  className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: colors.brand.logoPurple }}
                >
                  MeddyCare Live-in
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-t border-gray-100 hover:bg-purple-50/30 transition-colors"
                >
                  <td className="p-8 font-black text-sm text-gray-900">
                    {row.feature}
                  </td>
                  <td className="p-8 text-sm text-gray-500 font-medium">
                    {row.careHome}
                  </td>
                  <td className="p-8 text-sm text-gray-900 font-black">
                    {row.meddyCare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-12 text-center text-gray-500 max-w-xl mx-auto leading-relaxed">
          Live-in care provides personalized, high-intensity support while
          ensuring your loved one remains in the comfort and dignity of their
          own familiar surroundings.
        </p>
      </div>
    </section>
  );
}
