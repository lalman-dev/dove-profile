"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/animations";

export default function Strengths() {
  return (
    <section id="strengths" className="py-28">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
              Personal Strengths
            </span>

            <h2 className="heading-font mt-4 text-5xl leading-tight text-neutral-900">
              What Makes Me Different
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              I believe great service is about more than completing tasks. It's
              about creating positive experiences, building trust, and making
              every interaction meaningful.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {profile.strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                variants={fadeUp}
                whileHover={{
                  x: 8,
                  y: -4,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <h3 className="heading-font text-2xl text-neutral-900">
                  {strength.title}
                </h3>

                <p className="mt-3 leading-relaxed text-neutral-600">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
