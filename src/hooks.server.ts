import { db_client  } from "$db/postgres";



db_client.connect().then(()=> {
  console.log("conneted to postgres")
}).catch((e)=> {
  console.log(e)
})

