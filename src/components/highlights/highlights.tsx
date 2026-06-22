"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Highlights() {
  return (
    <section id="highlights" className="pb-24">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {profile.highlights.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all"
            >
              <h3 className="heading-font text-4xl text-[#B08A5B]">
                {item.value}
              </h3>

              <p className="mt-3 text-neutral-600">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
