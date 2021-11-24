import {number, object, string, TypeOf} from 'zod'


const payload = {
    body: object({
        title: string().nonempty("Email is required"),
        pledgeGoal: number().nonnegative("Number must be positive"),
        description: string().nonempty("Description can't be empty"),
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

export type CreateProductInput = TypeOf<typeof createProductSchema>
export type UpdateProductInput = TypeOf<typeof updateProductSchema>
export type FindProductInput = TypeOf<typeof findProductSchema>