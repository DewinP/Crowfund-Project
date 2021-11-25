import {date, number, object, string, TypeOf} from 'zod'


const payload = {
    body: object({
        title: string().nonempty("Email is required"),
        pledgeGoal: number().nonnegative("Number must be positive"),
        description: string().nonempty("Description can't be empty"),
        dueDate: date()
    })
}

const params = {
    params: object({
        projectId: string().nonempty("ProjectId is required"),
    })
}


export const updateProjectSchema = object({
 ...payload,
 ...params
})

export const createProjectSchema = object({
    ...payload
})

export const findProjectSchema = object({
    ...params
})

export type CreateProjectInput = TypeOf<typeof createProjectSchema>
export type UpdateProjectInput = TypeOf<typeof updateProjectSchema>
export type FindProjectInput = TypeOf<typeof findProjectSchema>