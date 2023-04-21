export interface HeroProps {
  children: React.ReactNode;
}
export const Hero = ({ children }: HeroProps) => {
  return (
    <div
      style={{
        background: "#5012FF",
      }}
      className="py-20 flex items-center"
    >
      <div className="max-w-5xl mx-auto px-4 w-full">{children}</div>
    </div>
  );
};
