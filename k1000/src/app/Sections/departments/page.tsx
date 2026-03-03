"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import {
  FaLaptopCode,
  FaUniversity,
  FaMicroscope,
  FaHeartbeat,
  FaGavel,
  FaDumbbell,
} from "react-icons/fa";
import SharedHeader from "../../../components/ui/SharedHeader";

const conthrax = "font-['Conthrax',_sans-serif]";
const orbitron = "font-['Orbitron',_sans-serif]";

const categories = [
  {
    title: "Engineering & Technology",
    id: "DEPT-ENG-01",
    icon: <FaLaptopCode />,
    schools: [
      "School of Computer Applications",
      "School of Computer Engineering",
      "School of Civil Engineering",
      "School of Electronics Engineering",
      "School of Mechanical Engineering",
      "School of Electrical Engineering",
      "School of Chemical Engineering",
    ],
  },
  {
    title: "Sciences & Applied Sciences",
    id: "DEPT-SCI-02",
    icon: <FaMicroscope />,
    schools: [
      "School of Biotechnology",
      "School of Applied Sciences",
      "School of Architecture & Planning",
    ],
  },
  {
    title: "Management & Social Sciences",
    id: "DEPT-MGMT-03",
    icon: <FaUniversity />,
    schools: [
      "School of Management",
      "School of Rural Management",
      "School of Economics & Commerce",
      "Department of Psychology",
      "Department of Sociology",
      "Department of Library and Info Science",
      "Department of Humanities (English)",
      "Department of Language & Literature",
    ],
  },
  {
    title: "Medical & Health Sciences",
    id: "DEPT-MED-04",
    icon: <FaHeartbeat />,
    schools: [
      "School of Medical Sciences",
      "School of Dental Sciences",
      "School of Nursing Sciences",
      "School of Public Health",
      "School of Pharmacy",
      "School of Physiotherapy",
      "School of Yoga & Naturopathy",
    ],
  },
  {
    title: "Law & Public Policy",
    id: "DEPT-LAW-05",
    icon: <FaGavel />,
    schools: ["School of Law", "School of Public Policy"],
  },
  {
    title: "Sports & Tourism",
    id: "DEPT-SPR-06",
    icon: <FaDumbbell />,
    schools: [
      "School of Sports and Yogic Sciences",
      "School of Hospitality and Tourism",
    ],
  },
];

export default function DepartmentsPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center w-full bg-black text-white selection:bg-cyan-500/30 overflow-x-hidden relative">
      
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
        <div className="relative w-[92%] md:w-full h-[35vh] md:aspect-[21/7] md:max-h-[500px] md:rounded-[40px] overflow-hidden border border-cyan-500/20 bg-black">
          <img 
            src="https://cdn.prod.website-files.com/67aa2520eb413205a7dac909/67aa3147b53442d24541b355_KIIT-University-Bhubaneswar.jpeg" 
            className="absolute inset-0 size-full object-cover brightness-[0.3]" 
            alt="KIIT Departments" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${conthrax} text-3xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase leading-tight`}
            >
              KIIT <span className="text-cyan-400 drop-shadow-[0_0_15px_#00f7ff]">DEPARTMENTS</span>
            </motion.h1>
            <p className={`${orbitron} text-cyan-400/50 mt-4 tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-sm uppercase`}>
              Academic Infrastructure Protocol
            </p>
          </div>
        </div>
      </section>

      {/* ─── CATEGORIES GRID ─── */}
      <section className="w-full max-w-7xl px-6 md:px-10 py-12 md:py-20 space-y-16 md:space-y-24">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative border-l border-cyan-500/20 pl-6 md:pl-16"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-10 md:mb-12">
              <div className="w-fit text-3xl md:text-4xl text-cyan-400 bg-cyan-500/5 p-4 rounded-2xl border border-cyan-500/10">
                {category.icon}
              </div>
              <div className="space-y-1">
                <span className={`${orbitron} text-[10px] md:text-[12px] text-cyan-500/40 tracking-[0.4em] uppercase font-bold`}>
                  {category.id}
                </span>
                <h3 className={`${conthrax} text-xl md:text-4xl text-white tracking-wide uppercase`}>
                  {category.title}
                </h3>
              </div>
            </div>

            {/* Sub-grid of Schools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {category.schools.map((school, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8, backgroundColor: "rgba(0, 247, 255, 0.05)" }}
                  className="p-4 md:p-5 rounded-[20px] bg-white/[0.02] border border-white/5 flex items-center gap-4 group cursor-default transition-all duration-300"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_#00f7ff] transition-all" />
                  <span className={`${orbitron} text-[11px] md:text-[13px] text-white/50 group-hover:text-white transition-colors font-medium tracking-wide`}>
                    {school}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Gradient Line Glow */}
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-cyan-400/50 via-cyan-400/10 to-transparent" />
          </motion.div>
        ))}
      </section>

      {/* ─── FOOTER BRANDING ─── */}
      <footer className="w-full py-16 border-t border-white/5 flex justify-center opacity-20">
        <p className={`${conthrax} text-[8px] md:text-[10px] tracking-[1.5em] md:tracking-[2em] uppercase`}>
          ACADEMIC EXCELLENCE . K-1000 VERIFIED
        </p>
      </footer>
    </div>
  );
}