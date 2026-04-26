"use client";

import Image from "next/image";
import { Product } from "../../../types/types";
import Link from "next/link";

type Props = {
    product: Product;
    addToCart: (product: Product) => void;
};

export default function ProductCard({ product, addToCart }: Props) {
    return (
        <Link href={`/clothes/${product.id}`} prefetch>
            <div className="group rounded-2xl overflow-hidden ...">

            </div>
            <div
                className="
        group rounded-2xl overflow-hidden
        bg-card border border-border
        shadow-soft hover:shadow-hover
        transition-all duration-300
      "
            >
                {/* IMAGE */}
                <div className="aspect-square relative overflow-hidden bg-bg-subtle">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="
            object-cover
            group-hover:scale-105
            transition duration-500
          "
                    />

                    {/* 🔥 HOVER OVERLAY */}
                    <div
                        className="
            absolute inset-0
            bg-black/0 group-hover:bg-black/10
            transition
          "
                    />
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-text">{product.name}</h3>

                    <p className="text-text-muted text-sm">
                        ${product.price.toFixed(2)}
                    </p>

                    <button
                        onClick={() => addToCart(product)}
                        className="
            w-full py-2 mt-2 rounded-lg

            bg-accent text-white
            hover:bg-accent-hover

            transition
          "
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </Link>
    );
}