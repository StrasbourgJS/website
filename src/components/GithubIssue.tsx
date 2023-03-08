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
    <details onToggle={() => setIsOpen((state) => !state)}>
      <summary className="list-none cursor-pointer">
        <div className="flex flex-row items-center gap-4">
          {isOpen ? (
            <FiChevronUp className={"h-6 w-6"} aria-hidden />
          ) : (
            <FiChevronDown className={"h-6 w-6"} aria-hidden />
          )}

          <div className="flex-grow">
            <h3 className="text-lg font-bold">{issue.title}</h3>
            <p className="text-gray-600">
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
          <a href={issue.html_url} target="_blank" rel="nofollow">
            <FiArrowUpRight className={"h-9 w-9 p-2 hover:text-slate-400"} />
          </a>
        </div>
      </summary>
      <div
        dangerouslySetInnerHTML={{ __html: issue.body }}
        className="pt-4 pl-10 leading-relaxed prose-sm prose prose-slate"
      />
    </details>
  );
};
