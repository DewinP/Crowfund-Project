import {number, object, string} from 'zod'

export const createProductSchema = object({
    body: object({
        title: string().email().nonempty("Email is required"),
        pledeGoal: number().nonnegative("Number must be positive").,
    })
})