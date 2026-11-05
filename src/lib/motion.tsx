
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react"; 


export const easeLuxury: [number, number, number, number] =
    [0.25, 0.1, 0.25, 1];

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.0,
            ease: easeLuxury,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.0,
            ease: easeLuxury,
        },
    },
};

// stagger container for sections 
export const staggerContainer = {
    hidden: { },
    show: {
        opacity:1, y:0, filter: "blur(0px)",
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export function Reveal({ children }: {
    children: React.ReactNode; 
}){
    const ref=useRef(null); 
    const isInView=useInView(ref, { 
        amount:0.2, 
        margin: "-18% 0px -10% 0px",
    });
    return (
        <motion.div
            ref={ref}
            variants={fadeUp}
            animate={isInView ? "show" : "hidden"}
            initial="hidden"
            // whileInView="show"
            // exit="hidden"
            viewport={{ once:false, amount:0.4 }}
        >
            {children}
        </motion.div>
  );
}