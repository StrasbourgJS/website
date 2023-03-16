import Link from "next/link";
import { useRouter } from "next/router";

export const SubNav = () => {
  const router = useRouter();
  const milestoneNumber = router.query.milestone;

  const linkClass = "px-4 py-2 block";

  return (
    <nav className="bg-slate-100">
      <ul className="flex flex-row gap-4 max-w-5xl px-4 mx-auto">
        <li>
          <Link
            href={`/admin/meetups/${milestoneNumber}/issues`}
            className={linkClass}
          >
            Issues du Meetup
          </Link>
        </li>

        <li>
          <Link
            href={`/admin/meetups/${milestoneNumber}/issues-no-milestone`}
            className={linkClass}
          >
            Issues sans milestone
          </Link>
        </li>
      </ul>
    </nav>
  );
};
