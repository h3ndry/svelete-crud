import { Client } from 'pg'
import { POSTGRES_URL } from '$env/static/private'

export const db_client = new Client({
  connectionString: POSTGRES_URL,
})



