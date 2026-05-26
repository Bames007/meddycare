"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { DESIGN_TOKENS } from "@/app/utils/constants";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#solutions" },
    { name: "Our Carers", href: "#carers" },
    { name: "Technology", href: "#tech" },
    { name: "Plans", href: "#plans" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FDFCF8]/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div
          className="text-2xl font-black uppercase tracking-tighter"
          style={{ color: DESIGN_TOKENS.colors.brand.logoPurple }}
        >
          MeddyCare
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[#1A1A1A] hover:opacity-60 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 bg-[#1A1A1A] text-white text-xs font-black uppercase rounded-full hover:bg-purple-600 transition-colors"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#FDFCF8] border-b p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
