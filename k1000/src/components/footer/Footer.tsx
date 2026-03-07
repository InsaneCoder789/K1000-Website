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
    <footer className={`${styles.footer} bg-[#010103] border-t border-white/10 relative z-[100]`}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          {/* Logo and Description */}
          <motion.div
            className={styles.logoSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex gap-6 mb-6 items-center">
              <img
                src="https://cdn.prod.website-files.com/663d1907e337de23e83c30b2/67a07ffa91f78ddf2b941175_KIIT-logo-HD.png"
                alt="KIIT Logo"
                className="h-[55px] object-contain"
              />
              <img
                src="/k1000-small.png"
                alt="K-1000 Logo"
                className="h-[55px] object-contain drop-shadow-[0_0_10px_rgba(0,247,255,0.4)]"
              />
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed max-w-sm font-normal">
              K-1000 is KIIT's premier R&D initiative, empowering 1000
              exceptional students to engage in innovative, skill-driven
              research and develop solutions to real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className={styles.linksSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`${conthrax} text-cyan-400 text-xs tracking-[0.2em] uppercase mb-8 font-black drop-shadow-[0_0_8px_rgba(0,247,255,0.3)]`}>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`flex items-center gap-2 text-xs transition-all hover:text-cyan-400 group ${
                      pathname === link.path ? "text-cyan-400" : "text-white/30"
                    } font-normal`}
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h3 className={`${conthrax} text-cyan-400 text-xs tracking-[0.2em] uppercase mb-8 font-black drop-shadow-[0_0_8px_rgba(0,247,255,0.3)]`}>
              Departments
            </h3>
            <ul className="space-y-4">
              {researchAreas.map((area, index) => (
                <li key={index}>
                  <Link 
                    href={area.href}
                    className="flex items-center gap-2 text-white/30 text-xs hover:text-cyan-400 group transition-all font-normal"
                  >
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            <h3 className={`${conthrax} text-cyan-400 text-xs tracking-[0.2em] uppercase mb-8 font-black drop-shadow-[0_0_8px_rgba(0,247,255,0.3)]`}>
              Connect
            </h3>
            <div className="flex gap-4 items-center justify-start mb-8">
              <a href="https://www.linkedin.com/company/k1000-kiit" target="_blank" className="hover:scale-110 transition-transform">
                <FaLinkedinIn className="text-cyan-400/60 text-xl hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(0,247,255,0.2)]" />
              </a>
              <a href="https://www.instagram.com/k1000_kiit" target="_blank" className="hover:scale-110 transition-transform">
                <FaInstagram className="text-cyan-400/60 text-xl hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(0,247,255,0.2)]" />
              </a>
              <a href="https://chat.whatsapp.com/CAM4B9Qf0mN6i4CvJaVKi3" target="_blank" className="hover:scale-110 transition-transform">
                <FaWhatsapp className="text-cyan-400/60 text-xl hover:text-cyan-400 drop-shadow-[0_0_8px_rgba(0,247,255,0.2)]" />
              </a>
            </div>
            
            <div className="space-y-5">
              <div className="flex gap-4 items-start text-white/40 text-[12px] font-normal">
                <MapPin className="text-cyan-400/50 mt-1" size={18} />
                <span>KIIT University, Bhubaneswar,<br/>Odisha 751024</span>
              </div>
              <div className="flex gap-4 items-start text-white/40 text-[12px] font-normal">
                <Phone className="text-cyan-400/50 mt-1" size={18} />
                <span>Dr. Ajit Kumar Pasyat<br/>+91 7008588187</span>
              </div>
              <div className="flex gap-4 items-start text-white/40 text-[12px] font-normal">
                <Mail className="text-cyan-400/50 mt-1" size={18} />
                <span>k.1000@kiit.ac.in</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-normal">
            © {new Date().getFullYear()} KIIT University. All rights reserved.
          </p>
          <div className={`${conthrax} text-[9px] text-cyan-400/20 uppercase tracking-[1em] font-black`}>
            Train . Transform . Transcend
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;