"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeUp } from "@/lib/animations";

export default function Languages() {
  return (
    <section className="pb-28">
      <div className="section-container">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
            Communication
          </span>

          <h2 className="heading-font mt-4 text-4xl md:text-5xl">Languages</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-5">
          {profile.languages.map((language) => (
            <motion.div
              key={language.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                x: 6,
              }}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-neutral-200
                bg-white
                px-6
                py-5
                shadow-sm
              "
            >
              <span className="font-medium">{language.name}</span>

              <span className="text-[#B08A5B]">{language.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
