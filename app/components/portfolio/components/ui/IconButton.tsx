type Props = {
  icon: React.ReactNode;
  href: string;
  download?: boolean;
  label: string;
};

export function IconButton({ icon, href, download, label }: Props) {
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="
        flex flex-col items-center justify-center
        w-14 h-14
        rounded-xl
        bg-black/30 text-white
        backdrop-blur-md
        active:scale-90
        transition-all duration-200
        touch-manipulation
      "
    >
      {icon}

      <span className="text-[10px] mt-1 opacity-70">
        {label}
      </span>
    </a>
  );
}