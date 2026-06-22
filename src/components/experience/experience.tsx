"use client";

import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import { fadeUp } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container max-w-4xl">
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
            Experience
          </span>

          <h2 className="heading-font mt-4 text-4xl md:text-5xl">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-[#E6D5B8]" />

          <div className="space-y-16">
            {profile.experience.map((item, index) => (
              <motion.div
                key={item.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative pl-16"
              >
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    h-8
                    w-8
                    rounded-full
                    border-4
                    border-white
                    bg-[#B08A5B]
                    shadow
                  "
                />

                <motion.div
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    rounded-3xl
                    border
                    border-neutral-200
                    bg-white
                    p-8
                    shadow-sm
                  "
                >
                  <p className="text-sm text-[#B08A5B]">{item.period}</p>

                  <h3 className="heading-font mt-2 text-3xl">{item.role}</h3>

                  <p className="mt-1 font-medium text-neutral-600">
                    {item.company}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="text-neutral-600">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
