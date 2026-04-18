"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import DropdownWrapper from "./DropDownWrapper";
import ProfileCard from "./ProfileCard";
import ProfileButton from "./ProfileButton";

function ProfileDropDown() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // sørger for at vi er på client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <>
            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-[100]"
                />
            )}

            {/* DROPDOWN */}
            <div className="fixed left-0 top-[5rem] z-[150] pointer-events-none">
                <DropdownWrapper open={open}>
                    <ProfileCard open={open} />
                    <ProfileButton open={open} onClick={() => setOpen(!open)}>
                        Card
                    </ProfileButton>
                </DropdownWrapper>
            </div>
        </>,
        document.body
    );
}

export default ProfileDropDown;