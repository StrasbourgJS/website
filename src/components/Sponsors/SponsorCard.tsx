import Link from "next/link";
import { useRef } from "react";

export interface SponsorCardProps {
  url: string;
  img: React.ReactNode;
  children: string;
}

export const SponsorCard = ({ url, img, children }: SponsorCardProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div
      onClick={() => linkRef?.current?.click()}
      className="bg-white rounded-lg p-6 flex items-center justify-center border-4 border-transparent hover:border-indigo-400 active:bg-opacity-20 cursor-pointer text-black"
    >
      <Link
        href={url}
        ref={linkRef}
        target="_blank"
        rel="noopener referrer"
        aria-label={children}
      >
        {img}
      </Link>
    </div>
  );
};
