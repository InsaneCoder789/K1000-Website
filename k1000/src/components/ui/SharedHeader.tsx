"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const ROUTES = {
  home: "/Sections/home",
  about: "/Sections/about",
  benefits: "/Sections/benefits",
  branches: "/Sections/branches",
  departments: "/Sections/departments",
  events: "/Sections/events",
  apply: "/Sections/apply",
  contact: "/Sections/contact",
} as const;

type NavKey = keyof typeof ROUTES;

const NAV_ITEMS: NavKey[] = ["home", "about", "benefits", "branches", "departments", "events", "apply", "contact"];
const NAV_LABELS: Record<NavKey, string> = {
  home: "Home", about: "About", benefits: "Benefits", branches: "Branches",
  departments: "Departments", events: "Events", apply: "Apply", contact: "Contact",
};

const conthrax = "font-['Conthrax',_sans-serif]";

export default function SharedHeader() {
  const router = useRouter();
  const pathname = usePathname(); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const goTo = (key: NavKey) => {
    setIsMobileMenuOpen(false);
    router.push(ROUTES[key]);
  };

  const goToCanvas = () => router.push("/");

  return (
    <>
      <header className={`fixed top-0 left-0 w-full px-12 py-8 grid grid-cols-[1fr_auto_1fr] items-center z-[110] ${conthrax}`}>
        
        {/* Left Section: Logo & Date */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button onClick={goToCanvas} className="hover:opacity-80 transition-opacity outline-none">
            <img
              src="/k1000-logo.png"
              className="h-10 w-auto drop-shadow-[0_0_15px_#00f7ff]"
              alt="K-1000"
            />
          </button>
          <div className="h-4 w-[1px] bg-cyan-500/30 hidden md:block" />
          <span className="text-[8px] tracking-[0.5em] text-cyan-500/50 hidden md:block uppercase">EST. 2026</span>
        </motion.div>

        {/* Center: Desktop Nav Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex gap-1 bg-black/40 border border-white/5 p-1 rounded-full backdrop-blur-md"
        >
          {NAV_ITEMS.map((key) => {
            const isActive = pathname === ROUTES[key];

            return (
              <button
                key={key}
                onClick={() => goTo(key)}
                className={`px-5 py-2 text-[8px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-300 outline-none
                  ${isActive 
                    ? "text-[#00f7ff] bg-cyan-500/10 shadow-[inset_0_0_10px_rgba(0,247,255,0.1)]" 
                    : "text-white/40 hover:text-[#00f7ff] hover:bg-white/5"
                  }`}
              >
                {NAV_LABELS[key]}
              </button>
            );
          })}
        </motion.nav>

        {/* Right Section: Status & KIIT Logo */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="flex items-center justify-end gap-6"
        >
          <div className="text-right hidden md:block">
            <p className="text-[8px] text-cyan-500/40 tracking-widest leading-none mb-1">SYSTEM_UPLINK</p>
            <p className="text-[10px] text-cyan-400 uppercase leading-none">Nominal</p>
          </div>
          
          {/* KIIT Logo - Original Branding */}
          <img src="/kiit-logo.png" className="h-14 w-auto object-contain" alt="KIIT" />

          {/* Mobile toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-[#00f7ff] p-2 outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className={`fixed inset-0 z-[120] bg-black/90 p-8 flex flex-col md:hidden ${conthrax}`}
          >
             <div className="flex justify-between items-center mb-16">
              <button onClick={goToCanvas} className="outline-none">
                <img src="/k1000-logo.png" className="h-8 w-auto" alt="Logo" />
              </button>
              <button onClick={() => setIsMobileMenuOpen(false)} className="outline-none">
                <X size={32} className="text-[#00f7ff]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {NAV_ITEMS.map((key, index) => {
                const isActive = pathname === ROUTES[key];
                return (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={key}
                    onClick={() => goTo(key)}
                    className={`text-3xl uppercase tracking-widest font-black text-left transition-all outline-none
                      ${isActive 
                        ? "text-[#00f7ff] translate-x-4" 
                        : "text-white/20"
                      }`}
                  >
                    {NAV_LABELS[key]}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-auto border-t border-white/5 pt-8">
               <p className="text-[10px] text-cyan-500/40 tracking-[0.5em] uppercase">Core System V26</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}