"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Los productos de PlanIt! han transformado completamente mi forma de organizar mis tareas diarias. La calidad es excepcional y el diseño minimalista es justo lo que buscaba.",
      author: "Laura Mendoza",
      role: "Diseñadora Gráfica",
    },
    {
      id: 2,
      quote:
        "Como estudiante, los cuadernos y planificadores de PlanIt! son imprescindibles para mantenerme organizado durante el semestre. Recomiendo totalmente sus productos.",
      author: "Carlos Vega",
      role: "Estudiante de Arquitectura",
    },
    {
      id: 3,
      quote:
        "He probado muchas marcas de papelería, pero la atención al detalle y la calidad de PlanIt! está a otro nivel. Sus agendas son simplemente perfectas para mi negocio.",
      author: "Sofía Ramírez",
      role: "Emprendedora",
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
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
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-muted-foreground"
          >
            Experiencias reales de personas que han confiado en PlanIt!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border bg-card"
            >
              {/* Comillas */}
              <svg
                className="w-10 h-10 mb-4 text-muted-foreground/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-lg mb-6 italic text-card-foreground/80">
                &quot;{testimonial.quote}&quot;
              </p>

              <div>
                <h4 className="font-bold text-card-foreground">
                  {testimonial.author}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
