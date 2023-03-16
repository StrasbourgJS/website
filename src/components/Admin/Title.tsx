export interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return <h1 className="text-6xl font-extrabold">{children}</h1>;
};
