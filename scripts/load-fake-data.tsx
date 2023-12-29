import { Client } from "pg";
import { loadEnvConfig } from "@next/env";
import { faker } from "@faker-js/faker";

// laodConfig does is that it will take what is in this dot env dot  file and load it in as env
const projectDir = process.cwd();
loadEnvConfig(projectDir);

const loadFakeData = async (num_of_users: number) => {
  console.log(num_of_users);
  // console.log(`total number of users are ${num_of_users}`);

  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });

  // for make connection with postgres
  await client.connect();
  try {
    await client.query("begin");
    for (let i = 0; i < num_of_users; i++) {
      await client.query(
        "insert into public.users (username, password, avatar) values ($1, $2, $3)",
        [faker.internet.userName(), "pass", faker.image.avatar()]
      );
    }

    // i want to get the last users that were created but limit it to num of users
    const res = await client.query(
      "select id from public.users order by created_at desc limit $1",
      [num_of_users]
    );

    console.log(res.rows);

    //  post creations
    // allow us to loop through each row or id of the recently created users
    for (const row of res.rows) {
      // every user will have between 1 to 10 post generated
      for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
        await client.query(
          "insert into public.posts (user_id, content) values ($1, $2)",
          [row.id, faker.lorem.sentence()]
        );
      }
    }

    //followers

    for (const row1 of res.rows) {
      for (const row2 of res.rows) {
        if (row1.id !== row2.id) {
          if (Math.random() > 0.5) {
            await client.query(
              "insert into public.follows (user_id, follower_id) values ($1, $2)",
              [row1.id, row2.id]
            );
          }
        }
      }
    }

    await client.query("commit");
  } catch (error) {
    await client.query("rollback");
    throw error;
  } finally {
    //   close out the connection
    await client.end();
  }
};

const num_of_users = parseInt(process.argv[2]) || 5;
loadFakeData(num_of_users);
