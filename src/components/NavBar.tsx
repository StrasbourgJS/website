import { Logo } from "./Logo";

export const NavBar = () => {
  return (
    <nav
      aria-label="Navigation principale"
      className="flex flex-row justify-between items-center px-4 md:px-8 py-4"
    >
      <Logo className="h-6 text-sm w-auto hidden md:block" />

      <ul className="flex flex-row gap-4 text-lg font-mono">
        <li>
          <a
            href="https://www.twitch.tv/strasbourgjs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:bg-gray-50 active:bg-gray-100 px-3 py-2 block rounded-lg"
          >
            Twitch
          </a>
        </li>
        <li className="">
          <a
            href="https://github.com/StrasbourgJS/talks/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:bg-gray-50 active:bg-gray-100 px-3 py-2 block rounded-lg"
          >
            Un talk, une idee?
          </a>
        </li>

        <li>
          <a
            href="https://www.meetup.com/fr-FR/StrasbourgJS/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary hover:bg-gray-50 active:bg-gray-100 px-3 py-2 block rounded-lg"
          >
            Meetups
          </a>
        </li>
      </ul>
    </nav>
  );
};
