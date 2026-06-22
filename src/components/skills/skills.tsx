"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Skills() {
  return (
    <section className="py-28">
      <div className="section-container">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
            Core Strengths
          </span>
          <h2 className="heading-font mt-4 text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {profile.skills.map((skill) => (
            <motion.div
              key={skill}
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              className="
                rounded-3xl
                border
                border-neutral-200
                bg-white
                p-6
                text-center
                shadow-sm
              "
            >
              <h3 className="font-medium text-neutral-900">{skill}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
