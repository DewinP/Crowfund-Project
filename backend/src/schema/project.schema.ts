import { date, number, object, string, TypeOf } from 'zod'


const payload = {
    body: object({
        name: string().nonempty("Email is required").max(50,"Name must be 50 chars or less"),
        pledgeGoal: number().min(1000,"Funding goal must be 1,000 or more"),
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

export const deleteProjectSchema = object({
    ...params
})

export type CreateProjectInput = TypeOf<typeof createProjectSchema>
export type UpdateProjectInput = TypeOf<typeof updateProjectSchema>
export type FindProjectInput = TypeOf<typeof findProjectSchema>
export type DeleteProjectInput = TypeOf<typeof deleteProjectSchema>