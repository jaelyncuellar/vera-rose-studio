"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, staggerContainer } from "@/lib/motion";
import CallToAction from "@/app/(site)/components/callToAction";
import heroImage from "../../../../public/images/hero/vera-gallery.jpg";
import mobileHero from "../../../../public/images/hero/vera-gallery-mobile.jpg";

type GalleryImage = {
  src: string;
  alt: string;
};

const images: GalleryImage[] = [
  { src: "/images/gallery/vera-8.jpg", alt: "Studio portrait 8" },
  { src: "/images/gallery/vera-9.jpg", alt: "Studio portrait 9" },
  { src: "/images/gallery/vera-7.jpg", alt: "Studio portrait 7" },
  { src: "/images/gallery/vera-1.jpg", alt: "Studio portrait 1" },
  { src: "/images/gallery/vera-0.jpg", alt: "Studio portrait 0" },
  { src: "/images/gallery/vera-2.jpg", alt: "Studio portrait 2" },
  { src: "/images/gallery/vera-6.jpg", alt: "Studio portrait 6" },
  { src: "/images/gallery/vera-4.jpg", alt: "Studio portrait 4" },
  { src: "/images/gallery/vera-3.jpg", alt: "Studio portrait 3" },
  { src: "/images/gallery/vera-10.jpg", alt: "Studio portrait 10" },
  { src: "/images/gallery/vera-11.jpg", alt: "Studio portrait 11" },
  { src: "/images/gallery/vera-5.jpg", alt: "Studio portrait 5" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <main className="bg-background min-h-screen text-foreground">

      {/* HERO SECTION */}
      <motion.section
        className="py-50 relative h-[100svh] w-full overflow-hidden"
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={mobileHero}
          alt="Inside Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src={heroImage}
          alt="Inside Vera Rose Studio"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover md:block"
        />

      <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/5 pointer-events-none" />
        {/* MATCHING OVERLAY CARD */}
      <div className="absolute inset-0 bg-background/10 flex items-center justify-center px-6 pointer-events-none">
        <div className="
          translate-y-32
          text-center
          backdrop-blur-md
          bg-background/30
          rounded-2xl
          px-2 py-1 md:px-3 md:py-4
          max-w-2xl
          glass-card
          "
        >
            <div className="space-y-2">
              <Reveal>
                <p className="text-sm md:text-xl tracking-[0.35em] uppercase text-foreground">
                  Gallery
                </p>

                <h1 className="text-4xl md:text-6xl font-accent text-primary leading-tight">
                  A Glimpse of Elegance
                </h1>
              </Reveal>
            </div>
        </div>
    </div>
      </motion.section>

      {/* GALLERY GRID */}
      <section className="px-6 py-28">

        <div className="mx-auto max-w-4xl space-y-24">
            <Reveal>
              <div className="flex justify-center px-6">
                <p className="text-sm md:text-md max-w-md text-center text-[0.72rem] italic text-foreground/70 leading-relaxed md:leading loose tracking-wide">
                Recent work from the studio — personal branding, editorial
                portraits, and milestone sessions across New York.
                </p>
               </div>
            </Reveal>
          {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(img)}
                className="group relative w-full overflow-hidden"
                initial={{ scale:1.05, opacity:0 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{once:true, amount: 0.3}}
                transition= {{
                  duration: 2.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i*0.12,
                }}
                whileHover={{ scale: 1.015 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={1800}
                  className="w-full h-auto object-contain ring-1 ring-foreground/10 transition duration-1000 group-hover:scale-[1.02]"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-background/10 opacity-0 group-hover:opacity-100 transition duration-700" />
              </motion.button>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <motion.section
        className="px-6 pb-20 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={staggerContainer}
        >
          <Reveal>
            <p className="text-md text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Presented with respect and refinement.
              <br></br>
              Every image shared with the client’s permission.
            </p>
          </Reveal>
      </motion.section>
      <CallToAction />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-foreground/90 flex items-center justify-center z-50"
            onClick={() => setActive(null)}
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              className="max-h-[90%] max-w-[90%] object-contain"
              initial={{ scale: 0.92, opacity:0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale:0.95, opacity: 0 }}
              transition={{duration:0.45}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
