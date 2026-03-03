"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Terminal, Zap, Activity, Cpu, Volume2 } from "lucide-react";

const conthrax = "font-['Conthrax',_sans-serif]";

const ApplicationForm = () => {
  const [mounted, setMounted] = useState(false);
  const GOOGLE_FORM_LINK = "https://forms.gle/irg7nzkhh3tWnpib8";
  const LINKEDIN_URL = "https://www.linkedin.com/company/k1000-kiit";
  const INSTAGRAM_URL = "https://www.instagram.com/k1000_kiit";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    // Fixed inset-0 and overflow-hidden ensures NO scroll on Desktop
    <div className="fixed inset-0 w-full h-screen overflow-hidden bg-black flex items-center justify-center p-4 md:p-10 font-sans">
      
      {/* ─── BACKGROUND AMBIANCE ─── */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[700px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-5xl"
      >
        <div className="relative bg-[#050505]/90 backdrop-blur-3xl border border-white/10 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:h-[600px]">
            
            {/* ─── INFO PANEL ─── */}
            <div className="lg:col-span-7 p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-10">
                <div className="flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                  <Activity size={12} className="text-cyan-400 animate-pulse" />
                  <span className={`${conthrax} text-[8px] text-cyan-400 tracking-[0.2em] uppercase`}>Signal Active</span>
                </div>
                <span className={`${conthrax} text-[8px] text-white/20 tracking-[0.4em] uppercase`}>K-1000</span>
              </div>

              <h2 className={`${conthrax} text-4xl md:text-6xl text-white mb-6 uppercase leading-[0.9] tracking-tighter`}>
                Premium <br />
                <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,247,255,0.4)]">Guild</span>
              </h2>

              <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-md mb-12">
                K1000 is KIIT University's flagship tech & innovation society. A high-performance ecosystem for technical pioneers and creative researchers.
              </p>

              <div className="flex items-center space-x-12">
                <div className="flex flex-col">
                  <span className={`${conthrax} text-[7px] text-cyan-500/40 uppercase tracking-widest mb-1`}>Identity</span>
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">DEFCON 1</span>
                </div>
                <div className="flex flex-col">
                  <span className={`${conthrax} text-[7px] text-cyan-500/40 uppercase tracking-widest mb-1`}>Priority</span>
                  <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">HIGH</span>
                </div>
              </div>
            </div>

            {/* ─── SOUND KNOB ACTION PANEL ─── */}
            <div className="lg:col-span-5 p-12 bg-black flex flex-col items-center justify-center space-y-12 relative overflow-hidden">
              
              {/* Tactical Background for the Knob */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/10 rounded-full" />
              </div>

              <div className="relative group cursor-pointer">
                {/* Visual Audio Scale (Knob Markers) */}
                <div className="absolute inset-0 -m-8 flex items-center justify-center">
                   {[...Array(12)].map((_, i) => (
                     <div 
                      key={i} 
                      className="absolute w-1 h-3 bg-white/10 rounded-full"
                      style={{ 
                        transform: `rotate(${i * 30}deg) translateY(-85px)`,
                        backgroundColor: i < 8 ? '#22d3ee' : '' // Light up first 8 segments
                      }}
                     />
                   ))}
                </div>

                {/* The Sound Knob Button */}
                <motion.a
                  href={GOOGLE_FORM_LINK}
                  target="_blank"
                  whileHover={{ rotate: 15 }} 
                  whileTap={{ scale: 0.92, rotate: 30 }}
                  className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-[#111] to-[#000] border-[6px] border-[#1a1a1a] shadow-[15px_15px_30px_rgba(0,0,0,0.8),-5px_-5px_15px_rgba(255,255,255,0.02),0_0_30px_rgba(0,247,255,0.1)] flex flex-col items-center justify-center transition-all duration-300 group-hover:border-cyan-500/30"
                >
                  {/* Knob Indicator Dot */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  
                  {/* Inner Content */}
                  <Volume2 size={32} className="text-white/20 group-hover:text-cyan-400 mb-2 transition-colors" />
                  <span className={`${conthrax} text-[10px] text-white/40 tracking-[0.2em] uppercase group-hover:text-white transition-colors`}>Connect</span>
                  <span className={`${conthrax} text-[14px] text-white uppercase font-bold tracking-widest`}>Apply</span>
                </motion.a>
              </div>

              <div className="flex flex-col items-center space-y-6 w-full relative z-20">
                <div className="flex gap-4">
                  <a 
                    href={LINKEDIN_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer"
                  >
                    <FaInstagram size={18} />
                  </a>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/50 transition-all cursor-pointer">
                    <FaWhatsapp size={18} />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 opacity-30">
                  <Cpu size={12} className="text-cyan-400" />
                  <span className={`${conthrax} text-[6px] text-white uppercase tracking-[0.5em]`}>KIIT University // Bhubaneswar</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* FOOTER DECOR */}
      <div className="absolute bottom-10 flex justify-between items-center opacity-20 px-10 w-full max-w-7xl">
        <div className={`${conthrax} text-[8px] tracking-[0.8em] text-white uppercase`}>
          © K-1000 Collective // All Rights Reserved
        </div>
        <div className="flex gap-4">
          <Terminal size={14} className="text-white" />
          <Zap size={14} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;