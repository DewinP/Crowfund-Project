import { number, object, string, TypeOf } from 'zod'


const payload = {
    body: object({
        address: string().nonempty("Address is required"),
        amount: number(),
        status: string().nonempty("Status is required")
    })
}

const params = {
    params: object({
        projectId: string(),
        pledgeId: string(),

    })
}


   export const createPledgeSchema = object({
       ...payload,
       ...params
   })
   
   export const findPledgeSchema = object({
       ...params
   })

export type CreatePledgeInput = TypeOf<typeof createPledgeSchema>
export type FindPledgeInput = TypeOf<typeof findPledgeSchema>