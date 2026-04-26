"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "../data/products";
import { getRelatedProducts } from "../utils/relatedProducts";
import { useMemo } from "react";

export default function ProductDetailPage() {
    const params = useParams();
    const id = Number(params.id);

    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="p-10 text-center">Product not found</div>;
    }

    const related = useMemo(
        () => getRelatedProducts(product.id, products),
        [product.id]
    );
    return (
        <div className="theme-clothes min-h-screen bg-bg text-text pt-28 px-6 md:px-20">
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* IMAGE */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-bg-subtle">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </div>

                {/* INFO */}
                <div className="space-y-6">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {product.name}
                    </h1>

                    <p className="text-xl text-text-muted">
                        ${product.price}
                    </p>

                    <p className="text-sm text-text-muted max-w-md">
                        Minimal premium clothing designed for everyday wear.
                    </p>

                    <button
                        className="
              px-6 py-3 rounded-lg
              bg-accent text-white
              hover:bg-accent-hover
              transition
            "
                    >
                        Add to Cart
                    </button>
                </div>
                <ProductDetailPage />

            </div>
        </div>
    );
}