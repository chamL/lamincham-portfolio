"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import DropdownWrapper from "./DropDownWrapper";
import ProfileCard from "./ProfileCard";
import ProfileButton from "./ProfileButton";

function ProfileDropDown() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open &&
                createPortal(
                    <div
                        onClick={() => setOpen(false)}
                        className="
        fixed inset-0
        bg-black/20 backdrop-blur-[2px]
        z-20
        transition-opacity duration-300
    "
                    />,
                    document.body,
                )}

            {/* DROPDOWN */}
            <div className="absolute left-0 top-full pointer-events-none z-[100]">
                <DropdownWrapper open={open}>
                    <ProfileCard open={open} />
                    <ProfileButton open={open} onClick={() => setOpen(!open)}>
                        About Me
                    </ProfileButton>
                </DropdownWrapper>
            </div>
        </>
    );
}

export default ProfileDropDown;
