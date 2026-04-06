"use client";

type Props = {
  open: boolean;
  children: React.ReactNode;
};

function DropdownWrapper({ open, children }: Props) {
  return (
    <div className="absolute left-0 top-full z-20">
      <div
        className={`
                    relative
                    flex flex-col items-start

                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

                    ${open ? "translate-y-0" : "-translate-y-[90%]"}
                `}
      >
        {children}
      </div>
    </div>
  );
}

export default DropdownWrapper;
