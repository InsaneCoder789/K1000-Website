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
const CYAN_COLOR = "#00f7ff";
// Adjusted to 0.4 opacity for a balanced persistent network look
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
  const activePage = pathname?.split("/").pop() as NavKey | undefined;

  return (
    <div className={`fixed top-0 left-0 w-full px-12 py-8 grid grid-cols-[1fr_auto_1fr] items-center z-[110] ${conthrax}`}>
      <div className="flex items-center gap-4 justify-self-start">
        <img 
          src="/k1000-logo.png" 
          className="h-10 w-auto cursor-pointer drop-shadow-[0_0_15px_#00f7ff]" 
          alt="K-1000" 
          onClick={() => router.push("/")}
        />
        <div className="h-4 w-[1px] bg-cyan-500/30 hidden md:block" />
        <span className="text-[8px] tracking-[0.5em] text-cyan-500/50 hidden md:block uppercase">EST. 2025</span>
      </div>

      <nav className="hidden md:flex gap-1 bg-black/40 border border-white/5 p-1 rounded-full backdrop-blur-md justify-self-center">
        {NAV_ITEMS.map((key) => (
          <button 
            key={key} 
            onClick={() => router.push(ROUTES[key])} 
            className={`px-5 py-2 text-[8px] uppercase tracking-[0.2em] font-bold rounded-full transition-all
              ${activePage === key ? 'text-cyan-400 bg-cyan-500/10' : 'text-white/40 hover:text-cyan-400 hover:bg-white/5'}`}
          >
            {key}
          </button>
        ))}
      </nav>

      <div className="flex items-center justify-end gap-6 justify-self-end">
        <div className="text-right hidden md:block">
          <p className="text-[8px] text-cyan-500/40 tracking-widest leading-none mb-1">SYSTEM_UPLINK</p>
          <p className="text-[10px] text-cyan-400 uppercase leading-none">Healthy</p>
        </div>
        <img src="/kiit-logo.png" className="h-14 w-auto object-contain" alt="KIIT" />
      </div>
    </div>
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

  const activeNode = [...LEFT_NODES, ...RIGHT_NODES].find(n => n.key === activeDomainKey);
  const activeDomain = domains.find(d => d.key === activeDomainKey) ? { 
    ...domains.find(d => d.key === activeDomainKey)!, 
    icon: activeNode?.icon 
  } : null;

  return (
    <div className={`relative w-full h-screen bg-[#010103] text-[#00f7ff] overflow-hidden ${conthrax} select-none flex flex-col`}>
      
      <motion.div style={{ x: moveX, y: moveY, scale: 1.05 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f7ff03_1px,transparent_1px),linear-gradient(to_bottom,#00f7ff03_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010103_90%)]" />
      </motion.div>

      <SharedHeader />

      <AnimatePresence>
        {!activeDomainKey && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1 relative pt-20">
            
            {/* SVG Lines - Persistent 0.4 Opacity */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
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

            <div className="flex-1 flex flex-col items-center justify-center relative">
              <motion.div
                onMouseEnter={() => setIsCoreHovered(true)}
                onMouseLeave={() => setIsCoreHovered(false)}
                className={`relative w-[320px] h-[440px] bg-[#020205] rounded-[40px] border border-white/10 overflow-hidden flex flex-col transition-all duration-700
                  ${isCoreHovered ? 'border-[#00f7ff] shadow-[0_0_80px_rgba(0,247,255,0.15)]' : ''}`}
              >
                <div className="flex justify-between items-center px-8 py-4 border-b border-white/5 bg-white/[0.02]">
                  <Activity size={12} className="text-[#00f7ff] animate-pulse" />
                  <span className="text-[7px] tracking-[0.6em] text-white/30 font-black">CORE_UNIT_V26</span>
                </div>
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="absolute w-40 h-40 bg-cyan-500/5 blur-[80px] rounded-full" />
                  <img src="/k1000-small.png" className={`w-44 z-10 transition-all duration-1000 ${isCoreHovered ? 'brightness-125 scale-105' : 'brightness-75'}`} />
                </div>
              </motion.div>
              
              <div className="mt-16 text-[11px] tracking-[1.2em] text-[#00f7ff] font-black uppercase text-center drop-shadow-[0_0_8px_rgba(0,247,255,0.4)]">
                Train • Transform • Transcend
              </div>
            </div>

            {/* DOMAIN NODES - Prominent Edges & Glowing Borders */}
            <div className="absolute inset-0 pointer-events-none">
              {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
                <motion.button
                  key={node.key}
                  onMouseEnter={() => setHoveredNode(node.key)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={() => setActiveDomainKey(node.key)}
                  style={{ top: `${node.y}%`, left: `${node.x}%` }}
                  className={`pointer-events-auto absolute -translate-y-1/2 flex items-center
                    ${LEFT_NODES.includes(node) ? "-translate-x-full flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-2 h-10 border-y border-white/10 ${LEFT_NODES.includes(node) ? 'border-l' : 'border-r'}`} />
                  
                  {/* Domain Box - Now with permanent glowing border */}
                  <div className={`relative px-8 py-4 min-w-[320px] transition-all duration-300 backdrop-blur-xl border
                    ${hoveredNode === node.key 
                      ? 'bg-white text-black scale-105 border-white shadow-[0_0_30px_rgba(255,255,255,0.4)]' 
                      : 'bg-black/80 text-white border-cyan-500/30 shadow-[0_0_15px_rgba(0,247,255,0.1)]'}`}>
                    
                    <div className="flex items-center gap-6">
                      <div className={`p-2 rounded-sm border transition-colors 
                        ${hoveredNode === node.key ? 'border-black/30' : 'border-cyan-400/20'}`}>
                        {node.icon}
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase leading-none">{node.label}</span>
                    </div>

                    {/* Corner Accent Detail */}
                    <div className={`absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors 
                      ${hoveredNode === node.key ? 'border-black' : 'border-cyan-400'}`} />
                    <div className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors 
                      ${hoveredNode === node.key ? 'border-black' : 'border-cyan-400'}`} />
                  </div>

                  {/* Connectors */}
                  <div className={`w-10 h-[1.5px] transition-all duration-300 
                    ${hoveredNode === node.key ? 'bg-white shadow-[0_0_15px_#fff]' : 'bg-cyan-500/40'}`} />
                  
                  <div className={`w-3.5 h-3.5 rotate-45 border transition-all duration-300 
                    ${hoveredNode === node.key ? 'bg-white border-white shadow-[0_0_15px_#fff]' : 'bg-[#010103] border-cyan-400/60'}`} />
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto px-12 py-10 grid grid-cols-3 items-end border-t border-white/5 bg-gradient-to-t from-cyan-500/5 to-transparent">
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f7ff] animate-ping" />
                    <span className="text-[9px] tracking-[0.3em] text-[#00f7ff] font-bold">LINK: STABLE</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-40">
                    <CpuIcon size={14} className="text-[#00f7ff]" />
                    <span className="text-[8px] tracking-[0.2em] text-white">LOAD: 12.4%</span>
                  </div>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex flex-col gap-2 opacity-40">
                   <div className="flex items-center gap-3"><Layers size={14} className="text-[#00f7ff]" /><span className="text-[8px] tracking-[0.2em] text-white">SYNC: 100%</span></div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center opacity-20">
                <div className="text-[7px] tracking-[1em] mb-2 font-mono text-[#00f7ff]">@VERS2026</div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <span className="text-[8px] tracking-[0.4em] text-white/30 font-black uppercase">TIMESTAMP</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-black text-[#00f7ff]">
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