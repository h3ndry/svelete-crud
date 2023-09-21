import { db_client } from "$lib/server/db/postgres"



db_client.connect().then(()=> {
  console.log("conneted to postgres")
}).catch((e)=> {
  console.log(e)
})

