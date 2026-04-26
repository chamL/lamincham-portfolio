"use client";

type Props = {
    show: boolean;
};

export default function Toast({ show }: Props) {
    if (!show) return null;

    return (
        <div
            className="
      fixed bottom-6 left-1/2 -translate-x-1/2
      px-4 py-2 rounded-lg
      bg-card border border-border
      shadow-strong text-sm
    "
        >
            Added to cart
        </div>
    );
}