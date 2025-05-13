"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
              "text-3xl md:text-4xl font-bold mb-4",
              "var(--font-league-spartan)",
              "text-white"
            )}
          >
            Productos Destacados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "text-lg max-w-2xl mx-auto",
              "text-white/70", "text-black/70"
            )}
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
              className={cn(
                "group relative rounded-2xl overflow-hidden",
                "border",
                "border-white/10"
              )}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tags */}
              {product.tags.length > 0 && (
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={cn(
                        "px-2 py-1 text-xs font-medium rounded-full",
                        "bg-white text-black"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className={cn("p-4", "bg-black")}>
                <h3
                  className={cn(
                    "font-bold text-lg mb-1",
                    "text-white"
                  )}
                >
                  {product.name}
                </h3>
                <p
                  className={cn(
                    "text-xl font-medium",
                    "text-white"
                  )}
                >
                  {product.price}
                </p>

                <button
                  className={cn(
                    "mt-3 w-full py-2 rounded-full text-sm font-medium transition-all",
                    "border",
                    "border-white/20 text-white hover:bg-white/10"  
                  )}
                >
                  Ver detalles
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/productos"
            className={cn(
              "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all",
              "bg-white text-black hover:bg-white/90"
            )}
          >
            Ver catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
};
