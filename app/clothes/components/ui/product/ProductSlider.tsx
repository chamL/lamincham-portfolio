"use client";

import { useRef } from "react";
import ProductCard from "./productCards";
import { Product } from "../../../types/types";

type Props = {
    products: Product[];
    addToCart: (product: Product) => void;
};

export default function ProductSlider({ products, addToCart }: Props) {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div>
            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            >
                {products.map((product) => (
                    <div key={product.id} className="min-w-[250px]">
                        <ProductCard product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={scrollLeft}
                    className="px-4 py-2 rounded-full border border-border bg-card hover:scale-105 transition"
                >
                    ←
                </button>

                <button
                    onClick={scrollRight}
                    className="px-4 py-2 rounded-full border border-border bg-card hover:scale-105 transition"
                >
                    →
                </button>
            </div>
        </div>
    );
}