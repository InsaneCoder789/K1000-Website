"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import SharedHeader from "../../../components/ui/SharedHeader";

const images = [
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg",
  "https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa32340b3a8697b5760399_KIIT-Campus-Front-Library-1200x416.jpg",
];

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

const benefits = [
  {
    title: "Early Research Exposure",
    desc: "Get involved in research from the first year, fostering an inquisitive mindset.",
    detail: "Phase 1: Fundamental Methodology & Logic"
  },
  {
    title: "Mentorship & Guidance",
    desc: "Work closely with experienced faculty mentors who guide your research journey.",
    detail: "Direct 1-on-1 Faculty-Student mapping"
  },
  {
    title: "Skill Development",
    desc: "Gain hands-on experience in research methodologies, data analysis, and problem-solving.",
    detail: "Technical Stack: AI/ML, Data Science, Core Eng."
  },
  {
    title: "Publication & Patents",
    desc: "Opportunity to publish research papers and file patents through university support.",
    detail: "IPR Support & Indexed Journal Drafting"
  },
  {
    title: "Networking & Collaborations",
    desc: "Connect with like-minded peers, researchers, and industry experts.",
    detail: "Access to Global Tech Forums & Alumnus Network"
  },
  {
    title: "International Exposure",
    desc: "Participate in research collaborations with top institutions worldwide.",
    detail: "Exchange Programs & Global Internships"
  },
  {
    title: "Competitive Training",
    desc: "Develop skills and knowledge through rigorous training in a growth-oriented setting.",
    detail: "Real-world Project Stress-Testing"
  },
  {
    title: "Seed Funding Access",
    desc: "Eligible projects receive initial capital to transform research into prototypes.",
    detail: "Incubation at KIIT-TBI (Technology Business Incubator)"
  },
  {
    title: "Placement Advantage",
    desc: "Research-backed profiles receive priority in high-end R&D corporate recruitment.",
    detail: "Tier-1 Tech Placements & R&D Roles"
  },
];

export default function BenefitsPage() {
  const router = useRouter();

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
          <img src={images[0]} className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" alt="KIIT Campus" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
            <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={`${conthrax} text-3xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase`}>
              JOIN <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
            </motion.h1>
            <p className={`${orbitron} text-cyan-400/50 mt-4 tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase`}>
              Train • Compete • Publish
            </p>
          </div>
        </div>
      </section>

      {/* ─── DESCRIPTION BLOCK ─── */}
      <section className="w-full max-w-4xl text-center px-6 py-12 md:py-16 space-y-4">
        <h2 className={`${conthrax} text-2xl md:text-4xl text-white uppercase tracking-tighter`}>
          The <span className="text-cyan-400">Ecosystem</span>
        </h2>
        <p className="text-sm md:text-lg text-white/50 leading-relaxed font-light tracking-wide mx-auto max-w-2xl">
          The K-1000 initiative is more than a program; it's a launchpad. By integrating technical rigor with research excellence, we prepare students for the highest tiers of global industry and academia.
        </p>
      </section>

      {/* ─── BENEFITS GRID ─── */}
      <section className="w-full max-w-7xl px-6 md:px-10 py-6 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-cyan-400/40 transition-all duration-300 group flex flex-col items-start relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-all" />
              <h3 className={`${conthrax} text-base md:text-lg text-white mb-3 tracking-wide group-hover:text-cyan-400 transition-colors uppercase`}>{benefit.title}</h3>
              <p className="text-white/40 text-xs md:text-sm leading-relaxed font-light mb-8">{benefit.desc}</p>
              <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <p className={`${orbitron} text-[9px] md:text-[10px] text-cyan-400/60 uppercase tracking-widest font-bold`}>{benefit.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CALL TO ACTION SECTION ─── */}
      <section className="w-full max-w-7xl px-6 py-12 md:py-20">
        <div className="relative h-[30vh] md:h-[40vh] rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 group">
          <img src={images[1]} alt="Research Development" className="absolute inset-0 size-full object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-[3s]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-8 bg-black/30 backdrop-blur-[2px]">
            <h2 className={`${conthrax} text-lg md:text-3xl text-white tracking-[0.2em] md:tracking-[0.4em] text-center uppercase`}>EMBARK ON THE <span className="text-cyan-400">MISSION</span></h2>
            <motion.a href="https://kiit.ac.in/research" target="_blank" rel="noopener noreferrer" className={`${conthrax} px-10 md:px-14 py-4 bg-transparent border border-cyan-400 text-cyan-400 uppercase text-[9px] md:text-[11px] tracking-[0.4em] rounded-full hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_30px_rgba(0,247,255,0.2)] text-center`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Access Portal</motion.a>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 border-t border-white/5 flex justify-center opacity-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em]`}>ELITE . RESEARCH . INTELLIGENCE</p>
      </footer>
    </div>
  );
}