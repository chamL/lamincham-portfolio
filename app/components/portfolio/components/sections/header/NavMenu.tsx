"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Footer", href: "#footer" },
];

function NavMenu() {
  return (
    <DropdownMenu.Root>
      {/* BUTTON */}
      <DropdownMenu.Trigger asChild>
        <button
          className="
        px-4 py-2
        bg-glass-soft backdrop-blur-xl
        text-white

        rounded-lg
        border border-white/10
        outline-none

        shadow-md

        data-[state=open]:shadow-insetSoft
        data-[state=open]:scale-95

        hover:bg-white/5
        hover:shadow-xl

        transition-all duration-300
    "
        >
          <Menu />
        </button>
      </DropdownMenu.Trigger>

      {/* MENU */}
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={8}
          className="
                        w-48 p-5 pt-8

                        bg-glass-soft backdrop-blur-xl
                        border border-white/10
                        rounded-xl

                        shadow-[0_10px_40px_rgba(0,0,0,0.4)]

                        flex flex-col gap-3

                        animate-in fade-in zoom-in-95
                        data-[side=bottom]:slide-in-from-top-2
                    "
        >
          {links.map((link) => (
            <DropdownMenu.Item key={link.name} asChild>
              <a
                href={link.href}
                className="
                                    text-white/80 text-sm
                                    text-left

                                    hover:text-blue-400
                                    hover:translate-x-[-4px]
                                    outline-none

                                    transition-all duration-200
                                "
              >
                {link.name}
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default NavMenu;
