"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

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

      {/* ─── SECTION 1: HERO (Adjusted Top Padding) ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full flex flex-col items-center px-0 md:px-6 pt-24 md:pt-32 lg:pt-40"
      >
        <div className="relative w-[92%] md:w-full h-[40vh] md:aspect-[21/7] md:max-h-[500px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 bg-black">
          <img src="/about/KIIT.jpg" className="absolute inset-0 w-full h-full object-cover brightness-[0.3]" alt="KIIT Campus" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
            <h1 className={`${conthrax} text-4xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase`}>
              ABOUT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">K-1000</span>
            </h1>
            <p className={`${orbitron} text-cyan-400/50 mt-4 tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm uppercase`}>
              Vision • Innovation • Excellence
            </p>
          </div>
        </div>
      </motion.section>

      {/* ─── SECTION 2: FOUNDER ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={sectionVariants}
        className="w-full px-6 md:px-20 py-12 md:py-20 flex flex-col items-center border-t border-white/5"
      >
        <div className="w-full max-w-[1400px] grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative overflow-hidden rounded-xl md:rounded-[32px] border border-cyan-500/10">
            <img src="/about/Founder.png" className="w-full aspect-[4/5] object-cover object-top brightness-90 shadow-2xl" alt="Founder" />
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
      </motion.section>

      {/* ─── SECTION 3: BOARD MEMBERS ─── */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="w-full max-w-7xl px-6 md:px-10 py-12 md:py-16 flex flex-col items-center"
      >
        <h2 className={`${conthrax} text-2xl md:text-4xl text-center tracking-[0.3em] text-cyan-400 mb-10 md:mb-14 uppercase`}>
          Board Members
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {board.map((m) => (
            <motion.div
              key={m.id}
              onClick={() => setSelectedMember(m)}
              whileHover={{ y: -8 }}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="w-full aspect-[4/5] rounded-[24px] overflow-hidden border border-white/5 bg-[#0a0a0a] group-hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
                <img src={m.image} className="size-full object-cover object-top transition-all duration-500 group-hover:scale-105" alt={m.name} />
              </div>
              <h3 className={`${conthrax} text-sm md:text-lg text-white mt-5 text-center tracking-wide group-hover:text-cyan-400 transition-colors uppercase leading-tight`}>
                {m.name}
              </h3>
              <p className={`${orbitron} text-cyan-400 text-[11px] md:text-[13px] uppercase mt-2 tracking-[0.2em] font-semibold text-center`}>
                {m.position}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── SECTION 4: CORE TEAM ─── */}
      <section className="w-full max-w-[1400px] px-6 py-12 md:py-20 border-t border-white/5">
        <h2 className={`${conthrax} text-center text-4xl md:text-7xl mb-12 md:mb-20 text-white uppercase tracking-tighter`}>
          CORE <span className="text-cyan-400">TEAM</span>
        </h2>

        {leadership.hierarchy.map((grp, gi) => (
          <div key={gi} className="w-full flex flex-col items-center mb-16 md:mb-24">
            <h3 className={`${conthrax} text-base md:text-xl mb-10 text-white/90 border-b border-cyan-500/20 pb-2 px-8 tracking-[0.2em] uppercase text-center`}>
              {grp.title}
            </h3>

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${grp.title.toLowerCase().includes("executive") ? "lg:grid-cols-2 max-w-[800px]" : "lg:grid-cols-3 max-w-[1200px]"} gap-10 w-full`}>
              {grp.members.map((m, mi) => (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  key={mi} 
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-[28px] md:rounded-[40px] overflow-hidden border border-white/5 group-hover:border-cyan-400 transition-all duration-500 shadow-2xl bg-[#0a0a0a]">
                    <img src={m.image} className="size-full object-cover object-top brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700" alt={m.name} />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h4 className={`${conthrax} text-sm md:text-lg text-white tracking-wide group-hover:text-cyan-400 transition-colors uppercase`}>{m.name}</h4>
                    <p className={`${orbitron} text-cyan-400 text-[10px] md:text-[12px] tracking-[0.15em] uppercase font-bold`}>
                      {m.position}
                    </p>
                    {m.branch && (
                        <p className={`${orbitron} text-white/30 text-[8px] md:text-[9px] uppercase tracking-widest`}>
                            {m.branch}
                        </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <footer className="w-full py-12 border-t border-white/5 flex justify-center opacity-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em]`}>TRAIN . TRANSFORM . TRANSCEND</p>
      </footer>
    </div>
  );
}