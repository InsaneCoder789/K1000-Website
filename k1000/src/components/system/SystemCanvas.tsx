"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import {
  ShieldCheck, Binary, Cpu, GraduationCap, Boxes, Zap,
  Activity, Menu, X, Cpu as CpuIcon, Layers
} from "lucide-react";

import { domains } from "../../data/domain";
import DomainHoloPanel from "../ui/DomainHoloPanel";

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
const conthrax = "font-['Conthrax',_sans-serif]";
const DIM_CYAN = "rgba(0, 247, 255, 0.4)"; 

const NAV_ITEMS: NavKey[] = ["home", "about", "benefits", "branches", "departments", "events", "apply", "contact"];

const LEFT_NODES = [
  { key: "internship", label: "Internship & Placement", y: 25, x: 34, icon: <ShieldCheck size={24} /> },
  { key: "projects", label: "Projects Wing",      y: 45, x: 30, icon: <Boxes size={24} /> },
  { key: "training", label: "Training Program", y: 65, x: 34, icon: <Cpu size={24} /> },
];

const RIGHT_NODES = [
  { key: "higher", label: "Higher Studies",     y: 25, x: 66, icon: <GraduationCap size={24} /> },
  { key: "research", label: "Research & Publication", y: 45, x: 68, icon: <Binary size={24} /> },
  { key: "events",   label: "Event Organisation", y: 65, x: 66, icon: <Zap size={24} /> },
];

function SharedHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const activePage = pathname?.split("/").pop() as NavKey | undefined;

  return (
    <>
      <div className={`fixed top-0 left-0 w-full px-6 md:px-12 py-6 md:py-8 flex md:grid md:grid-cols-[1fr_auto_1fr] items-center justify-between z-[110] ${conthrax} bg-black/20 backdrop-blur-sm md:bg-transparent`}>
        <div className="flex items-center gap-4">
          <img 
            src="/k1000-logo.png" 
            className="h-8 md:h-10 w-auto cursor-pointer drop-shadow-[0_0_15px_#00f7ff]" 
            alt="K-1000" 
            onClick={() => router.push("/")}
          />
          <div className="h-4 w-[1px] bg-cyan-500/30 hidden lg:block" />
          <span className="text-[8px] tracking-[0.5em] text-cyan-500/50 hidden lg:block uppercase">EST. 2025</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 bg-black/40 border border-white/5 p-1 rounded-full backdrop-blur-md">
          {NAV_ITEMS.map((key) => (
            <button 
              key={key} 
              onClick={() => router.push(ROUTES[key])} 
              className={`px-4 lg:px-5 py-2 text-[7px] lg:text-[8px] uppercase tracking-[0.2em] font-bold rounded-full transition-all
                ${activePage === key ? 'text-cyan-400 bg-cyan-500/10' : 'text-white/40 hover:text-cyan-400 hover:bg-white/5'}`}
            >
              {key}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4 md:gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[7px] text-cyan-500/40 tracking-widest leading-none mb-1">SYSTEM_UPLINK</p>
            <p className="text-[9px] text-cyan-400 uppercase leading-none font-bold">Healthy</p>
          </div>
          <img src="/kiit-logo.png" className="h-10 md:h-14 w-auto object-contain" alt="KIIT" />
          <button className="md:hidden text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-[105] bg-black/95 backdrop-blur-xl pt-24 px-8 flex flex-col gap-4 md:hidden ${conthrax}`}
          >
            {NAV_ITEMS.map((key) => (
              <button 
                key={key} 
                onClick={() => { router.push(ROUTES[key]); setIsOpen(false); }}
                className="text-left py-4 border-b border-white/5 text-sm tracking-[0.3em] uppercase text-white/70 hover:text-cyan-400"
              >
                {key}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function SystemCanvas() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeDomainKey, setActiveDomainKey] = useState<string | null>(null);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const moveX = useTransform(springX, [-500, 500], [-12, 12]);
  const moveY = useTransform(springY, [-500, 500], [-12, 12]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  const allNodes = [...LEFT_NODES, ...RIGHT_NODES];
  const activeNode = allNodes.find(n => n.key === activeDomainKey);
  const activeDomain = domains.find(d => d.key === activeDomainKey) ? { 
    ...domains.find(d => d.key === activeDomainKey)!, 
    icon: activeNode?.icon 
  } : null;

  return (
    <div className={`relative w-full h-screen bg-[#010103] text-[#00f7ff] overflow-hidden ${conthrax} select-none flex flex-col`}>
      
      {/* Background Elements */}
      <motion.div style={{ x: moveX, y: moveY, scale: 1.05 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff03_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff03_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010103_90%)]" />
      </motion.div>

      <SharedHeader />

      <AnimatePresence>
        {!activeDomainKey && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="flex flex-col flex-1 relative pt-24 md:pt-20 overflow-y-auto md:overflow-hidden custom-scrollbar"
          >
            
            {/* SVG Lines - Hidden on Mobile */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
              {allNodes.map((node) => (
                <g key={node.key}>
                  <motion.line
                    x1="50" y1="50" x2={node.x} y2={node.y}
                    stroke={hoveredNode === node.key ? "#ffffff" : DIM_CYAN} 
                    strokeWidth={hoveredNode === node.key ? "0.4" : "0.25"}
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: hoveredNode === node.key ? 1 : 0.4 }}
                    transition={{ duration: 0.3 }}
                  />
                </g>
              ))}
            </svg>

            {/* Central Core */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center relative py-12 md:flex-1 md:py-0">
              <motion.div
                onMouseEnter={() => setIsCoreHovered(true)}
                onMouseLeave={() => setIsCoreHovered(false)}
                className={`relative w-[240px] h-[320px] md:w-[320px] md:h-[440px] bg-[#020205] rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden flex flex-col transition-all duration-700
                  ${isCoreHovered ? 'border-[#00f7ff] shadow-[0_0_80px_rgba(0,247,255,0.15)]' : ''}`}
              >
                <div className="flex justify-between items-center px-6 md:px-8 py-4 border-b border-white/5 bg-white/[0.02]">
                  <Activity size={12} className="text-[#00f7ff] animate-pulse" />
                  <span className="text-[7px] tracking-[0.6em] text-white/30 font-black">CORE_UNIT_V26</span>
                </div>
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-cyan-500/5 blur-[80px] rounded-full" />
                  <img src="/k1000-small.png" className={`w-32 md:w-44 z-10 transition-all duration-1000 ${isCoreHovered ? 'brightness-125 scale-105' : 'brightness-75'}`} alt="Core" />
                </div>
              </motion.div>
              
              <div className="mt-8 md:mt-16 text-[9px] md:text-[11px] tracking-[0.8em] md:tracking-[1.2em] text-[#00f7ff] font-black uppercase text-center drop-shadow-[0_0_8px_rgba(0,247,255,0.4)] px-4">
                Train • Transform • Transcend
              </div>
            </div>

            {/* DOMAIN NODES - Responsive Grid on Mobile, Absolute on Desktop */}
            <div className="relative md:absolute md:inset-0 px-6 pb-20 md:p-0 md:pointer-events-none">
              <div className="flex flex-col gap-4 md:block">
                {allNodes.map((node) => (
                  <motion.button
                    key={node.key}
                    onMouseEnter={() => setHoveredNode(node.key)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => setActiveDomainKey(node.key)}
                    className={`
                      relative flex items-center w-full md:w-auto md:absolute md:pointer-events-auto md:-translate-y-1/2
                      ${LEFT_NODES.includes(node) ? "md:flex-row md:-translate-x-full" : "md:flex-row-reverse"}
                    `}
                    style={{ 
                      top: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${node.y}%` : 'auto', 
                      left: typeof window !== 'undefined' && window.innerWidth >= 768 ? `${node.x}%` : 'auto' 
                    }}
                  >
                    {/* Visual Connectors (Desktop Only) */}
                    <div className={`hidden md:block w-2 h-10 border-y border-white/10 ${LEFT_NODES.includes(node) ? 'border-l' : 'border-r'}`} />
                    
                    {/* Domain Box */}
                    <div className={`
                      relative flex-1 md:flex-none px-6 md:px-8 py-4 md:min-w-[320px] transition-all duration-300 backdrop-blur-xl border
                      ${hoveredNode === node.key 
                        ? 'bg-white text-black md:scale-105 border-white shadow-[0_0_30px_rgba(255,255,255,0.4)]' 
                        : 'bg-black/80 text-white border-cyan-500/30 shadow-[0_0:15px_rgba(0,247,255,0.1)]'}
                    `}>
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className={`p-2 rounded-sm border transition-colors 
                          ${hoveredNode === node.key ? 'border-black/30' : 'border-cyan-400/20'}`}>
                          {node.icon}
                        </div>
                        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase leading-tight text-left">
                          {node.label}
                        </span>
                      </div>

                      {/* Corner Accents */}
                      <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors 
                        ${hoveredNode === node.key ? 'border-black' : 'border-cyan-400'}`} />
                      <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors 
                        ${hoveredNode === node.key ? 'border-black' : 'border-cyan-400'}`} />
                    </div>

                    {/* Node End Connectors (Desktop Only) */}
                    <div className={`hidden md:block w-10 h-[1.5px] transition-all duration-300 
                      ${hoveredNode === node.key ? 'bg-white shadow-[0_0_15px_#fff]' : 'bg-cyan-500/40'}`} />
                    <div className={`hidden md:block w-3.5 h-3.5 rotate-45 border transition-all duration-300 
                      ${hoveredNode === node.key ? 'bg-white border-white shadow-[0_0_15px_#fff]' : 'bg-[#010103] border-cyan-400/60'}`} />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer - Optimized for Mobile */}
            <div className="mt-auto px-6 md:px-12 py-6 md:py-10 flex flex-col md:grid md:grid-cols-3 items-center md:items-end gap-6 border-t border-white/5 bg-gradient-to-t from-cyan-500/5 to-transparent">
              <div className="flex gap-6 md:gap-8 w-full md:w-auto justify-between md:justify-start">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f7ff] animate-ping" />
                    <span className="text-[9px] tracking-[0.3em] text-[#00f7ff] font-bold uppercase">LINK: STABLE</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-40">
                    <CpuIcon size={14} className="text-[#00f7ff]" />
                    <span className="text-[8px] tracking-[0.2em] text-white uppercase">PROC_LOAD: 12.4%</span>
                  </div>
                </div>
                <div className="hidden sm:block w-[1px] h-10 bg-white/10" />
                <div className="hidden sm:flex flex-col gap-2 opacity-40">
                   <div className="flex items-center gap-3"><Layers size={14} className="text-[#00f7ff]" /><span className="text-[8px] tracking-[0.2em] text-white uppercase">SYNC: 100%</span></div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center opacity-20 order-3 md:order-2">
                <div className="text-[7px] tracking-[1em] font-mono text-[#00f7ff]">VERS2026</div>
              </div>

              <div className="flex flex-col items-center md:items-end gap-1 order-2 md:order-3">
                <span className="text-[8px] tracking-[0.4em] text-white/30 font-black uppercase">TIMESTAMP</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl md:text-2xl font-mono font-black text-[#00f7ff]">
                    {currentTime.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeDomain && <DomainHoloPanel domain={activeDomain as any} onClose={() => setActiveDomainKey(null)} />}
      </AnimatePresence>
    </div>
  );
}