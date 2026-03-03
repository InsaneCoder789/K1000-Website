"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Binary, Cpu, GraduationCap, Boxes, Zap,
  Fingerprint, BarChart3, ChevronRight, Activity, Menu, X
} from "lucide-react";

/* ─────────── DATA & EXTERNAL PANELS ─────────── */
import { domains } from "../../data/domain";
import GlobalHoloPanel from "../ui/GlobalHoloPanel";
import DomainHoloPanel from "../ui/DomainHoloPanel";

const conthrax = "font-['Conthrax',_sans-serif]";

const LEFT_NODES = [
  { key: "internship", label: "Internship & Placement", y: 30, x: 34, icon: <ShieldCheck size={26} /> },
  { key: "research", label: "Research & Publication", y: 50, x: 28, icon: <Binary size={26} /> },
  { key: "training", label: "Training Program", y: 70, x: 34, icon: <Cpu size={26} /> },
];

const RIGHT_NODES = [
  { key: "higher", label: "Higher Studies", y: 30, x: 66, icon: <GraduationCap size={26} /> },
  { key: "projects", label: "Projects Wing", y: 50, x: 72, icon: <Boxes size={26} /> },
  { key: "events", label: "Event Organisation", y: 70, x: 66, icon: <Zap size={26} /> },
];

const NAV_ITEMS = ["Home", "About", "Benefits", "Branches", "Departments", "Events", "Apply", "Contact"];

