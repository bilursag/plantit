"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Agenda Classic 2024",
      price: "$24.99",
      image: "/api/placeholder/300/400", // Reemplazar con imagen real
      tags: ["Nuevo", "Bestseller"],
    },
    {
      id: 2,
      name: "Set de Plumas Minimalistas",
      price: "$18.50",
      image: "/api/placeholder/300/400", // Reemplazar con imagen real
      tags: ["Limitado"],
    },
    {
      id: 3,
      name: "Cuaderno Dot Grid",
      price: "$12.99",
      image: "/api/placeholder/300/400", // Reemplazar con imagen real
      tags: [],
    },
    {
      id: 4,
      name: "Organizador de Escritorio",
      price: "$34.95",
      image: "/api/placeholder/300/400", // Reemplazar con imagen real
      tags: ["Exclusivo"],
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
            Productos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-muted-foreground"
          >
            Descubre nuestra selección de productos más populares
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden border bg-card"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {product.tags.length > 0 && (
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="p-4">
                <h3 className="font-bold text-md mb-1 text-card-foreground">
                  {product.name}
                </h3>
                <p className="text-xl font-medium text-card-foreground">
                  {product.price}
                </p>

                <button className="mt-3 w-full py-2 rounded-full text-sm font-medium transition-all border border-input hover:bg-accent dark:text-white">
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild className="px-8 rounded-full">
            <Link href="/productos">Ver catálogo completo</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
