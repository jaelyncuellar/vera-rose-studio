import { motion } from "framer-motion";
import { Reveal } from "@/lib/motion";


export default function CallToAction() {
    return (
        <motion.section
            className="px-6 py-28 text-center border-t border-primary/20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            >
            <div className="mx-auto max-w-2xl space-y-8 px-2">

            <Reveal>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[0.08em] text-primary">
                Begin Your Session
                </h2>
            </Reveal>

            <Reveal>
                <p className="mx-auto max-w-md text-foreground/60 text-sm sm:text-md italic leading-relaxed px-2">
                Inquiries are answered personally, usually within two business days.
                </p>
            </Reveal>

            {/* BUTTON */}
            <Reveal>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                    href="/reserve"
                    className="bg-primary/80 rounded-2xl text-md font-bold text-background w-full sm:w-auto px-10 sm:px-16 py-4 uppercase text-sm tracking-[0.2em] transition duration-500 hover:bg-primary hover:shadow-[0_16px_40px_rgba(184,96,128,0.35)]"
                >
                    Reserve
                </a>
                </div>
            </Reveal>

            </div>
        </motion.section>

    )


}
