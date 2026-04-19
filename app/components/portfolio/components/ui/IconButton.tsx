type Props = {
  icon: React.ReactNode;
  href: string;
  color?: string;
  download?: boolean;
  label: string;
};

export function IconButton({ icon, href, color = "", download, label }: Props) {
  return (
    <div className="relative group flex flex-col items-center">
      <a
        href={href}
        download={download}
        target={download ? undefined : "_blank"}
        rel="noopener noreferrer"
        className={`
                    p-3 rounded-full bg-black/20 text-white 
                    transition-all duration-300 hover:scale-110
                    ${color}
                `}
      >
        {icon}
      </a>

      {/* TOOLTIP */}
      <span
        className="
                    absolute top-full mt-2
                    px-2 py-1 text-xs rounded-md

                    bg-black/80 text-white whitespace-nowrap

                    opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0

                    transition-all duration-300
                    pointer-events-none z-50 
                "
      >
        {label}
      </span>
    </div>
  );
}
