"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, staggerContainer } from "@/lib/motion";
import heroImage from "../../../public/images/hero/vera-home.jpg"
import mobileHero from "../../../public/images/hero/vera-home-mobile.jpg"


export default function Page() {
  const text = "Hello, beautiful";
  const [displayed, setDisplayed] = useState("");
  useEffect(()=>{
    let i=0;
    const timer = setInterval(() => {
      if (i<=text.length) {
        setDisplayed(text.slice(0,i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-background min-h-screen">
      {/* HERO */}
      <motion.section
        className="py-50 relative h-[100svh] w-full overflow-hidden"
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Mobile Image */}
        <Image
          src={mobileHero}
          alt="Editorial portrait photographed by Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        {/* Desktop Image */}
        <Image
          src={heroImage}
          alt="Editorial portrait photographed by Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/5 pointer-events-none" />
        {/* overlay */}
        <div className="absolute pt-100 flex-col gap-6 bg-background/10 inset-0 flex items-center justify-center px-6">
          {/* glass card */}
          <div className="
            text-center
            backdrop-blur-2xl
            bg-background/10
            rounded-2xl
            px-4 py-3 md:px-2 md:py-1
            max-w-2xl
            glass-card
            mb-5
            "
          >
            <motion.h1
              initial={{ opacity: 0, y:8 }}
              animate={{ opacity: 1, y:0 }}
              transition={{ duration: 1.2 }}
              className="
                relative
                font-accent
                text-5xl md:text-6xl
                text-foreground tracking-[0.08em]
                drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)]
                "
            >
              {displayed}
              {displayed === text && "\u00A0"}

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="ml-1"
              >|</motion.span>
            </motion.h1>
            </div>
            {/* RESERVE BUTTON */}
            <Reveal>
            <a
              href="/reserve"
              className="px-5 py-2 rounded-2xl
              text-center
              border border-primary/40
              bg-background/20
              font-bold
              text-foreground/80
              backdrop-blur-2xl
              uppercase tracking-logo
              text-md
              transition-all duration-500
              hover:bg-primary/20
              hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
              hover:-translate-y-px
              "
            >
              Reserve
            </a>
            </Reveal>
        </div>
      </motion.section>

      {/* LARGE TEXT */}
      <motion.section
        initial="hidden"
        variants={staggerContainer}
        exit="hidden"
        viewport={{ once: true, amount: 0.2 }}
        className="relative"
      >
        {/* soft glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,220,220,0.08),transparent_45%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-8 md:px-12 py-32 space-y-24">

          {/* INTRO */}
          <div className="space-y-8 ">
            <Reveal>
              <h2 className="font-accent tracking-logo text-5xl md:text-5xl text-primary">
                Hello, beautiful&nbsp;,
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-xl italic text-primary/90">
                I’m so glad you found the studio.
              </p>
            </Reveal>
          </div>

          {/* SECTION 1 */}
          <div className="space-y-8 text-lg leading-[2.0]">
            <Reveal>
              <p>
                Vera Rose is a New York portrait studio built on a simple belief:
                the best photographs happen when you feel completely at ease —
                and completely yourself.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Whether you’re refreshing your brand, marking a milestone,
                stepping into a new chapter, or simply ready to be seen the way
                you see yourself, every session is directed, styled, and lit
                with one goal: portraits that feel effortless, editorial,
                and entirely unforgettable.
              </p>
            </Reveal>

            <Reveal>
              <p className="italic text-primary text-2xl">
                Have I piqued your interest yet?
              </p>
            </Reveal>
          </div>

          <motion.div className="w-24 h-px bg-primary/20" />

          {/* SECTION 2 */}
          <div className="-mt-5 space-y-8 ">
            <Reveal>
              <h3 className="tracking-[0.25em] text-xl">
                Perhaps you’d like to know <span className="italic">more</span> about the studio
              </h3>
            </Reveal>

            <div className="space-y-4 text-lg leading-[1.5]">
              <Reveal><p>At first glance, a session here looks simple: beautiful light, a calm room, good music.</p></Reveal>
              <Reveal><p>Beneath that is a thoughtful, fully directed process — wardrobe, posing, and expression are guided moment by moment.</p></Reveal>
              <Reveal><p>The studio works with founders, creatives, speakers, and teams across New York.</p></Reveal>
              <Reveal><p>No modeling experience needed. Most clients arrive a little nervous and leave wondering why they waited.</p></Reveal>
            </div>
          </div>

          <motion.div className="w-50 h-px bg-primary/20 ml-auto" />

          {/* SECTION 3 */}
          <div className="-mt-10 space-y-8">
            <Reveal>
              <h3 className="tracking-[0.25em] text-xl text-primary">
                A little more closely
              </h3>
            </Reveal>

            <div className="space-y-4 text-lg leading-[2.0]">
              <Reveal><p>Soft, sculpted light. Clean backdrops. Wardrobe that photographs beautifully.
              Every detail is considered before you ever step in front of the camera —
              so all you have to do is show up and be present.</p></Reveal>
            </div>
          </div>

          {/* SECTION 4 */}
          <div className="space-y-8">
            <Reveal>
              <h3 className=" tracking-[0.25em] text-xl text-primary">
                Beyond the surface
              </h3>
            </Reveal>

            <div className="space-y-4 text-lg leading-[2.0]">
              <Reveal><p>Every session includes a private online gallery, careful retouching,
              and print &amp; web-ready files with a commercial usage license for brand sessions.</p></Reveal>
              <Reveal><p>Albums, framed prints, and full campaign production are available on request.
              Always ready to travel for the right shoot.</p></Reveal>
            </div>
          </div>

          <motion.div className="w-24 h-px bg-primary/20 ml-auto" />

          {/* FINAL */}
          <div className="space-y-10">
            <div className="space-y-8 max-w-2xl mx-auto text-lg leading-[2.0]">
              <Reveal>
                <p>
                  The most beautiful portraits feel effortless:
                </p>
              </Reveal>
              <Reveal>
                <h3 className="tracking-logo italic text-xl">
                   confidence, ease, and beautiful light.
                </h3>
              </Reveal>

              <Reveal>
                <p>
                  If you’re ready for photographs that finally look like you —
                  at your very best — the studio would love to meet you.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <p className="font-accent tracking-logo text-3xl text-primary pt-8">
                I promise you’ll never see yourself the same way again.
              </p>
            </Reveal>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-30 flex flex-col items-center gap-10 pb-40">
          <p className="uppercase tracking-[0.45em] text-sm text-primary/80">
            Continue Exploring
          </p>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {[
              { label: "gallery", href: "/gallery" },
              { label: "experience", href: "/experience" },
              { label: "investment", href: "/investment" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                text-md uppercase
                tracking-[0.3em] text-foreground/70
                transition-all duration-500
                hover:text-foreground/30
                hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
                hover:-translate-y-px"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/reserve"
              className="px-4 py-2 rounded-2xl
              text-center
              border border-primary/50
              text-primary
              uppercase tracking-logo
              text-md
              transition-all duration-500
              hover:bg-primary/20
              hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]
              hover:-translate-y-px
              "
            >
              Reserve
            </a>
          </div>
        </div>
      </motion.section>

      {/* IMAGE */}
      <motion.section
        className="relative h-[100svh] w-full overflow-hidden"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/gallery/vera-3.jpg"
          alt="Editorial studio portrait"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src="/images/gallery/vera-4.jpg"
          alt="Editorial studio portrait"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />
      </motion.section>
    </main>
  );
}
