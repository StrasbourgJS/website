export interface HeroProps {
  children: React.ReactNode;
}
export const Hero = ({ children }: HeroProps) => {
  return (
    <div
      className="py-20 flex items-center"
      style={{
        backgroundImage: `linear-gradient(0.25turn, #5012FF 65%, #F2EEFF)`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 w-full">{children}</div>
    </div>
  );
};
