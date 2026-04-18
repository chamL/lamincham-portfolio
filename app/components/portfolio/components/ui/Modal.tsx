"use client";

import { X } from "lucide-react";

type Props = {
    children: React.ReactNode;
    onClose: () => void;
};

export default function BaseModal({ children, onClose }: Props) {
    return (
        <div
            onClick={onClose}
            className="
        fixed inset-0 z-50
        flex items-center justify-center

        bg-black/50 backdrop-blur-md
        p-4 md:p-8

        animate-in fade-in duration-300
      "
        >
            {/* CLOSE BUTTON */}
            <button
                onClick={onClose}
                className="
          fixed top-6 right-6 z-[60]

          p-3 rounded-full
          bg-white/10 backdrop-blur-md
          border border-white/20

          hover:bg-red-500/80
          hover:scale-110

          transition-all duration-300
        "
            >
                <X className="text-white" size={20} />
            </button>

            {/* CONTENT WRAPPER */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="
          relative
          w-full max-w-2xl
          max-h-[85vh]

          bg-black/40 backdrop-blur-2xl
          border border-white/10
          rounded-2xl

          shadow-[0_30px_80px_rgba(0,0,0,0.8)]

          p-6 md:p-8
          overflow-y-auto

          animate-in zoom-in-95 fade-in duration-300
        "
            >
                {children}
            </div>
        </div>
    );
}