"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import SharedHeader from "../../../components/ui/SharedHeader";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
];

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

const branches = [
  {
    title: "Training Program",
    tag: "Unit: Skill Acquisition",
    desc: "A peer-to-peer learning initiative focused on both technical and non-technical mastery. Students engage in workshops and real-world projects to build high-level practical knowledge.",
    focus: "Hands-on Workshops • Peer Mentoring • Professional Growth"
  },
  {
    title: "Research and Publications",
    tag: "Unit: Academic Innovation",
    desc: "Supports students in the end-to-end process of academic research. From selecting high-impact topics to final submissions in reputed journals and global conferences.",
    focus: "Journal Drafting • Faculty Collaboration • IPR Support"
  },
  {
    title: "Project Wing",
    tag: "Unit: Product Development",
    desc: "Enables skilled members to build real-world solutions in a team-driven environment. We provide the resources and mentorship required to turn ideas into impactful prototypes.",
    focus: "Agile Development • Resource Allocation • Industry Prototypes"
  },
  {
    title: "Event Organization",
    tag: "Unit: Operations & Management",
    desc: "The logistics backbone of K-1000. This wing plans and executes hackathons, webinars, and speaker sessions, building leadership and communication excellence.",
    focus: "Hackathon Management • Speaker Relations • Global Webinars"
  },
  {
    title: "Internship and Placement",
    tag: "Unit: Career Bridge",
    desc: "Bridges the gap between campus and industry. We provide industry connections, resume reviews, and mock interview sessions to secure high-tier recruitment.",
    focus: "Corporate Relations • Resume Optimization • Mock Drills"
  },
  {
    title: "Higher Studies",
    tag: "Unit: Global Advancement",
    desc: "Guidance for students aiming for post-graduate excellence in India or abroad. We streamline SOP writing, scholarship applications, and entrance exam prep.",
    focus: "SOP/LOR Drafting • Scholarship Tracking • University Mapping"
  },
];

export default function BranchesPage() {
  const router = useRouter();

  // Reset scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center w-full bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      <SharedHeader />

      {/* ─── PERSISTENT CLOSE OVERLAY ─── */}
      <div className="fixed bottom-10 left-0 w-full flex justify-center z-[200] pointer-events-none px-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/")}
          className="pointer-events-auto group flex items-center gap-5 bg-black/80 backdrop-blur-2xl border border-white/20 px-10 py-4 rounded-full hover:border-white transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.9)]"
        >
          <X className="text-white group-hover:rotate-90 transition-all duration-300" size={20} />
          <span className={`${conthrax} text-[13px] md:text-[15px] tracking-[0.5em] uppercase text-white font-bold transition-all duration-300 group-hover:drop-shadow-[0_0_10px_white]`}>
            CLOSE
          </span>
        </motion.button>
      </div>

      {/* ─── HERO SECTION (Adjusted Top Padding) ─── */}
      <section className="w-full flex flex-col items-center px-0 md:px-6 pt-24 md:pt-32 lg:pt-40">
        <div className="relative w-[92%] md:w-full h-[40vh] md:aspect-[21/7] md:max-h-[500px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 bg-black">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={images[0]} 
            className="absolute inset-0 size-full object-cover brightness-[0.3]" 
            alt="KIIT Library" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${conthrax} text-3xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase`}
            >
              Our <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">Branches</span>
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              className="h-1 bg-cyan-500 mt-6 shadow-[0_0_10px_#00f7ff] md:w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* ─── INTRO DESCRIPTION ─── */}
      <section className="w-full max-w-4xl text-center px-6 py-12 md:py-16 space-y-4">
        <p className="text-sm md:text-lg text-white/50 leading-relaxed font-light tracking-wide mx-auto max-w-2xl">
          Explore the strategic divisions of <span className={`${conthrax} text-white text-[12px] md:text-base`}>K-1000</span>. Each wing is a specialized ecosystem designed to accelerate your growth across specific domains.
        </p>
      </section>

      {/* ─── BRANCHES GRID ─── */}
      <section className="w-full max-w-7xl px-6 md:px-10 py-6 md:py-12">
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -8 }}
              className="group relative p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-400/40 transition-all duration-300 flex flex-col h-full shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all" />
              
              <span className={`${orbitron} text-[9px] md:text-[10px] text-cyan-400/60 tracking-[0.2em] uppercase mb-4 block font-bold`}>
                {branch.tag}
              </span>
              
              <h3 className={`${conthrax} text-lg md:text-xl text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase`}>
                {branch.title}
              </h3>
              
              <p className="text-white/40 text-xs md:text-sm leading-relaxed mb-8 flex-grow font-light">
                {branch.desc}
              </p>

              <div className="pt-6 border-t border-white/5">
                <p className={`${orbitron} text-[8px] md:text-[9px] text-white/30 group-hover:text-white/60 tracking-widest uppercase font-semibold transition-colors`}>
                  {branch.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <footer className="w-full py-12 border-t border-white/5 flex justify-center opacity-20 mt-12 md:mt-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em]`}>
          ELITE . RESEARCH . INTELLIGENCE
        </p>
      </footer>
    </div>
  );
}