export default function SystemCanvas() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logs, setLogs] = useState<string[]>(["NEURAL_LINK_STABLE", "SYNCING_CORE..."]);
  const [typed, setTyped] = useState("");
  
  const text = "SYSTEM ONLINE • NEURAL LINK ESTABLISHED • PROTOCOL v26";

  const rawDomain = domains.find(d => d.key === activeDomainKey);
  const activeNode = [...LEFT_NODES, ...RIGHT_NODES].find(n => n.key === activeDomainKey);
  const activeDomain = rawDomain ? { ...rawDomain, icon: activeNode?.icon } : null;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i)); i++;
      if (i > text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const msgs = ["PACKET_RECV", "PULSE_NOMINAL", "LATENCY_0.02ms", "BIT_RATE_HIGH"];
      setLogs(prev => [msgs[Math.floor(Math.random() * msgs.length)], ...prev].slice(0, 4));
    }, 3000);
    return () => clearInterval(logInterval);
  }, []);

  return (
    <div className={`relative w-full h-screen bg-[#010103] text-[#00f7ff] overflow-x-hidden md:overflow-hidden ${conthrax} select-none`}>

      {/* 1. ATMOSPHERE & GRID */}
      <div className="fixed md:absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff0a_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff0a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010103_95%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      </div>

      <AnimatePresence>
        {!activeDomainKey && (
          <div className="flex flex-col min-h-screen">
            {/* 2. HEADER GRID - Desktop & Mobile */}
            <div className="sticky md:absolute top-0 md:top-10 left-0 w-full px-6 md:px-16 py-4 md:py-0 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center z-[110] bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <img src="/k1000-logo.png" className="h-10 md:h-12 w-auto brightness-200 drop-shadow-[0_0_15px_#00f7ff]" alt="K-1000" />
              </motion.div>

              {/* Mobile Toggle Only */}
              <div className="flex justify-end md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-cyan-400 p-2">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop Nav Only */}
              <motion.nav 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="hidden md:flex gap-5 px-10 py-4 rounded-full border border-[#00f7ff]/30 bg-black/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,247,255,0.15)]"
              >
                {NAV_ITEMS.map((nav) => {
                  const isActive = openPanel === nav.toLowerCase();
                  return (
                    <button 
                      key={nav} 
                      onClick={() => setOpenPanel(nav.toLowerCase())} 
                      className="relative text-[9px] uppercase tracking-[0.3em] font-black transition-all"
                    >
                      <span className={isActive ? "text-[#00f7ff] drop-shadow-[0_0_8px_#00f7ff]" : "text-white/60 hover:text-[#00f7ff]"}>
                        {nav}
                      </span>
                    </button>
                  );
                })}
              </motion.nav>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex justify-end">
                <img src="/kiit-logo.png" className="h-14 w-auto brightness-110 opacity-80" alt="KIIT" />
              </motion.div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div 
                  initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
                  className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-xl p-8 flex flex-col md:hidden"
                >
                  <div className="flex justify-between items-center mb-12">
                    <img src="/k1000-logo.png" className="h-8 w-auto" alt="Logo" />
                    <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
                  </div>
                  <div className="flex flex-col gap-6">
                    {NAV_ITEMS.map((nav) => (
                      <button 
                        key={nav} 
                        onClick={() => { setOpenPanel(nav.toLowerCase()); setIsMobileMenuOpen(false); }}
                        className="text-2xl uppercase tracking-tighter font-black text-left hover:text-white"
                      >
                        {nav}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 3. CENTER SYSTEM MODULE & SVG LINES (Desktop logic preserved) */}
            <div className="flex-1 flex flex-col items-center justify-center relative mt-12 md:mt-0">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden md:block absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                  <motion.line 
                    key={node.key} 
                    x1="50" y1="50" 
                    x2={node.x} y2={node.y} 
                    stroke="#00f7ff" 
                    strokeWidth="0.12" 
                    animate={{ opacity: hoveredNode === node.key ? 0.9 : 0.25 }} 
                  />
                ))}
              </svg>

              <div className="relative z-20 flex flex-col items-center">
                <button onMouseEnter={() => setIsCoreHovered(true)} onMouseLeave={() => setIsCoreHovered(false)} onClick={() => setOpenPanel("home")} className="relative group pointer-events-auto">
                  <div className={`w-[280px] md:w-[300px] h-[400px] md:h-[420px] bg-[#020205] border-[2px] rounded-[36px] transition-all duration-500 flex flex-col overflow-hidden ${isCoreHovered ? 'border-white shadow-[0_0_80px_rgba(255,255,255,0.2)] scale-[1.02]' : 'border-cyan-500/30'}`}>
                    <div className="h-9 border-b border-white/10 flex items-center px-6 justify-between text-cyan-400 shrink-0">
                      <Activity size={12} className="animate-pulse" />
                      <span className="text-[7px] tracking-[0.5em] font-black uppercase">Core Capsulate</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center relative">
                      <motion.div animate={{ opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-36 h-36 bg-cyan-500 blur-[80px] rounded-full" />
                      <img src="/k1000-small.png" className="w-32 md:w-36 h-auto brightness-150 relative z-10" />
                      <div className="mt-8 text-[10px] tracking-[0.7em] font-black text-cyan-500/60 uppercase">VERSION_2026</div>
                    </div>
                  </div>
                </button>
                <div className="mt-6 md:mt-10 text-[9px] md:text-[10px] tracking-[0.8em] md:tracking-[1.4em] uppercase font-black text-white/80 drop-shadow-[0_0_15px_white] text-center px-4">Train • Transform • Transcend</div>
              </div>
            </div>

            {/* 4. DOMAIN NODES - Desktop absolute vs Mobile Grid */}
            <div className="w-full px-6 py-12 md:p-0">
              {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                  <motion.button
                    key={node.key}
                    onMouseEnter={() => setHoveredNode(node.key)} onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setActiveDomainKey(node.key)}
                    style={{ 
                      // Apply original positioning ONLY on desktop
                      top: typeof window !== 'undefined' && window.innerWidth > 768 ? `${node.y}%` : 'auto', 
                      left: typeof window !== 'undefined' && window.innerWidth > 768 ? `${node.x}%` : 'auto' 
                    }}
                    className={`
                      flex items-center transition-all duration-300 mb-4 md:mb-0
                      md:absolute md:-translate-y-1/2 w-full md:w-auto
                      ${LEFT_NODES.includes(node) ? "md:-translate-x-full md:flex-row" : "md:flex-row-reverse"}
                    `}
                  >
                    <div className={`relative px-6 md:px-8 py-4 md:py-5 border-[2px] transition-all duration-500 w-full md:min-w-[280px] flex items-center gap-5 rounded-xl md:rounded-sm backdrop-blur-md
                      ${hoveredNode === node.key ? 'bg-white text-black border-white shadow-[0_0_30px_white]' : 'bg-black/80 border-cyan-500/20 text-cyan-400'}`}>
                      <div className="shrink-0">{node.icon}</div>
                      <span className="text-[10px] uppercase tracking-[0.3em] font-black">{node.label}</span>
                    </div>

                    {/* These decor elements only appear on desktop to keep the layout strand identical */}
                    <div className={`hidden md:block w-10 h-[2px] ${hoveredNode === node.key ? 'bg-white' : 'bg-cyan-500/20'}`} />
                    <div className="hidden md:flex w-4 h-4 rounded-full border border-cyan-500/40 items-center justify-center bg-[#010103]">
                      <div className={`w-2 h-2 rounded-full ${hoveredNode === node.key ? 'bg-white shadow-[0_0_10px_white]' : 'bg-cyan-500/20'}`} />
                    </div>
                  </motion.button>
              ))}
            </div>

            {/* 5. FLOATING TELEMETRY */}
            <div className="p-8 md:p-0">
              <div className="md:absolute md:bottom-16 md:left-16 mb-4 md:mb-0">
                 <span className="text-[10px] md:text-[11px] tracking-[0.4em] text-white/40 font-black">{typed}</span>
              </div>

              <div className="md:absolute md:bottom-16 md:right-16 text-right">
                <div className="text-[16px] md:text-[18px] font-mono text-cyan-400 font-black tracking-tighter opacity-60">
                  {new Date().toLocaleTimeString([], { hour12: false })}
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {openPanel && <GlobalHoloPanel key="holo-global" page={openPanel} onClose={() => setOpenPanel(null)} />}
        {activeDomain && <DomainHoloPanel domain={activeDomain as any} onClose={() => setActiveDomainKey(null)} />}
      </AnimatePresence>
    </div>
  );
}