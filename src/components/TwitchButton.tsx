import { FaTwitch } from "react-icons/fa";

export interface TwitchButtonProps {
  href: string;
  children: React.ReactNode;
}

export const TwitchButton = ({ href, children }: TwitchButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="items-center border-4 text-white flex flex-row gap-4 px-3 py-1 md:px-10 md:py-4 font-semibold md:text-2xl rounded-lg"
    >
      <FaTwitch className="w-10 h-10" />
      {children}
    </a>
  );
};
