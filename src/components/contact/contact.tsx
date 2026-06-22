"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <footer className="border-t border-neutral-200 py-20">
      <div className="section-container">
        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.25em] text-[#B08A5B]">
            Contact
          </span>

          <h2 className="heading-font mt-4 text-5xl text-neutral-900">
            Let's Connect
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            Open to opportunities across the UAE in retail, customer service,
            reception, hospitality, and guest relations.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.a
            whileHover={{ y: -4 }}
            href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
            target="_blank"
            className="rounded-3xl bg-[#25D366] p-6 text-white"
          >
            <FaWhatsapp size={28} />
            <p className="mt-4 font-medium">WhatsApp</p>
            <p className="mt-2 text-sm opacity-90">{profile.phone}</p>
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href={profile.linkedin}
            target="_blank"
            className="rounded-3xl bg-[#0A66C2] p-6 text-white"
          >
            <FaLinkedinIn size={28} />
            <p className="mt-4 font-medium">LinkedIn</p>
          </motion.a>

          <div className="rounded-3xl border p-6">
            <Mail size={28} />
            <p className="mt-4 font-medium">Email</p>
            <p className="mt-2 text-sm text-neutral-600 break-all">
              {profile.email}
            </p>
          </div>

          <div className="rounded-3xl border p-6">
            <MapPin size={28} />
            <p className="mt-4 font-medium">Location</p>
            <p className="mt-2 text-sm text-neutral-600">{profile.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
