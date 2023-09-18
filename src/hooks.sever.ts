import { start_postgres } from "$db/postgres";



start_postgres().then(()=> {
  console.log("faild to connect")
})

