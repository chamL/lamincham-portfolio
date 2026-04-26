"use client";

import { useState } from "react";
import Link from "next/link";

import { FiMenu, FiHeart, FiUser } from "react-icons/fi";
import CartButton from "./Cartbutton";
import Sidebar from "./Sidebar";


type Props = {
    cartQuantity: number;
    openCart: () => void;
};

export default function ClothingHeader({ cartQuantity, openCart }: Props) {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <header
                className="
        fixed top-0 w-full z-50
        flex items-center justify-between
        px-4 md:px-10 h-20

        bg-glass-soft backdrop-blur-lg
        border-b border-border
      "
            >
                {/* LEFT */}
                <button
                    onClick={() => setSidebarVisible((prev) => !prev)}
                    className="p-2 rounded-lg hover:bg-glass-accent transition"
                >
                    <FiMenu size={22} />
                </button>

                {/* TITLE */}
                <h1 className="font-semibold tracking-tight text-lg md:text-xl">
                    SOTA / Clothing
                </h1>

                {/* RIGHT */}
                <div className="flex items-center gap-4">
                    <button className="hover:text-accent transition">
                        <FiHeart size={20} />
                    </button>

                    <button className="hover:text-accent transition">
                        <FiUser size={20} />
                    </button>
                    <CartButton
                        cartQuantity={cartQuantity}
                        onClick={openCart}
                    />
                </div>
            </header>

            <Sidebar isOpen={isSidebarVisible} />

            <Link
                href="/"
                className="
        fixed bottom-6 left-6
        px-4 py-2 rounded-lg
        bg-card border border-border
        shadow-soft text-sm
        hover:shadow-hover transition
      "
            >
                ← Portfolio
            </Link>
        </>
    );
}