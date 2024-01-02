import { sql } from "@/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const json = await request.json();
  const res = await sql(
    "select id, user from public.users where username ilike $1",
    [json.username]
  );

  if (res.rowCount !== null && res.rowCount > 0) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(json.password, saltRounds);

  await sql("insert into public.users (username, password) values ($1, $2)", [
    json.username,
    hashPassword,
  ]);

  return NextResponse.json({ msg: "Register succesfuly" }, { status: 201 });
};
