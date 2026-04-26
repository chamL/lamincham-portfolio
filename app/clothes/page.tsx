"use client";

import { useEffect, useState } from "react";

import ClothingHeader from "./components/ui/layout/ClothingHeader";
import ClothingPopup from "./components/cart/ClothingPopup";

import ProductSlider from "./components/ui/product/ProductSlider";
import ProductGrid from "./components/ui/product/ProductGrid";
import Hero from "./components/sections/Hero";
import Toast from "./components/ui/Toast";

import { products } from "./data/products";
import { useCart } from "./components/cart/UseCart";

export default function ClothingMain() {
    const {
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartQuantity,
    } = useCart();

    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => setShowMessage(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    const handleAddToCart = (product: any) => {
        addToCart(product);
        setShowMessage(true);
    };

    return (
        <div className="theme-clothes min-h-screen bg-bg text-text pt-28">
            <ClothingHeader
                cartQuantity={cartQuantity}
                openCart={() => setIsCartOpen(true)}
            />

            <Hero />

            {/* SLIDER */}
            <div className="px-6 md:px-20">
                <h2 className="text-xl font-semibold mb-4">Hot Selling</h2>

                <ProductSlider
                    products={products}
                    addToCart={handleAddToCart}
                />
            </div>

            {/* GRID */}
            <ProductGrid
                products={products}
                addToCart={handleAddToCart}
            />

            <Toast show={showMessage} />

            <ClothingPopup
                isCartOpen={isCartOpen}
                closeCartPopup={() => setIsCartOpen(false)}
                cart={cart}
                removeFromCart={removeFromCart}
                updateCartQuantity={updateCartQuantity}
            />
        </div>
    );
}