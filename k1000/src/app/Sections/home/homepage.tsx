"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import data from "@/data/data.json"; 

import {
  Rocket, FileText, BookOpen, Star, Award, Globe, Lightbulb, Users, LucideIcon
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket, FileText, BookOpen, Star, Award, Globe, Lightbulb, Users,
};

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

export default function HomePage() {
  const { benefits } = data;
  
  const stats = [
    { number: "100+", label: "Projects" },
    { number: "50+", label: "Publications" },
    { number: "20+", label: "Patents Filed" },
    { number: "20+", label: "Collaborations" },
  ];

  // FIX: Optimized variants for performance
  // Removed 'y' offset for desktop or reduced it to prevent heavy layout recalculations
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className="flex flex-col items-center w-full bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* ─── SECTION 1: HERO ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Added margin so it triggers earlier/smoother
        variants={sectionVariants}
        className="w-full flex flex-col items-center px-0 md:px-6 pt-0 md:pt-10 will-change-[opacity,transform]"
      >
        <div className="relative w-full min-h-[85vh] md:min-h-0 md:aspect-[21/9] md:max-h-[700px] md:rounded-[40px] overflow-hidden border-b md:border border-cyan-500/20 bg-black">
          <img
            src="/hero/hero-2.jpg"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.35] md:brightness-50"
            alt="Hero Background"
            loading="eager" // Load hero immediately
          />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 w-full h-full min-h-[85vh] md:min-h-0">
            <p className={`${orbitron} text-cyan-400 tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] mb-4 md:mb-6 uppercase`}>
              KIIT Elite's R&D - Engineering Program
            </p>
            
            <h1 className={`${conthrax} text-3xl sm:text-4xl md:text-7xl tracking-widest text-white mb-6 leading-tight`}>
              JOIN <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
            </h1>

            <p className="text-white/70 max-w-xl text-xs md:text-lg leading-relaxed mb-10 font-light tracking-wide px-4">
              Innovation • Research • Real-world Engineering <br className="hidden md:block"/>
              The official R&D Guild of KIIT University.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-10 md:px-0">
              <Link href="/Sections/apply" className={`${conthrax} px-10 py-4 bg-cyan-500 text-black uppercase text-[10px] tracking-widest rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,247,255,0.4)] text-center`}>
                Apply Now
              </Link>
              <Link href="/Sections/about" className={`${conthrax} px-10 py-4 border border-cyan-500/50 text-cyan-400 uppercase text-[10px] tracking-widest rounded-full hover:bg-cyan-500/10 transition-all text-center`}>
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 mt-16 md:mt-24 w-full max-w-7xl px-6 md:px-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="flex flex-col items-center space-y-2 group will-change-transform"
            >
              <span className={`${orbitron} text-2xl md:text-4xl text-white group-hover:text-cyan-400 transition-colors`}>
                {stat.number}
              </span>
              <span className={`${conthrax} text-[7px] md:text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold text-center`}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── SECTION 2: ABOUT ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
        className="w-full px-6 md:px-20 py-24 md:py-40 flex flex-col items-center border-t border-white/5 will-change-[opacity]"
      >
        <div className="w-full max-w-[1400px] grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 md:order-1 overflow-hidden rounded-xl md:rounded-[32px]">
            <img
              src="/hero/hero-1.jpg"
              className="border border-cyan-500/10 brightness-75 w-full shadow-2xl"
              alt="About K-1000"
              loading="lazy"
            />
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <h2 className={`${conthrax} text-2xl md:text-5xl text-white uppercase leading-tight tracking-wider`}>
              ABOUT <span className="text-cyan-400">K-1000</span>
            </h2>
            <p className="text-sm md:text-lg text-white/50 leading-relaxed font-light tracking-wide">
              K-1000 is KIIT University’s official Research & Development guild—dedicated to shaping future engineers through technical mastery and real-world impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {["Hands-on projects", "Research & Patents", "Industry Pipelines", "Technical Mastery"].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                  <span className={`${conthrax} text-[8px] md:text-[10px] text-white/40 uppercase tracking-widest`}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 3: BENEFITS ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full max-w-7xl pb-32 px-6 md:px-10 flex flex-col items-center will-change-transform"
      >
        <h2 className={`${conthrax} text-2xl md:text-4xl text-center tracking-[0.2em] text-cyan-400 mb-16 md:mb-24 uppercase`}>
          Benefits & Perks
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {benefits.map((b: any, i: number) => {
            const Icon = iconMap[b.icon] || Lightbulb;
            return (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="p-8 md:p-10 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors group cursor-default"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center mb-8">
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className={`${conthrax} text-sm md:text-xl text-white mb-4 tracking-wider`}>{b.title}</h3>
                <p className="text-xs md:text-sm text-white/40 leading-relaxed font-light">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <footer className="w-full py-10 border-t border-white/5 flex justify-center opacity-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em]`}>Train . Transform . Transcend</p>
      </footer>
    </div>
  );
}