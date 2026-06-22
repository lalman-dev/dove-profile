"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profileImage from "@/assets/dove-profile.jpg";
import { profile } from "@/data/profile";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center py-20">
      <div className="section-container w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-16 lg:grid-cols-2"
        >
          {/* Content */}

          <motion.div variants={fadeLeft} className="space-y-8">
            <motion.span
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800"
            >
              Available For Immediate Joining
            </motion.span>

            <div>
              <motion.p
                variants={fadeUp}
                className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500"
              >
                Customer Service & Hospitality
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="heading-font text-5xl leading-tight text-neutral-900 md:text-7xl"
              >
                {profile.name}
              </motion.h1>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-xl font-medium text-[#B08A5B] md:text-2xl"
              >
                {profile.title}
              </motion.h2>
            </div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-relaxed text-neutral-600"
            >
              Former H&M Sales Advisor with experience in customer service,
              retail sales, POS operations, guest relations, and hospitality
              support. Currently based in Sharjah and open to opportunities
              across the UAE.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-neutral-600"
            >
              <MapPin size={18} />
              <span>{profile.location}</span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#20ba5a]"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.97 }}
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-6 py-3 font-medium text-white shadow-sm"
              >
                <FaLinkedinIn size={18} />
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{
                  y: -2,
                  borderColor: "#B08A5B",
                }}
                whileTap={{ scale: 0.98 }}
                href="/Dove-Aien-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 shadow-sm transition-colors"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}

          <motion.div variants={fadeRight} className="flex justify-center">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative h-112.5 w-85 md:h-135 md:w-105"
            >
              <motion.div
                animate={{
                  rotate: [3, 2, 3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-[40px] bg-[#E6D5B8]"
              />

              <Image
                src={profileImage}
                alt={profile.name}
                fill
                priority
                className="relative z-10 rounded-[40px] object-cover shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
