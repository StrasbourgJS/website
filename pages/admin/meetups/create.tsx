import { Title } from "@/src/components/Admin/Title";
import { DashboardLayout } from "@/src/layouts/DashboardLayout";
import { guardAuth } from "@/src/services/guardAuth";
import { User } from "@supabase/supabase-js";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export interface AdminPageProps {
  user: User;
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

  return {
    props: {
      user: user.data.user,
    },
  };
};

export default function MeetupCreate({ user }: AdminPageProps) {
  const router = useRouter();
  const { invalidBody, invalidUser } = router.query;

  const labelClass = "block font-bold pb-1";
  const inputClass = "border border-gray-300 rounded px-2 py-1 text-3xl";
  return (
    <DashboardLayout user={user} title={<Title>Créer un Meetup</Title>}>
      {invalidBody && (
        <div className="bg-red-50 border-l-4 border-l-red-500 text-red-800 p-4 rounded mb-4">
          Les champs remplis sont invalides
        </div>
      )}

      {invalidUser && (
        <div className="bg-red-50 border-l-4 border-l-red-500 text-red-800 p-4 rounded mb-4">
          {`L'utilisateur actuel ne peut pas faire ce genre d'actions`}
        </div>
      )}

      <form
        method="post"
        action="/api/add-milestone"
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="dueDate" className={labelClass}>
            Due date
          </label>
          <input
            type="datetime-local"
            name="dueDate"
            id="dueDate"
            className={inputClass}
          />
        </div>

        <div>
          <button className="px-4 py-2 rounded bg-indigo-700 text-white">
            Créer
          </button>
        </div>
      </form>
    </DashboardLayout>
  );
}
