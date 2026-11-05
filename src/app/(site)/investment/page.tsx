"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, staggerContainer } from "@/lib/motion";
import CallToAction from "@/app/(site)/components/callToAction";
import heroImage from "../../../../public/images/hero/vera-investment.jpg";
import mobileHero from "../../../../public/images/hero/vera-investment-mobile.jpg";


type StepProps = {
  number: string;
  title: string;
  text: string;
};

function Step({ number, title, text }: StepProps) {
  return (
    <div>
      <p className="text-sm tracking-[0.3em] text-(--color-primary)">
        {number}
      </p>
      <h3 className="mt-2 heading-wider text-primary text-xl">{title}</h3>
      <p className="mt-2 text-lg md: leading-relaxed">{text}</p>
    </div>
  );
}

type RateProps = {
  duration: string;
  label: string;
  price: string;
  note?: string;
};

function Rate({ duration, label, price, note }: RateProps) {
  return (
    <div className="flex justify-between items-start gap-6 py-4 border-b border-primary/10">
      <div className="space-y-1">
        <p className="text-lg text-foreground">{duration}</p>
        <p className="text-sm italic tracking-[0.4] text-foreground/65">{label}</p>
        {note && (<p className="text-sm text-primary tracking-wide">{note}</p>
        )}
      </div>
      <p className="text-lg font-header tabular-nums tracking-wide text-primary">{price}</p>
    </div>
  );
}

export default function InvestmentPage() {
  return (
    <main className="bg-background min-h-screen ">
      {/* HERO SECTION */}

      <motion.section
        className="py-50 relative h-[100svh] w-full overflow-hidden"
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={mobileHero}
          alt="Portrait session at Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src={heroImage}
          alt="Portrait session at Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/5 pointer-events-none" />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-background/15 flex items-center justify-center px-6 pointer-events-none">
          <div
            className="
              translate-y-32
              text-center
              backdrop-blur-md
              rounded-2xl
              px-2 py-1 md:px-3 md:py-4
              max-w-2xl
              glass-card
              bg-background/10
            "
          >
            <div className="space-y-2">
              <Reveal>
                <p className="text-sm md:text-xl tracking-[0.35em] uppercase text-foreground">
                  Investment
                </p>

                <h1 className="text-4xl md:text-6xl font-accent text-primary leading-tight">
                  A Refined Experience
                </h1>
              </Reveal>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTENT */}
      <motion.section
        initial="hidden"
        variants={staggerContainer}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative "
      >
        {/* soft glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,220,0.08),transparent_55%)] pointer-events-none" />


          <div className="relative max-w-2xl mx-auto px-8 md:px-12 py-32 space-y-20">
            {/* INTRO */}
            <div className="space-y-6">
              <Reveal>
                <h2 className="text-4xl md:text-5xl heading-wider text-primary">
                  Signature Sessions
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-sm md:text-md italic text-foreground/70 leading-relaxed">
                A graceful blend of direction,
                <br/>artistry, & portraits that work as hard as you do.
                </p>
              </Reveal>
            </div>

            {/* RATE LIST */}
            <div className="space-y-2">
              <Rate
                duration="The Headshot"
                label="45 minutes · 1 look · 3 retouched images"
                price="$450"
              />
              <Rate
                duration="The Portrait Session"
                label="90 minutes · 2 looks · 10 retouched images"
                price="$750"
                note="Most requested"
              />
              <Rate
                duration="The Brand Session"
                label="2 hours · 3 looks · 20 retouched images · commercial license"
                price="$1,100"
              />
              <Rate
                duration="Editorial Half Day"
                label="4 hours · full creative direction · 35 retouched images"
                price="$1,900"
                note="Perfect for launches"
              />
              <Rate
                duration="Full Day Campaign"
                label="Up to 8 hours · team & product · full gallery"
                price="$3,400"
              />
            </div>
            <div className="text-md space-y-2 text-foreground/70">
              <Reveal>
                <div className="flex items-start">
                  <span className="pr-3">·</span>
                  <p>
                  Every session includes a pre-shoot consultation, a private
                  online gallery, and print &amp; web-ready files.
                  </p>
                </div>
              </Reveal>
              <Reveal>
                <div className="flex items-start">
                  <span className="pr-3">·</span>
                  <p>Hair &amp; makeup artistry, albums, and framed prints available as add-ons. Travel upon request.</p>
                </div>
              </Reveal>
            </div>

            {/* HOW IT WORKS */}
            <div className="space-y-12 border-t border-primary/20 mx-auto px-6 pt-24 text-center ">
              <Reveal>
                <h3 className="text-2xl heading-wider text-primary text-center">
                  The Process
                </h3>
              </Reveal>

              <div className="space-y-12">
                <Step
                  number="01"
                  title="Reserve"
                  text="
                  Choose your session and request a date
                  through a short, private inquiry form."
                />

                <Step
                  number="02"
                  title="Consultation"
                  text="Each inquiry is reviewed personally, and we plan wardrobe, styling, and shot list together before your date is confirmed."
                />

                <Step
                  number="03"
                  title="Confirmed Session"
                  text="Once your retainer is received, the studio confirms your session and sends your preparation guide."
                />
              </div>
            </div>
        </div>
      </motion.section>
      <CallToAction />
    </main>
  );
}
