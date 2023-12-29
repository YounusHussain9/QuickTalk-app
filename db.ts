import { Client, QueryResult } from "pg";
import { loadEnvConfig } from "@next/env";

// laodConfig does is that it will take what is in this dot env dot  file and load it in as env
const projectDir = process.cwd();
loadEnvConfig(projectDir);

export const getClient = async (): Promise<Client> => {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });
  return client;
};

export const sql = async (
  sql: string,
  values?: Array<any>
): Promise<QueryResult<any>> => {
  const client = await getClient();
  await client.connect();
  const res = await client.query(sql, values);
  await client.end();
  return res;
};
