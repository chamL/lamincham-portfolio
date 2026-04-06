"use client";

import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/rasta.png";
import { HeaderProps } from "../../../types/header";
import NavMenu from "./NavMenu";
import ProfileDropDown from "./ProfileDropDown";

function Header({ title }: HeaderProps) {
  return (
    <header
      className="
                fixed top-0 left-0 right-0 z-50
                w-full h-20

                backdrop-blur-2xl
                border-b border-white/30

                shadow-[0_4px_30px_rgba(0,0,0,0.3)]
            "
    >
      <div
        className="
                    relative
                    flex items-center justify-between
                    h-full
                    px-6 md:px-10
                "
      >
        {/* LEFT SIDE */}
        <div className="flex items-center ">
          {/* PROFILE DROPDOWN */}
          <ProfileDropDown />

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              width={45}
              height={45}
              className="rounded-full shadow-md"
            />
          </Link>
        </div>

        {/* TITLE (CENTERED ABSOLUTE) */}
        <h1
          className="
                        absolute left-1/2 -translate-x-1/2

                        text-xl md:text-3xl
                        font-bold tracking-wide

                        bg-gradient-to-r from-blue-400 to-purple-400
                        bg-clip-text text-transparent

                        drop-shadow-md
                    "
        >
          {title}
        </h1>

        {/* RIGHT SIDE */}
        <div className="flex items-center">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
