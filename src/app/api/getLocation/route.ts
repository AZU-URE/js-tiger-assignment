import { client } from "@/helper/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const connect = await client.connect();
  if (connect) {
    console.log("connected to db");
  }
  const data = await client
    .db("js-tiger-assignment")
    .collection("locations")
    .find({})
    .toArray();

  return NextResponse.json({ data: { data: data } });
}
