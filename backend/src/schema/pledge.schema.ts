import { object, string, TypeOf } from 'zod'


const payload = {
    body: object({
        sessionId: string(),
        projectId:string()
    })
}

const params = {
    params: object({
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