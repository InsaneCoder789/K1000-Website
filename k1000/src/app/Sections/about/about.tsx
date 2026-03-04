"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { leadership } from "@/data/leadership";
import SharedHeader from "../../../components/ui/SharedHeader";

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

export default function AboutPage() {
  const router = useRouter();
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedMember]);

  const board = [
    {
      id: "vc-1",
      name: "Prof. Dr. Saranjit Singh",
      position: "Vice Chancellor",
      image: "/about/member-1.jpg",
      description: "Prof. (Dr.) Saranjit Singh received his Ph.D. in Production Engineering from BIT Mesra, M.Tech. from IIT Varanasi (formerly IT-BHU), and B.E. in Mechanical Engineering from Savitribai Phule Pune University. With extensive teaching and research experience, his interests span material processing technologies, metal forming of advanced materials like sintered and foam composites, cleaner manufacturing, DFX methodologies, and quality management.",
    },
    {
      id: "reg-2",
      name: "Prof. Dr. Jnyana Ranjan Mohanty",
      position: "Registrar",
      image: "/about/member-2.jpg",
      description: "With over 28 years of rich experience in research, academic development, and innovation, Prof. Mohanty serves as the Registrar of KIIT University. He has been instrumental in shaping the university's administrative framework and innovation ecosystem.",
    },
    {
      id: "fi-3",
      name: "Dr. Ajit Kumar Pasayat",
      position: "Faculty Incharge",
      image: "/about/member-3.jpg",
      description: "Holding a Ph.D. and M.Tech. from IIT Kharagpur, Dr. Pasayat is a specialist in AI/ML, Data Analytics, and Cognitive Systems. As the Faculty Incharge, he bridges the gap between theoretical research and industrial application.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      <SharedHeader />

      {/* ─── PERSISTENT CLOSE BUTTON (Performance Optimized) ─── */}
      <div className="fixed bottom-6 md:bottom-10 left-0 w-full flex justify-center z-[200] pointer-events-none px-4">
        <button
          onClick={() => router.push("/")}
          className="pointer-events-auto group flex items-center gap-4 bg-black/90 backdrop-blur-xl border border-white/20 px-8 py-3 md:px-10 md:py-4 rounded-full hover:border-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl"
        >
          <X className="text-white group-hover:rotate-90 transition-all duration-300" size={18} />
          <span className={`${conthrax} text-[11px] md:text-[15px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-white font-bold`}>
            CLOSE
          </span>
        </button>
      </div>

      {/* ─── SECTION 1: HERO (Adjusted Top Padding to match Branches reference) ─── */}
      <section className="w-full flex flex-col items-center px-0 md:px-6 pt-24 md:pt-32 lg:pt-40 opacity-0 animate-fade-in [animation-fill-mode:forwards]">
        <div className="relative w-[92%] md:w-full h-[30vh] md:h-[40vh] md:aspect-[21/7] md:max-h-[500px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 bg-black">
          <img 
            src="/about/KIIT.jpg" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" 
            alt="KIIT Campus" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
            <h1 className={`${conthrax} text-3xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase`}>
              ABOUT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
            </h1>
            <p className={`${orbitron} text-cyan-400/50 mt-4 tracking-[0.2em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase`}>
              Vision • Innovation • Excellence
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: FOUNDER ─── */}
      <section className="w-full px-6 md:px-20 py-16 md:py-24 flex flex-col items-center border-t border-white/5">
        <div className="w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] border border-cyan-500/10">
            <img
              src="/about/Founder.png"
              className="w-full aspect-[4/5] object-cover object-[center_15%] brightness-90 shadow-2xl"
              alt="Founder"
            />
          </div>
          <div className="space-y-6">
            <h2 className={`${conthrax} text-2xl md:text-5xl text-white uppercase leading-tight tracking-wider`}>
              OUR <span className="text-cyan-400">FOUNDER</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 shadow-[0_0_10px_#00f7ff]" />
            <span className={`${orbitron} text-cyan-400 block text-sm md:text-lg tracking-widest uppercase`}>
              Prof. Dr. Achyuta Samanta
            </span>
            <p className="text-sm md:text-lg text-white/50 leading-relaxed font-light tracking-wide text-justify">
              Prof. Dr. Achyuta Samanta's life story reads like a powerful saga of grit, determination, and social responsibility. Born and brought up in poverty in a remote village in Odisha, he was dealt a cruel blow at the tender age of four when he lost his father, after which his life became a struggle for food and education for 15 long years. However, he persevered, and at the age of 22, joined teaching. At 25, he embarked on a journey that would change his own life, and the lives of thousands of people. With just Rs 5000 in his pocket, he started KIIT (Kalinga Institute of Industrial Technology) and KISS (Kalinga Institute of Social Sciences) in two rented houses.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: BOARD MEMBERS ─── */}
      <section className="w-full max-w-7xl px-6 md:px-10 py-16 md:py-24 flex flex-col items-center">
        <h2 className={`${conthrax} text-2xl md:text-4xl text-center tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 mb-12 md:mb-16 uppercase`}>
          Board Members
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {board.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMember(m)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-white/5 bg-[#0a0a0a] group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                <img 
                  src={m.image} 
                  className="size-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-110" 
                  alt={m.name}
                />
              </div>
              <h3 className={`${conthrax} text-sm md:text-lg text-white mt-5 text-center tracking-wide group-hover:text-cyan-400 transition-colors uppercase leading-tight font-bold`}>
                {m.name}
              </h3>
              <p className={`${orbitron} text-cyan-400 text-[10px] md:text-[13px] uppercase mt-2 tracking-[0.2em] font-semibold text-center`}>
                {m.position}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: CORE TEAM (Lag-Free Implementation) ─── */}
      <section className="w-full max-w-[1400px] px-6 py-16 md:py-24 border-t border-white/5">
        <h2 className={`${conthrax} text-center text-4xl md:text-7xl mb-16 md:mb-24 text-white uppercase tracking-tighter`}>
          CORE <span className="text-cyan-400">TEAM</span>
        </h2>

        {leadership.hierarchy.map((grp, gi) => (
          <div key={gi} className="w-full flex flex-col items-center mb-20 md:mb-32">
            <h3 className={`${conthrax} text-sm md:text-xl mb-12 text-white/90 border-b border-cyan-500/20 pb-3 px-8 tracking-[0.2em] uppercase text-center`}>
              {grp.title}
            </h3>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${grp.title.toLowerCase().includes("executive") ? "lg:grid-cols-2 max-w-[800px]" : "lg:grid-cols-3 max-w-[1200px]"} gap-12 md:gap-16 w-full`}>
              {grp.members.map((m, mi) => (
                <div key={mi} className="flex flex-col items-center text-center group">
                  <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/5 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl bg-[#0a0a0a]">
                    <img 
                      src={m.image} 
                      className="size-full object-cover object-[center_20%] brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700 will-change-transform" 
                      alt={m.name} 
                    />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className={`${conthrax} text-sm md:text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors uppercase font-bold`}>{m.name}</h4>
                    <p className={`${orbitron} text-cyan-400 text-[9px] md:text-[12px] tracking-[0.15em] uppercase font-bold`}>
                      {m.position}
                    </p>
                    {m.branch && (
                        <p className={`${orbitron} text-white/30 text-[8px] md:text-[9px] uppercase tracking-widest`}>
                            {m.branch}
                        </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-4xl bg-[#050505] border border-cyan-500/30 rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <div className="w-full md:w-[45%] h-[280px] md:h-auto overflow-hidden">
                <img src={selectedMember.image} className="size-full object-cover object-[center_15%]" alt={selectedMember.name} />
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h3 className={`${conthrax} text-xl md:text-3xl text-white uppercase`}>{selectedMember.name}</h3>
                <p className={`${orbitron} text-cyan-400 text-sm mt-3 tracking-widest uppercase font-bold`}>{selectedMember.position}</p>
                <div className="h-px w-16 bg-cyan-500 my-6" />
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-light text-justify">
                  {selectedMember.description}
                </p>
                <button onClick={() => setSelectedMember(null)} className={`${conthrax} mt-8 text-[10px] text-cyan-400/50 uppercase tracking-widest hover:text-white transition-colors`}>
                  Close Profile
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="w-full py-16 border-t border-white/5 flex justify-center opacity-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em]`}>Train . Transform . Transcend</p>
      </footer>
    </div>
  );
}