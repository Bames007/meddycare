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
  const { colors, typography, transitions } = DESIGN_TOKENS;

  return (
    <section className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-[11px] font-bold tracking-[0.3em] uppercase block mb-4"
            style={{
              color: colors.brand.logoPurple,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            The Better Choice
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1]"
            style={{
              color: colors.structure.primary,
              fontFamily: typography.fontFamilies.heading,
            }}
          >
            MeddyCare vs.
            <br />
            <span
              style={{ color: colors.brand.logoPurple }}
              className="font-medium"
            >
              Residential Care.
            </span>
          </h2>
          <div
            className="w-16 h-px mx-auto mt-6"
            style={{ backgroundColor: colors.brand.logoPurple }}
          />
        </div>

        {/* Table – clean, minimal, with soft hover */}
        <div className="overflow-hidden rounded-2xl border border-[#E5E3E0] shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FBFBFA]">
                <th
                  className="p-6 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: colors.structure.secondary,
                    fontFamily: typography.fontFamilies.body,
                  }}
                >
                  Feature
                </th>
                <th
                  className="p-6 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: colors.structure.secondary,
                    fontFamily: typography.fontFamilies.body,
                  }}
                >
                  Care Home
                </th>
                <th
                  className="p-6 text-xs font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: colors.brand.logoPurple,
                    color: "white",
                    fontFamily: typography.fontFamilies.body,
                  }}
                >
                  MeddyCare Live‑in
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-[#E5E3E0] transition-colors hover:bg-[#F5F0F9] ${transitions.perf}`}
                >
                  <td
                    className="p-6 text-sm font-semibold"
                    style={{
                      color: colors.structure.primary,
                      fontFamily: typography.fontFamilies.body,
                    }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-6 text-sm"
                    style={{
                      color: colors.structure.secondary,
                      fontFamily: typography.fontFamilies.body,
                    }}
                  >
                    {row.careHome}
                  </td>
                  <td
                    className="p-6 text-sm font-medium"
                    style={{
                      color: colors.structure.primary,
                      fontFamily: typography.fontFamilies.body,
                    }}
                  >
                    {row.meddyCare}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer description */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p
            className="text-sm leading-relaxed"
            style={{
              color: colors.structure.secondary,
              fontFamily: typography.fontFamilies.body,
            }}
          >
            Live‑in care provides personalized, high‑intensity support while
            ensuring your loved one remains in the comfort and dignity of their
            own familiar surroundings.
          </p>
        </div>
      </div>
    </section>
  );
}
