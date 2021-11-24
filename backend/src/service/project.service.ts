import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import ProjectModel, { ProjectDocument } from "src/models/project.model"

export const findProject = async(query:FilterQuery<ProjectDocument>,options:QueryOptions = {lean:true})=>{
    return ProjectModel.findOne(query,{},options)
}

export const createProject = async(input: DocumentDefinition<Omit<ProjectDocument,"createdAt" | "updatedAt">>)=>{
    return ProjectModel.create(input)
}

export const findAndUpdateProject = async(query: FilterQuery<ProjectDocument>,
    update: UpdateQuery<ProjectDocument>,
    options: QueryOptions)=>{
        return ProjectModel.findOneAndUpdate(query, update, options);
}