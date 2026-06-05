"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Check } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

const { colors, typography } = DESIGN_TOKENS;

const STEPS = [
  {
    id: "type",
    question: "What type of care are you looking for?",
    options: [
      "Live-in Care",
      "Respite Care",
      "Visiting Care",
      "Specialist Care",
    ],
  },
  {
    id: "urgency",
    question: "How soon do you need care to begin?",
    options: [
      "Immediately",
      "Within 1 week",
      "Within 1 month",
      "Just exploring",
    ],
  },
  {
    id: "person",
    question: "Who is this care for?",
    options: ["Myself", "My parent", "My partner", "Another relative"],
  },
];

export default function CareQuestionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [STEPS[step].id]: option }));
    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 400);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER SECTION - MAINTAINING YOUR DESIGN SYSTEM */}
        <div className="mb-20 border-b border-gray-100 pb-10">
          <span
            className="text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: colors.brand.logoPurple }}
          >
            Getting Started
          </span>
          <h2
            className="text-4xl sm:text-5xl xl:text-[clamp(2.8rem,4vw,4.8rem)] font-black tracking-tighter leading-[0.92] text-gray-900 uppercase"
            style={{ fontFamily: typography.fontFamilies.heading }}
          >
            A Gentle Path <br />{" "}
            <span className="italic font-light text-gray-400">
              To Quality Care.
            </span>
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          {/* PROGRESS BAR */}
          {!isFinished && (
            <div className="mb-12">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                <span>
                  Step 0{step + 1} / 0{STEPS.length}
                </span>
                <span>
                  {Math.round(((step + 1) / STEPS.length) * 100)}% Complete
                </span>
              </div>
              <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full"
                  animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                  style={{ backgroundColor: colors.brand.logoPurple }}
                />
              </div>
            </div>
          )}

          {/* CONTENT AREA */}
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3
                  className="text-2xl md:text-3xl font-medium text-gray-900 mb-10"
                  style={{ fontFamily: typography.fontFamilies.heading }}
                >
                  {STEPS[step].question}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {STEPS[step].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`p-6 text-left border-2 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                        answers[STEPS[step].id] === option
                          ? "border-[#552976] bg-[#552976]/5"
                          : "border-gray-100 hover:border-gray-200"
                      }`}
                    >
                      <span
                        className={`font-medium ${answers[STEPS[step].id] === option ? "text-[#552976]" : "text-gray-900"}`}
                      >
                        {option}
                      </span>
                      {answers[STEPS[step].id] === option && (
                        <Check size={18} color={colors.brand.logoPurple} />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  We’ve received your details.
                </h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                  One of our care advisors will be in touch shortly to discuss a
                  plan tailored for your family.
                </p>
                <button className="px-8 py-4 bg-[#552976] text-white rounded-full font-bold hover:bg-[#43215E] transition-colors">
                  View Care Options
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
