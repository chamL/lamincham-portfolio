type Props = {
  icon: React.ReactNode;
  href: string;
  color?: string;
  download?: boolean;
  label: string;
};

export function IconButton({ icon, href, color = "", download, label }: Props) {
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`
        flex flex-col items-center justify-center
        w-14 h-14 md:w-12 md:h-12
        rounded-xl
        bg-black/30 text-white
        transition-all duration-200
        active:scale-90
        ${color}
      `}
    >
      {icon}

      {/* TEXT under icon (mobile friendly) */}
      <span className="text-[10px] mt-1 opacity-70 md:hidden">
        {label}
      </span>
    </a>
  );
}