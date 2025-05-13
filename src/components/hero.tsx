"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h1
          className={cn(
            "text-6xl md:text-8xl font-bold mb-4 tracking-tight",
            "var(--font-league-spartan)",
            "text-black dark:text-white"
          )}
        >
          planit!
        </h1>

        <p
          className={cn(
            "text-xl md:text-2xl text-center max-w-lg mt-4 mb-10",
            "text-black/70 dark:text-white/70"
          )}
        >
          Papelería, accesorios y más en un solo lugar✨
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col md:flex-row gap-4"
      >
        <button
          className={cn(
            "px-8 py-3 font-medium rounded-full transition-all md:min-w-40 border",
            "bg-black dark:bg-white",
            "text-white dark:text-black",
            "hover:bg-black/90 dark:hover:bg-white/90",
            "hover:shadow-lg",
            "border-transparent"
          )}
        >
          Comenzar ahora
        </button>

        <button
          className={cn(
            "px-8 py-3 font-medium rounded-full transition-all md:min-w-40",
            "bg-white dark:bg-black/20",
            "text-black dark:text-white",
            "border border-black dark:border-white/30",
            "hover:bg-gray-50 dark:hover:bg-black/40"
          )}
        >
          Conocer más
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
