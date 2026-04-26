"use client";

import { FiX, FiMinus, FiPlus } from "react-icons/fi";

import { CartItem } from "../../types/types";

type Props = {
    isCartOpen: boolean;
    closeCartPopup: () => void;
    cart: CartItem[];
    removeFromCart: (id: number) => void;
    updateCartQuantity: (id: number, quantity: number) => void;
};
export default function ClothingPopup({
    isCartOpen,
    closeCartPopup,
    cart,
    removeFromCart,
    updateCartQuantity,
}: Props) {
    if (!isCartOpen) return null;

    return (
        <div
            className="
        fixed inset-0 z-50
        flex items-center justify-center

        bg-black/40 backdrop-blur-sm
      "
        >
            <div
                className="
          w-full max-w-md

          bg-card
          border border-border
          rounded-2xl

          shadow-strong

          p-6
        "
            >
                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Shopping Cart</h2>

                    <button
                        onClick={closeCartPopup}
                        className="hover:text-accent transition"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* CONTENT */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {cart.length === 0 ? (
                        <p className="text-text-muted text-sm">
                            Your cart is empty.
                        </p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="
                  flex items-center justify-between

                  border-b border-border
                  pb-3
                "
                            >
                                {/* LEFT */}
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="
                      w-16 h-16 object-cover
                      rounded-lg
                    "
                                    />

                                    <div>
                                        <p className="font-medium text-sm">
                                            {item.name}
                                        </p>

                                        <p className="text-xs text-text-muted">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex flex-col items-end gap-2">
                                    {/* QUANTITY */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() =>
                                                updateCartQuantity(item.id, item.quantity - 1)
                                            }
                                            className="
                        p-1 rounded

                        bg-glass-soft
                        hover:bg-glass-accent

                        transition
                      "
                                        >
                                            <FiMinus size={14} />
                                        </button>

                                        <span className="text-sm w-4 text-center">
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                updateCartQuantity(item.id, item.quantity + 1)
                                            }
                                            className="
                        p-1 rounded

                        bg-glass-soft
                        hover:bg-glass-accent

                        transition
                      "
                                        >
                                            <FiPlus size={14} />
                                        </button>
                                    </div>

                                    {/* REMOVE */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="
                      text-xs text-red-500
                      hover:underline
                    "
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* FOOTER */}
                <button
                    onClick={closeCartPopup}
                    className="
            mt-6 w-full py-2 rounded-lg

            bg-accent text-white
            hover:bg-accent-hover

            transition
          "
                >
                    Close
                </button>
            </div>
        </div>
    );
}