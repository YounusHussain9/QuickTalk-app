import { getJWTPayload } from "@/app/utils/auth";
import { sql } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  //get current login user
  const jwtPayload = await getJWTPayload();

  //fetch user data
  const res = await sql(
    "select id, username, avatar from public.users where id = $1",
    [jwtPayload.sub]
  );

  const user = res.rows[0];
  // return user data
  return NextResponse.json({ data: user });
}
