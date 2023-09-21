import { users } from '$lib/server/db/users'
// import type { PageServerLoad } from './$types'


export const load = async function () {
    const data = await users

    console.log(data.rows)
    return {
        users: data.rows
    }

}
