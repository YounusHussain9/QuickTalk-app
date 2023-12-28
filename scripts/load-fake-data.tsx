import { Client } from "pg";
import {loadEnvConfig} from '@next/env'

// laodConfig does is that it will take what is in this dot env dot ;oncancel; file and load it in as env
const projectDir = process.cwd();
loadEnvConfig(projectDir)

const loadFakeData = async (num_of_users: number = 10)=>{
    console.log(`total number of users are ${num_of_users}`)

    const client = new Client({
        user: process.env.POSTGRES_USER,
        host:process.env.POSTGRES_HOST,
        database:process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT!),
    });

await client.connect()
    const res =await client.query('select 1');
    console.log(res)
    await client.end()
}

loadFakeData();