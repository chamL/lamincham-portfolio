type BannerProps = {
  text: string;
  bg?: string;
  textColor?: string;
  shadow?: "normal" | "inset" | "none";
  className?: string;
};

function Banner({
  text,
  bg = "bg-purple-800",
  textColor = "text-sky-400",
  shadow = "normal",
  className = "",
}: BannerProps) {
  const shadowStyles = {
    normal: "shadow-[0px_4px_10px_rgba(0,0,0,0.6)]",
    inset: "shadow-[inset_0_4px_10px_rgba(0,0,0,0.7)]",
    none: "",
  };

  return (
    <div
      className={`flex justify-center items-center text-xl font-bold my-16  h-16 rounded-lg 
        ${bg} ${textColor} ${shadowStyles[shadow]} ${className}`}
    >
      {text}
    </div>
  );
}

export default Banner;
