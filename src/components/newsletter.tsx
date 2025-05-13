"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
  return (
    <section className="w-full py-20 px-4 bg-muted dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
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
            Únete a nuestra newsletter
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 text-muted-foreground"
          >
            Recibe noticias sobre nuevos productos, ofertas exclusivas y
            consejos de organización
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              className="flex-grow px-4 py-3 rounded-full text-sm border bg-background focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all dark:text-white"
              required
            />
            <Button type="submit" className="px-6 py-3 rounded-full">
              Suscribirse
            </Button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xs mt-4 text-muted-foreground/70"
          >
            Al suscribirte, aceptas recibir correos de marketing de PlanIt!.
            Puedes darte de baja en cualquier momento.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
