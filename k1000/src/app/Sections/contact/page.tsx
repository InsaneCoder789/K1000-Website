"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin, Phone, Mail, Cpu, Globe, Terminal, Shield, Zap, Activity, X } from "lucide-react";
import SharedHeader from "../../../components/ui/SharedHeader";

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

const Contact = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-screen bg-black flex items-center justify-center p-4 md:p-10 font-sans overflow-hidden selection:bg-cyan-500/30">
      
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

      {/* ─── CYBERNETIC BACKGROUND ─── */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#00f7ff08_0%,_transparent_70%)] pointer-events-none" />
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="w-full h-[2px] bg-cyan-500/20 absolute top-0 animate-[scan_8s_linear_infinite]" />
      </div>

      <style jsx global>{`
        @keyframes scan {
          from { top: -10%; }
          to { top: 110%; }
        }
      `}</style>

      {/* ─── MAIN TACTICAL INTERFACE ─── */}
      <motion.div
        className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center mt-12 md:mt-24"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">
          
          {/* PRIMARY PROTOCOL PANEL */}
          <div className="lg:col-span-8 group">
            <div className="h-full bg-[#050505] border border-white/5 rounded-[32px] p-8 md:p-14 relative overflow-hidden flex flex-col justify-between transition-all duration-500 group-hover:border-cyan-500/20 shadow-2xl">
              
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none rotate-12 group-hover:opacity-[0.07] transition-opacity">
                <Globe size={300} className="text-cyan-400" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-cyan-500/40" />
                  <span className={`${orbitron} text-cyan-500 text-[10px] tracking-[0.5em] uppercase font-bold`}>Initiation Protocol</span>
                </div>
                
                <h2 className={`${conthrax} text-2xl md:text-5xl text-white mb-6 uppercase tracking-tighter`}>
                  Contact <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,247,255,0.3)]">Registry</span>
                </h2>
                
                <p className="text-white/40 text-base md:text-xl font-light leading-relaxed mb-10">
                  K-1000 is KIIT University's flagship innovation collective.
                  Reach out for collaborations, research, and technical opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield size={18} className="text-cyan-400" />
                      <h4 className={`${orbitron} text-[11px] text-white/90 tracking-widest uppercase font-bold`}>Infrastructure</h4>
                    </div>
                    <p className="text-white/30 text-xs leading-relaxed font-light">
                      Operating at the intersection of emerging tech and research, backed by high-performance computing labs.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Zap size={18} className="text-cyan-400" />
                      <h4 className={`${orbitron} text-[11px] text-white/90 tracking-widest uppercase font-bold`}>Response Speed</h4>
                    </div>
                    <p className="text-white/30 text-xs leading-relaxed font-light">
                      Automated uplink sorting ensures responses within 24 hours. Our team is committed to timely communication.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Strip */}
              <div className="mt-16 flex flex-wrap gap-4 border-t border-white/5 pt-8">
                {[
                  { label: "IP_ROUTE", val: "172.16.254.1" },
                  { label: "ENCRYPT", val: "AES-256-GCM" },
                  { label: "LATENCY", val: "14ms" },
                  { label: "UPLINK", val: "ACTIVE" }
                ].map((item, i) => (
                  <div key={i} className="px-4 py-2 bg-white/[0.03] rounded-xl border border-white/5">
                    <span className={`${orbitron} text-[8px] text-white/20 block uppercase font-bold`}>{item.label}</span>
                    <span className={`${orbitron} text-[10px] text-cyan-400 font-bold`}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACT VECTOR PANEL */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex-1 bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-cyan-500/20 rounded-[32px] p-8 md:p-10 shadow-[0_0_80px_rgba(0,247,255,0.05)] relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 -rotate-12 group-hover:rotate-0">
                <Cpu size={280} className="text-cyan-400" />
              </div>

              <div className="space-y-12 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <MapPin size={20} />
                    </div>
                    <span className={`${orbitron} text-[10px] text-cyan-500/60 tracking-[0.3em] uppercase font-bold`}>Location</span>
                  </div>
                  <p className="text-white text-lg font-light pl-2">KIIT University, <br /><span className="text-white/40">Bhubaneswar, India</span></p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Phone size={20} />
                    </div>
                    <span className={`${orbitron} text-[10px] text-cyan-500/60 tracking-[0.3em] uppercase font-bold`}>Faculty In-Charge</span>
                  </div>
                  <div className="pl-2">
                    <p className="text-white text-lg font-light mb-1">Dr. Ajit Kumar Pasayat</p>
                    <p className={`${orbitron} text-cyan-400/80 text-sm tracking-widest`}>+91 70085 88187</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Mail size={20} />
                    </div>
                    <span className={`${orbitron} text-[10px] text-cyan-500/60 tracking-[0.3em] uppercase font-bold`}>Digital Mail</span>
                  </div>
                  <p className={`${orbitron} text-cyan-300 text-xs md:text-sm tracking-widest pl-2 hover:text-white transition-colors cursor-pointer font-bold`}>
                    k.1000@kiit.ac.in
                  </p>
                </div>
              </div>
            </div>

            {/* LOWER STATUS HUD */}
            <div className="bg-[#080808] border border-white/5 rounded-[24px] p-6 flex flex-col justify-between overflow-hidden relative shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <span className={`${orbitron} text-[9px] text-white/30 uppercase tracking-widest font-bold`}>Signal Strength</span>
                <Activity size={14} className="text-cyan-500 animate-pulse" />
              </div>
              <div className="flex gap-1 h-2 w-full">
                {[80, 95, 70, 85, 90, 100, 60, 95].map((h, i) => (
                  <div key={i} className="flex-1 bg-cyan-500/10 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="absolute bottom-0 w-full bg-cyan-400/50" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER DECOR */}
        <div className="mt-12 flex justify-between items-center opacity-20 px-4 w-full">
          <div className={`${orbitron} text-[8px] tracking-[0.8em] text-white uppercase font-bold`}>
            © K-1000 Organisation
          </div>
          <div className="flex gap-4">
            <Terminal size={14} className="text-white" />
            <Cpu size={14} className="text-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;