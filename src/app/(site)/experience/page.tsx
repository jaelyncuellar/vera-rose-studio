"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerContainer } from "@/lib/motion";
import CallToAction from "@/app/(site)/components/callToAction";
import heroImage from "../../../../public/images/hero/vera-experience.jpg";

function Rule({
  number,
  title
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-sm  tracking-[0.35em] text-primary/100">{number}</p>
      <h3 className="text-xl heading-wider text-primary">{title}</h3>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="flex items-start">
        <span className="pr-3">·</span>
        <p>{children}</p>
      </div>
    </Reveal>
  );
}

export default function ExperiencePage() {
  return (
    <main className="bg-background min-h-screen ">
      {/* HERO SECTION */}
      <motion.section
        className="py-50 relative h-[100svh] w-full overflow-hidden"
        initial= {{ opacity:0 }}
        animate={{  opacity:1 }}
        transition={{ duration: 1}}
      >
        <Image
          src={heroImage}
          alt="A session in progress at Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center-top] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/5 pointer-events-none" />
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-background/10 flex items-center justify-center px-6 pointer-events-none">
          <div className="
            translate-y-32 text-center
            backdrop-blur-md rounded-2xl
            bg-background/30
            px-2 py-1 md:px-3 md:py-4
            max-w-2xl
            glass-card
            ">
            <div className="space-y-2">
              <Reveal>
                <p className="text-sm md:text-xl tracking-[0.35em] uppercase text-foreground">
                  Studio Notes
                </p>

                <h1 className="text-4xl md:text-6xl font-accent text-primary leading-tight">
                  A Session, Beautifully Prepared
                </h1>
              </Reveal>
            </div>
        </div>
      </div>
    </motion.section>

      {/* CONTENT */}
      <motion.section
        className="relative"
        initial="hidden"
        variants={staggerContainer}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,220,0.08),transparent_60%)] pointer-events-none" />
          <div className="relative max-w-2xl mx-auto px-8 md:px-12 py-32 space-y-20">
            {/* INTRO */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="text-4xl md:text-5xl heading-wider text-primary">
                  Session Guidelines
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-sm md:text-md italic text-foreground/70 leading-relaxed">
                  Guided by preparation, calm, and mutual appreciation for the craft.
                </p>
              </Reveal>
            </div>

            {/* RULE 1 */}
            <div className="space-y-3 text-md md:text-lg">
              <Reveal>
                <Rule number="I" title="Before Your Session" />
              </Reveal>
              <Bullet>Kindly reserve your session at least one week in advance — the calendar fills quickly.</Bullet>
              <Bullet>Every booking begins with a short consultation so wardrobe, styling, and goals are planned before shoot day.</Bullet>
              <Bullet>A retainer is required to reserve your date. It applies in full to your session.</Bullet>
            </div>

            {/* RULE 2 */}
            <div className="space-y-3 text-md md:text-lg">
              <Reveal>
                <Rule number="II" title="On Set" />
              </Reveal>
              <Bullet>Please arrive on time, with hair and makeup camera-ready unless you’ve booked the studio’s artist.</Bullet>
              <Bullet>Bring two or three wardrobe options — solid colors and clean lines photograph best, and the studio will help you choose.</Bullet>
              <Bullet>Posing is fully directed. You never need to know what to do with your hands; that is the studio’s job.</Bullet>
              <Bullet>Guests are welcome for support, and the set stays calm, private, and unhurried.</Bullet>
            </div>

            {/* RULE 3 */}
            <div className="space-y-3 text-md md:text-lg">
              <Reveal>
                <Rule number="III" title="Investment" />
              </Reveal>
              <Bullet>Session fees are firm and reflect the studio’s time, direction, retouching, and licensing.</Bullet>
              <Bullet>Your private gallery is delivered within seven business days, with retouched finals in both print and web sizes.</Bullet>
              <Bullet>Unedited raw files are not released — the finished image is the artwork.</Bullet>
              <Bullet>Brand and editorial sessions include a commercial usage license; personal sessions are licensed for personal use and sharing.</Bullet>
            </div>

            {/* RULE 4 */}
            <div className="space-y-3 text-md md:text-lg">
              <Reveal>
                <Rule number="IV" title="Travel & On Location" />
              </Reveal>
              <Bullet>On-location sessions across New York are available for brand, team, and editorial work.</Bullet>
              <Bullet>Location permits, studio rental, and travel are quoted transparently before booking — never added after.</Bullet>
              <Bullet>Destination sessions are available on request, with travel reserved once your retainer is received.</Bullet>
            </div>

            {/* RULE 5 */}
            <div className="space-y-3 text-md md:text-lg">
              <Reveal>
                <Rule number="V" title="Rescheduling" />
              </Reveal>
              <Bullet>Life happens. One reschedule is complimentary with at least 48 hours’ notice.</Bullet>
              <Bullet>Later changes may forfeit the retainer, as your date was held exclusively for you.</Bullet>
            </div>
          </div>
      </motion.section>
      <CallToAction />
    </main>
  );
}
