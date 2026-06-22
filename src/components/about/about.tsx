"use client";

import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import { fadeLeft, fadeRight } from "@/lib/animations";

export default function About() {
  return (
    <section className="py-28">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
              Professional Journey
            </span>

            <h2 className="heading-font mt-4 text-4xl text-neutral-900 md:text-5xl">
              {profile.about.heading}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-neutral-600">
              {profile.about.description
                .trim()
                .split("\n")
                .filter(Boolean)
                .map((paragraph) => (
                  <p key={paragraph}>{paragraph.trim()}</p>
                ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center"
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className="relative overflow-hidden rounded-4xl border border-[#E6D5B8] bg-white p-10 shadow-sm"
            >
              <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
                Customer Service Philosophy
              </span>

              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className=" heading-font mt-6 text-2xl leading-relaxed text-neutral-900"
              >
                "{profile.about.philosophy.trim()}"
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
