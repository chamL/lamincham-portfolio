"use client";

import { FiShoppingCart } from "react-icons/fi";

type Props = {
    cartQuantity: number;
    onClick: () => void;
};

export default function CartButton({ cartQuantity, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="relative hover:text-accent transition"
        >
            <FiShoppingCart size={20} />

            {cartQuantity > 0 && (
                <span
                    className="
          absolute -top-2 -right-2
          text-xs px-1.5 py-0.5 rounded-full
          bg-accent text-white
        "
                >
                    {cartQuantity}
                </span>
            )}
        </button>
    );
}