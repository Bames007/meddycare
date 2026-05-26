"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { DESIGN_TOKENS } from "../../utils/constants";

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
  const { colors, typography } = DESIGN_TOKENS;

  const handleSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [STEPS[step].id]: option }));
    if (step < STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[800px] mx-auto">
        {/* PROGRESS INDICATOR */}
        <div className="mb-16">
          <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-gray-400 mb-4 block">
            Step 0{step + 1} of 0{STEPS.length}
          </span>
          <div className="h-[2px] w-full bg-gray-100">
            <motion.div
              className="h-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              style={{ backgroundColor: colors.brand.logoPurple }}
            />
          </div>
        </div>

        {/* QUESTION CONTENT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <h2
              className="text-3xl md:text-5xl font-black text-gray-900 mb-12 tracking-tighter uppercase"
              style={{ fontFamily: typography.fontFamilies.heading }}
            >
              {STEPS[step].question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
              {STEPS[step].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`p-8 border-b border-r border-gray-200 text-left transition-colors flex items-center justify-between group ${
                    answers[STEPS[step].id] === option
                      ? "bg-gray-50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="font-bold text-gray-900">{option}</span>
                  <div
                    className={`w-4 h-4 border ${
                      answers[STEPS[step].id] === option
                        ? "border-transparent"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor:
                        answers[STEPS[step].id] === option
                          ? colors.brand.logoPink
                          : "transparent",
                    }}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION */}
        <div className="mt-16 flex items-center justify-between">
          <button className="flex items-center gap-3 text-gray-900 font-bold text-[10px] uppercase tracking-[0.2em]">
            <Phone size={14} />
            Speak to an advisor
          </button>

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-gray-900"
            >
              Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
