import bcrypt from "bcrypt";
import { getClient } from "@/db";

const loadAdmin = async (username: string, password: string) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(password, saltRounds);

  const client = await getClient();

  await client.connect();

  await client.query(
    "insert into public.users (username, password, is_admin) values ($1, $2, $3)",
    [username, hashPassword, true]
  );
  await client.end();
};

const username = process.argv[2];
const password = process.argv[3];
loadAdmin(username, password);
