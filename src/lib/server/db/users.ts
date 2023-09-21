import { db_client } from "./postgres";

export const users = db_client.query('SELECT city FROM users LIMIT 100;')
