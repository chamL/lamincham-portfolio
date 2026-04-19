"use client";

type Props = {
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function ProfileButton({ open, onClick, children }: Props) {
  return (
    <button
      onClick={onClick}
      className="
                px-6 py-3 ml-4 

                bg-bg
                text-text

                rounded-b-xl
                border border-border border-t-0 -translate-y-[1px]

                shadow-xl

                hover:shadow-insetStrong

                transition-all duration-300

                relative   
                pointer-events-auto
            "
    >
      {children}
    </button>
  );
}

export default ProfileButton;
