import { FaMeetup } from "react-icons/fa";
import { IconGrid } from "../IconGrid/IconGrid";
import { Logo } from "../Logo";

export const NoEventHero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="flex-1 mb-4 text-white lg:mb-0 justify-center text-center lg:justify-start lg:text-left">
        <Logo className="h-10 mb-4 md:h-auto" />

        <p className="text-white md:text-3xl font-mono leading-relaxed">
          Pas de meetups prévus pour le moment !
        </p>
      </div>

      <div className="flex flex-auto text-sm md:justify-end">
        <IconGrid>{""}</IconGrid>
      </div>
    </div>
  );
};
