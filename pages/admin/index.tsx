import { Milestone } from "@/src/components/Admin/Milestone";
import { Title } from "@/src/components/Admin/Title";
import { DashboardLayout } from "@/src/layouts/DashboardLayout";
import { getMileStones } from "@/src/services/getMileStones";
import { guardAuth } from "@/src/services/guardAuth";
import { User } from "@supabase/supabase-js";
import { GetServerSideProps } from "next";

export interface AdminPageProps {
  user: User;
  milestones: Array<any>;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const user = await guardAuth(req.cookies);

  if (!user) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  const milestones = await getMileStones("open");

  return {
    props: {
      user: user.data.user,
      milestones,
    },
  };
};

export default function AdminPage({ user, milestones }: AdminPageProps) {
  return (
    <DashboardLayout user={user} title={<Title>Dashboard</Title>}>
      <div className="rounded bg-white px-2">
        {milestones.map((milestone) => (
          <Milestone key={milestone.number} milestone={milestone} />
        ))}
      </div>
    </DashboardLayout>
  );
}
