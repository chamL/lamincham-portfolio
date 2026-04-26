"use client";

import {
    FiHeart,
    FiUser,
    FiCompass,
    FiGrid,
    FiStar,
    FiSettings,
} from "react-icons/fi";

type Props = {
    isOpen: boolean;
};

export default function Sidebar({ isOpen }: Props) {
    return (
        <aside
            className={`
        fixed top-20 left-0 bottom-0 z-40 w-72

        bg-card backdrop-blur-lg
        border-r border-border

        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
        >
            <div className="p-6 space-y-6">
                {[
                    { icon: <FiStar />, label: "Release" },
                    { icon: <FiGrid />, label: "Shop" },
                    { icon: <FiCompass />, label: "Explore" },
                    { icon: <FiUser />, label: "Profile" },
                    { icon: <FiHeart />, label: "Favorites" },
                    { icon: <FiSettings />, label: "Settings" },
                ].map((item, i) => (
                    <button
                        key={i}
                        className="
              flex items-center gap-3 w-full
              text-sm font-medium

              hover:text-accent
              transition
            "
                    >
                        <span className="text-lg">{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </div>
        </aside>
    );
}