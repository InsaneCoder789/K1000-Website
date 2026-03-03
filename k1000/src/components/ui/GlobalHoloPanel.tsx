"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

type Props = {
  page: string;
  onClose: () => void;
};

const pageMap: Record<string, any> = {
  home: dynamic(() => import("@/app/Sections/home/homepage")),
  about: dynamic(() => import("@/app/Sections/about/page")),
  benefits: dynamic(() => import("@/app/Sections/benefits/BenefitsSection")),
  branches: dynamic(() => import("@/app/Sections/branches/branchpage")),
  departments: dynamic(() => import("@/app/Sections/departments/departmentpage")),
  events: dynamic(() => import("@/app/Sections/events/eventspage")),
  apply: dynamic(() => import("@/app/Sections/apply/applypage")),
  contact: dynamic(() => import("@/app/Sections/contact/contactpage")),
};

export default function GlobalHoloPanel({ page, onClose }: Props) {
  const PageComponent = pageMap[page];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.98, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 10 }}
        className="relative w-[100vw] h-[100vh] md:w-[98vw] md:h-[96vh] bg-[#0a0a0a] border border-white/10 
                   md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
      >
        {/* 1. CUSTOM SCROLLBAR STYLING */}
        <style jsx global>{`
          .custom-scroll::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scroll::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            margin: 20px 0;
          }
          .custom-scroll::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }
          .custom-scroll::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.4);
          }
        `}</style>

        {/* 2. GRADIENT MASKING (Subtle fade for edge transitions) */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none opacity-80" />

        {/* 3. SCROLLABLE CONTENT AREA - Padding removed to allow components to fit the panel edge-to-edge if designed so */}
        <div className="flex-1 w-full h-full overflow-y-auto custom-scroll relative">
          {PageComponent ? <PageComponent /> : (
            <div className="h-full flex items-center justify-center">
                <p className="text-white/40 tracking-widest font-mono uppercase text-sm">Error: Module_Not_Found</p>
            </div>
          )}
        </div>

        {/* 4. FLOATING CLOSE BUTTON */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[310]">
          <motion.button
            onClick={onClose}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-3 rounded-full border border-white/20 
                       bg-black/80 backdrop-blur-xl shadow-xl 
                       transition-all group pointer-events-auto"
          >
            <X className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-white font-black">
              CLOSE
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}