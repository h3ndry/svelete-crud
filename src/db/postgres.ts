import { Client } from 'pg'
import { POSTGRES_URL } from '$env/static/private'

const client = new Client({
  connectionString: POSTGRES_URL,
})

export function start_postgres () {
  console.log("starting postgres")
  return client.connect()
}

