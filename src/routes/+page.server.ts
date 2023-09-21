import { users } from '$db/users'
import type { PageServerLoad } from './$types'


export const load: PageServerLoad = async function () {
  const data = await users

  console.log(data.rows)
  return {
    users: data.rows
  }

}
