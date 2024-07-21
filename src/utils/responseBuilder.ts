import { dataProps } from "@/types/api";
import { NextApiResponse } from "next";

export default function responseBuilder(data: dataProps, res: NextApiResponse) {
  return res.status(data.status).json(data);
}
