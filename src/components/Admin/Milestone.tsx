import Link from "next/link";

export interface MilestoneProps {
  milestone: any;
}

export const Milestone = ({ milestone }: MilestoneProps) => {
  return (
    <div className="py-2">
      <h3 className="text-lg font-bold">
        <Link href={`/admin/meetups/${milestone.number}/issues`}>
          {milestone.title}
        </Link>
      </h3>
    </div>
  );
};
