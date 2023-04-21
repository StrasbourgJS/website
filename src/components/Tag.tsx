export interface TagProps {
  children: React.ReactNode;
  size: "M" | "L";
  dotColor?: string;
}

const SizeClassName = {
  M: "px-8 py-3 font-thin text-2xl",
  L: "px-10 py-4 font-semibold md:text-3xl",
};

export const Tag = ({ children, size, dotColor }: TagProps) => {
  const sizeClass = SizeClassName[size];

  return (
    <span
      className={`rounded-lg bg-black bg-opacity-20 text-white inline-flex flex-row gap-4 items-center ${sizeClass}`}
    >
      {children}

      {dotColor && (
        <span className="rounded-lg h-3 w-3" style={{ background: dotColor }} />
      )}
    </span>
  );
};
