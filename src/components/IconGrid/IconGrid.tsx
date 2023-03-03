import { SvgGrid } from "./SvgGrid";

export interface IconGridProps {
  children: React.ReactNode;
}

export const IconGrid = ({ children }: IconGridProps) => {
  return (
    <div className="relative min-h-[400px] min-w-[400px]">
      <div className="overflow-hidden rounded-full h-[400px] w-[400px] absolute inset-0">
        <div className="bg-primary text-primaryDark">
          <SvgGrid />
        </div>
      </div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
