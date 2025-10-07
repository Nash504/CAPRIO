"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Header from "./header";
import Link from "next/link";
export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden">
      <Header />
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src="/hero.jpeg"
          fill
          alt="Mountain landscape background"
          style={{
            objectFit: "cover",
            objectPosition: "80% center", // shifts the image toward the right
          }}
        />

        <div className="absolute inset-0 flex items-center justify-start z-10 mt-40">
          <div className="text-left text-white max-w-3xl px-6 font-poppins">
            <h1 className="text-3xl md:text-5xl font-bold mt-20 leading-tight font-eb-garamond">
              Transform Legal Work With AI
            </h1>
            <p className="text-sm md:text-basetext leading-relaxed mb-8">
              Revolutionize your legal practice with our comprehensive AI
              platform. From intelligent research to contract analysis, automate
              complex tasks and gain insights that traditional methods miss.
            </p>

            <Link href="https://jolly-ai.vercel.app/contract-review">
              <button className="px-4 py-2 border-2 border-white bg-transparent text-white text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
                EXPLORE SOLUTIONS
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
