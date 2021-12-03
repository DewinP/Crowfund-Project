import { boolean, object, string, TypeOf } from 'zod'


const payload = {
    body: object({
        sessionId: string().nonempty(),
        projectId:string().nonempty(),
        isBacker: boolean().default(false),

    })
}

const params = {
    params: object({
        pledgeId: string(),
        projectId:string()
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