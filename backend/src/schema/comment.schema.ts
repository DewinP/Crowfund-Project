import { object, string, TypeOf } from 'zod'


const payload = {
    body: object({
        body:string().nonempty(),
    })
}

const params = {
    params: object({
        commentId: string(),
        projectId:string()
    })
}


   export const createCommentSchema = object({
       ...payload,
       ...params
   })
   export const updateCommentSchema = object({
    ...payload,
    ...params
})
   
   export const findCommentSchema = object({
       ...params
   })

export type CreateCommentInput = TypeOf<typeof createCommentSchema>
export type FindCommentInput = TypeOf<typeof findCommentSchema>
export type UpdateCommentInput = TypeOf<typeof updateCommentSchema>