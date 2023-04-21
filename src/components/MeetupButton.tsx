import { FaMeetup } from "react-icons/fa";

export interface MeetupButtonProps {
  href: string;
  children: React.ReactNode;
}

export const MeetupButton = ({ href, children }: MeetupButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="items-center bg-red-600 hover:bg-red-500 active:bg-red-400 text-white flex flex-row gap-4 px-3 py-1 md:px-10 md:py-4 font-semibold md:text-2xl rounded-lg"
    >
      <FaMeetup className="w-10 h-10" />
      {children}
    </a>
  );
};
