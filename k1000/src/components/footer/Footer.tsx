"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link"; 
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa6";
import styles from "./Footer.module.scss";

const conthrax = "font-['Conthrax',_sans-serif]";

const Footer = () => {
  const pathname = usePathname();

  const quickLinks = [
    { title: "Home", path: "/Sections/home" },
    { title: "About Program", path: "/Sections/about" },
    { title: "Benefits", path: "/Sections/benefits" },
    { title: "Branches", path: "/Sections/branches" },
    { title: "Apply Now", path: "/Sections/apply" },
    { title: "Contact", path: "/Sections/contact" },
  ];

  const researchAreas = [
    { title: "Engineering & Technology", href: "/Sections/departments" },
    { title: "Sciences & Applied Sciences", href: "/Sections/departments" },
    { title: "Management & Social Sciences", href: "/Sections/departments" },
    { title: "Medical & Health Sciences", href: "/Sections/departments" },
    { title: "Law & Public Policy", href: "/Sections/departments" },
    { title: "Sports & Tourism", href: "/Sections/departments" },
  ];

  return (
    <footer className={`${styles.footer} bg-[#010103] border-t-2 border-cyan-500/30 relative z-[100]`}>
      {/* Top Border Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_20px_#00f7ff]" />
      
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          {/* Logo and Description */}
          <motion.div
            className={styles.logoSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex gap-8 mb-10 items-center relative">
              <div className="absolute -left-6 w-40 h-40 bg-cyan-500/5 blur-[50px] rounded-full" />
              <img
                src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07ffa91f78ddf2b941175_KIIT-logo-HD.png"
                alt="KIIT Logo"
                className="h-[75px] object-contain brightness-125 relative z-10"
              />
              <img
                src="/k1000-small.png"
                alt="K-1000 Logo"
                className="h-[75px] object-contain brightness-150 drop-shadow-[0_0_15px_rgba(0,247,255,0.7)] animate-pulse relative z-10"
              />
            </div>
            <p className="text-white/90 text-[17px] leading-relaxed max-w-md font-medium">
              K-1000 is KIIT&apos;s premier <span className="text-cyan-400 font-bold brightness-125 drop-shadow-[0_0_5px_rgba(0,247,255,0.3)]">R&D initiative</span>, empowering 1000
              exceptional students to engage in innovative, skill-driven
              research.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`${conthrax} text-white text-[16px] tracking-[0.3em] uppercase mb-12 font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]`}>
              Quick Links
            </h3>
            <ul className="space-y-6">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-4 text-[15px] transition-all hover:text-cyan-400 group hover:drop-shadow-[0_0_8px_rgba(0,247,255,0.5)] ${
                      pathname === link.path ? "text-cyan-400 brightness-110" : "text-white/70"
                    } font-bold tracking-wide`}
                  >
                    <ChevronRight size={18} className={`${pathname === link.path ? 'text-cyan-400' : 'text-cyan-400/50'} group-hover:translate-x-2 transition-transform`} />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Departments */}
          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`${conthrax} text-white text-[16px] tracking-[0.3em] uppercase mb-12 font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]`}>
              Departments
            </h3>
            <ul className="space-y-6">
              {researchAreas.map((area, index) => (
                <li key={index}>
                  <Link 
                    href={area.href}
                    className="flex items-center gap-4 text-white/70 text-[15px] hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,247,255,0.5)] group transition-all font-bold tracking-wide"
                  >
                    <ChevronRight size={18} className="text-cyan-400/50 group-hover:translate-x-2 transition-transform" />
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className={styles.contactSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`${conthrax} text-white text-[16px] tracking-[0.3em] uppercase mb-12 font-black drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]`}>
              Connect
            </h3>
            <div className="flex gap-8 items-center justify-start mb-12">
              <a href="https://www.linkedin.com/company/k1000-kiit" target="_blank" className="hover:scale-125 transition-transform group">
                <FaLinkedinIn className="text-white/60 text-3xl group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_15px_#00f7ff] transition-all" />
              </a>
              <a href="https://www.instagram.com/k1000_kiit" target="_blank" className="hover:scale-125 transition-transform group">
                <FaInstagram className="text-white/60 text-3xl group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_15px_#00f7ff] transition-all" />
              </a>
              <a href="https://chat.whatsapp.com/CAM4B9Qf0mN6i4CvJaVKi3" target="_blank" className="hover:scale-125 transition-transform group">
                <FaWhatsapp className="text-white/60 text-3xl group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_15px_#00f7ff] transition-all" />
              </a>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-start text-white text-[16px] font-bold">
                <MapPin className="text-cyan-400 brightness-110 mt-1" size={24} />
                <span className="leading-snug">KIIT University, Bhubaneswar,<br/><span className="text-white/50 text-[12px] font-normal uppercase tracking-widest">Odisha 751024</span></span>
              </div>
              <div className="flex gap-5 items-start text-white text-[16px] font-bold">
                <Phone className="text-cyan-400 brightness-110 mt-1" size={24} />
                <span className="tracking-wide">Dr. Ajit Kumar Pasyat<br/><span className="text-cyan-400 brightness-150">+91 7008588187</span></span>
              </div>
              <div className="flex gap-5 items-start text-white text-[16px] font-bold group cursor-pointer">
                <Mail className="text-cyan-400 brightness-110 mt-1" size={24} />
                <span className="underline underline-offset-8 decoration-cyan-400/40 group-hover:text-cyan-400 transition-colors">k.1000@kiit.ac.in</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-normal">
            © {new Date().getFullYear()} <span className="text-white/50">KIIT University</span>. All rights reserved.
          </p>
          <div className={`${conthrax} text-[9px] text-cyan-400 brightness-110 tracking-[1em] font-black drop-shadow-[0_0_8px_rgba(0,247,255,0.3)] uppercase`}>
            Train . Transform . Transcend
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;