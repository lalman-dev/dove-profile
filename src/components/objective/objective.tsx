"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Objective() {
  return (
    <section className="py-28">
      <div className="section-container">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-4xl
            rounded-[40px]
            border
            border-[#E6D5B8]
            bg-white
            p-12
            text-center
            shadow-sm
          "
        >
          <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
            Career Objective
          </span>

          <h2 className="heading-font mt-6 text-4xl text-neutral-900">
            Looking Forward
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-neutral-600">
            {profile.careerObjective}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
