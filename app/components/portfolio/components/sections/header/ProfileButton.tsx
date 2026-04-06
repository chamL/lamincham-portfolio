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

                bg-black/20
                backdrop-blur-xl
                text-white

                rounded-b-xl
                border border-white/20 border-t-0 

                shadow-xl

                hover:bg-white/5
                hover:shadow-insetStrong

                transition-all duration-300

                relative z-20
            "
    >
      {children}
    </button>
  );
}

export default ProfileButton;
