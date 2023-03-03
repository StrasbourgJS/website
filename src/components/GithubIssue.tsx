import { FiChevronDown } from "react-icons/fi";

export const GithubIssue = ({ issue }: any) => {
  return (
    <details>
      <summary className="list-none">
        <div className="flex flex-row gap-4">
          <FiChevronDown className={"h-6 w-6"} aria-hidden />

          <div>
            <h3 className="font-bold text-lg">{issue.title}</h3>
            <p className="text-gray-600">
              Par{" "}
              <a
                href={issue.user.html_url}
                className="text black font-semibold underline"
                target={"_blank"}
                rel="noopener noreferrer"
              >
                @{issue.user.login}
              </a>
            </p>
          </div>
        </div>
      </summary>
      <div
        dangerouslySetInnerHTML={{ __html: issue.body }}
        className="pt-10 prose prose-sm prose-slate leading-relaxed"
      />
    </details>
  );
};
