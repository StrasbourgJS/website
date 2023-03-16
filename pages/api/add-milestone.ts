import { createMileStone } from "@/src/services/createMileStone";
import { guardAuth } from "@/src/services/guardAuth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.body.dueDate) {
    return res.redirect("/admin/meetups/create?invalidBody=true");
  }

  const user = await guardAuth(req.cookies);

  if (!user) {
    return res.redirect("/admin/meetups/create?invalidUser=true");
  }
  const { dueDate } = req.body;
  const date = new Date(dueDate);

  const formatter = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
  const formattedDate = formatter.format(date);

  const milestone = {
    title: `Strasbourg JS - ${formattedDate}`,
    state: "open",
    description: "",
    due_on: new Date(dueDate).toISOString(),
  };

  const milestoneCreated = await createMileStone(milestone);

  return res.redirect(`/admin/meetups/${milestoneCreated.number}/issues`);
}
