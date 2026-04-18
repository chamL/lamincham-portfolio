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
            {createPortal(
                <>
                    {/* OVERLAY */}
                    {open && (
                        <div
                            onClick={() => setOpen(false)}
                            className="
                fixed inset-0
                z-[100]
              "
                        />
                    )}

                    {/* DROPDOWN (UNDER HEADER) */}
                    <div
                        className="
              fixed left-0 top-[5rem]   /* 80px = header height */
              z-[150]
              pointer-events-none
            "
                    >
                        <DropdownWrapper open={open}>
                            <ProfileCard open={open} />
                            <ProfileButton
                                open={open}
                                onClick={() => setOpen(!open)}
                            >
                                Card
                            </ProfileButton>
                        </DropdownWrapper>
                    </div>
                </>,
                document.body
            )}
        </>
    );
}

export default ProfileDropDown;