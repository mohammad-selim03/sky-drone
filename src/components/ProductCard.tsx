"use client";

import { products } from "@/lib/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeInSection from "./animations/FadeInSection";

export default function ProductGrid() {
  return (
    <FadeInSection>
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center font-bricolage">
          Our Featured Drones
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group bg-card p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-muted/30"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  width={100}
                  height={100}
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 font-bricolage">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
              <div className="mt-4 text-xl font-bold text-primary">
                {product.price}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
