"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Features = () => {
  const features = [
    {
      id: 1,
      title: "Diseño minimalista",
      description:
        "Productos diseñados con un enfoque minimalista que combina funcionalidad y estética.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Materiales de calidad",
      description:
        "Utilizamos solo los mejores materiales para garantizar la durabilidad y calidad de cada producto.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Funcionalidad intuitiva",
      description:
        "Cada producto está diseñado pensando en la experiencia del usuario, facilitando la organización diaria.",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 dark:text-white",
              "var(--font-league-spartan)"
            )}
          >
            Por qué elegir PlanIt!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-muted-foreground"
          >
            Descubre lo que hace especial a nuestros productos
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center text-primary bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border bg-muted/50 dark:bg-card/30 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 var(--font-league-spartan) dark:text-white">
            ✨ Nuestro compromiso con la calidad ✨
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            En PlanIt! nos comprometemos a ofrecerte productos que no solo sean
            hermosos, sino también funcionales y duraderos. Cada artículo pasa
            por un riguroso control de calidad para garantizar que cumple con
            nuestros altos estándares.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
