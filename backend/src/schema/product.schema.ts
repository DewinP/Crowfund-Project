import {number, object, string, TypeOf} from 'zod'


const payload = {
    body: object({
        title: string().nonempty("Email is required"),
        pledeGoal: number().nonnegative("Number must be positive"),
        description: string().nonempty("Description can't be empty")
    })
}

const params = {
    params: object({
        productId: string().nonempty("ProductId is required"),
    })
}


export const updateProductSchema = object({
 ...payload,
 ...params
})

export const createProductSchema = object({
    ...payload
})

export const findProductSchema = object({
    ...params
})

export type createProductSchema = TypeOf<typeof createProductSchema>
export type updateProductSchema = TypeOf<typeof updateProductSchema>
export type findProductSchema = TypeOf<typeof findProductSchema>