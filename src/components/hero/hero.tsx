import Image from "next/image";
import { profile } from "@/data/profile";
import { MapPin, Phone, Download } from "lucide-react";
import profileImage from "@/assets/dove-profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="section-container w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <div className="space-y-8">
            <span
              className="
              inline-flex
              items-center
              rounded-full
              bg-amber-100
              px-4
              py-2
              text-sm
              font-medium
              text-amber-800
            "
            >
              Available For Immediate Joining
            </span>

            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-4">
                Customer Service & Hospitality
              </p>

              <h1
                className="
                heading-font
                text-5xl
                md:text-7xl
                leading-tight
                text-neutral-900
              "
              >
                {profile.name}
              </h1>

              <h2
                className="
                mt-6
                text-xl
                md:text-2xl
                text-[#B08A5B]
                font-medium
              "
              >
                {profile.title}
              </h2>
            </div>

            <p
              className="
              text-lg
              text-neutral-600
              leading-relaxed
              max-w-xl
            "
            >
              Former H&M Sales Advisor with experience in customer service,
              retail sales, POS operations, guest relations, and hospitality
              support. Currently based in Sharjah and open to opportunities
              across the UAE.
            </p>

            <div className="flex items-center gap-3 text-neutral-600">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                className="
                flex items-center px-6
                py-3
                rounded-full
                bg-[#B08A5B]
                text-white
                font-medium
                hover:opacity-90
                transition
                "
              >
                <Phone /> WhatsApp
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                className="
                px-6 flex items-center
                py-3
                rounded-full
                border
                border-neutral-300
                hover:border-[#B08A5B]
                transition
                "
              >
                Linkedin
              </a>

              <button
                className="
               flex items-center px-6
                py-3
                rounded-full
                border
                border-neutral-300
                hover:border-[#B08A5B]
                transition
                "
              >
                <Download /> Download CV
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center">
            <div
              className="
              relative
              w-85
              h-112.5
              md:w-105
              md:h-135
              "
            >
              <div
                className="
                absolute
                inset-0
                rounded-[40px]
                bg-[#E6D5B8]
                rotate-3
                "
              />

              <Image
                src={profileImage}
                alt={profile.name}
                fill
                className="
                object-cover
                rounded-[40px]
                relative
                z-10
                shadow-2xl
                "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
