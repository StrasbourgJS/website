import { User } from "@/src/types";
import Link from "next/link";

export interface MainNavProps {
  user: User;
}

export const MainNav = ({ user }: MainNavProps) => {
  return (
    <nav className="p-4 bg-slate-900 text-white">
      <ul className="flex flex-row gap-4 justify-end items-center">
        <li>
          <Link
            href="/admin"
            className="px-4 py-2 bg-slate-800 rounded hover:bg-slate-700 active:bg-slate-600"
          >
            Accueil du dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/admin/meetups/create"
            className="px-4 py-2 bg-slate-800 rounded hover:bg-slate-700 active:bg-slate-600"
          >
            Créer un meetup
          </Link>
        </li>

        <li>
          <a
            href={`https://github.com/${user.login}`}
            className="px-4 py-2 bg-slate-800 rounded hover:bg-slate-700 active:bg-slate-600"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            @{user.login}
          </a>
        </li>
      </ul>
    </nav>
  );
};
