import { tradeCodeForToken } from "@/src/services/tradeCodeForToken";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;

  const tokens = await tradeCodeForToken(code?.toString() || "");

  res.setHeader(
    "set-cookie",
    `accessToken=${tokens.accessToken}; path=/; samesite=lax; httponly;`
  );

  res.redirect("/admin");
}
