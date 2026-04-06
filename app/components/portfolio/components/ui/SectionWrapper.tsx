type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

function SectionWrapper({ children, id, className = "" }: Props) {
  return (
    <section id={id} className={`px-4 md:px-8 scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

export default SectionWrapper;
