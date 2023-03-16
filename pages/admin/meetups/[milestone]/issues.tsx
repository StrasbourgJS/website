import { SubNav } from "@/src/components/Admin/SubNav";
import { Title } from "@/src/components/Admin/Title";
import { GithubIssue } from "@/src/components/GithubIssue";
import { DashboardLayout } from "@/src/layouts/DashboardLayout";
import { getIssues } from "@/src/services/getIssues";
import { getMileStoneByNumber } from "@/src/services/getMileStoneByNumber";
import { guardAuth } from "@/src/services/guardAuth";
import { transformIssue } from "@/src/services/transformIssue";
import { User } from "@supabase/supabase-js";
import { GetServerSideProps } from "next";

export interface AdminPageProps {
  user: User;
  milestoneIssues: Array<any>;
  milestone: any;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const user = await guardAuth(req.cookies);

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const milestoneNumber: number = (params as any).milestone;

  const [milestone, milestoneIssues] = await Promise.all([
    getMileStoneByNumber(milestoneNumber),
    getIssues(milestoneNumber),
  ]);

  return {
    props: {
      user: user.data.user,
      milestoneIssues: milestoneIssues.map(transformIssue),
      milestone,
    },
  };
};

export default function MileStonePage({
  user,
  milestone,
  milestoneIssues,
}: AdminPageProps) {
  return (
    <DashboardLayout
      user={user}
      title={<Title>{milestone.title}</Title>}
      subNav={<SubNav />}
    >
      <div className="rounded bg-white px-2">
        {milestoneIssues.map((issue) => (
          <div key={issue.id} className="py-4 border-b border-b-gray-100">
            <GithubIssue key={issue.id} issue={issue} />
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
