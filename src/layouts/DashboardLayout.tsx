import { User } from "@/src/types";
import { MainNav } from "../components/Admin/MainNav";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  user: User;
  title: React.ReactNode;
  subNav?: React.ReactNode;
}

export const DashboardLayout = ({
  children,
  user,
  title,
  subNav,
}: DashboardLayoutProps) => {
  return (
    <div className="bg-slate-50 h-full min-h-screen">
      <MainNav user={user} />

      <main>
        <div className="max-w-5xl px-4 mx-auto py-12">{title}</div>

        {subNav}

        <div className="max-w-5xl px-4 mx-auto py-8">{children}</div>
      </main>
    </div>
  );
};
