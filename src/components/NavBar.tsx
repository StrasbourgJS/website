import { FaMeetup, FaTwitch } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Logo } from "./Logo";
import { RiDiscussLine } from "react-icons/ri";
import Link from "next/link";

export const NavBar = () => {
  const linkClass =
    "font-bold text-primary hover:bg-gray-50 active:bg-gray-100 px-3 py-2 block rounded-lg flex flex-row items-center gap-2 justify-center";

  const iconClass = "text-4xl md:text-lg";

  return (
    <nav
      aria-label="Navigation principale"
      className="flex flex-row justify-between items-center px-4 md:px-8 py-4"
    >
      <Link href={"/"} aria-label="Page d'accueil">
        <Logo className="h-6 text-sm w-auto hidden md:block" />
      </Link>

      <ul className="flex flex-row gap-4 text font-mono justify-center md:justify-end items-center w-full">
        <li>
          <a
            href="https://www.youtube.com/@strasbourgjs"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <AiOutlineYoutube aria-label="Youtube" className={iconClass} />
            <span className="hidden md:block">Youtube</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.twitch.tv/strasbourgjs"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <FaTwitch aria-label="Twitch" className={iconClass} />
            <span className="hidden md:block">Twitch</span>
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/StrasbourgJS/talks/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <RiDiscussLine
              aria-label="Un talk, une idee?"
              className={iconClass}
            />
            <span className="hidden md:block">Un talk, une idee?</span>
          </a>
        </li>

        <li>
          <Link
            href="https://www.meetup.com/fr-FR/StrasbourgJS/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <FaMeetup aria-label="Meetup" className={iconClass} />
            <span className="hidden md:block">Meetup</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
