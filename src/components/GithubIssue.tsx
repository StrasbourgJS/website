import { useState } from "react";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiChevronUp,
  FiCodepen,
} from "react-icons/fi";

export const GithubIssue = ({ issue }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      onToggle={() => setIsOpen((state) => !state)}
      className="list-none"
    >
      <summary className="list-none cursor-pointer appearance-none">
        <div className="flex flex-row  gap-4">
          {isOpen ? (
            <FiChevronUp
              className={"h-6 w-6 flex-shrink-0 text-slate-300"}
              aria-hidden
            />
          ) : (
            <FiChevronDown
              className={"h-6 w-6 flex-shrink-0 text-slate-300"}
              aria-hidden
            />
          )}

          <div className="flex-grow">
            <h3 className="text-base md:text-2xl font-bold text-white">
              {issue.title}
            </h3>
            <p className="text-slate-100">
              Par{" "}
              <a
                href={issue.user.html_url}
                className="font-semibold underline text black"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                @{issue.user.login}
              </a>
            </p>
          </div>
          <a
            href={issue.html_url}
            target="_blank"
            rel="nofollow"
            aria-label="Voir le detail sur Meetup"
            className="hidden md:block"
          >
            <FiArrowUpRight
              className={
                "h-6 w-6 p-1 lg:h-9 lg:w-9 lg:p-2 text-slate-300 hover:text-slate-400"
              }
            />
          </a>
        </div>
      </summary>
      <div
        dangerouslySetInnerHTML={{ __html: issue.body }}
        className="pt-4 pl-10 leading-relaxed prose text-slate-100 prose-strong:text-slate-100 prose-a:text-slate-100"
      />
    </details>
  );
};
