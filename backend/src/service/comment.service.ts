import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import CommentModel, { CommentDocument } from "../models/comment.model"




export const createComment = async(input: DocumentDefinition<Omit<CommentDocument,"createdAt" | "updatedAt">>)=>{
    return CommentModel.create(input)
}
export const findComments = async(query:FilterQuery<CommentDocument>,options:QueryOptions = {lean:true})=>{
    return CommentModel.find(query,{},options)
}

export const findAndUpdateCommnet = async(query: FilterQuery<CommentDocument>,
    update: UpdateQuery<CommentDocument>,
    options: QueryOptions)=>{
        return CommentModel.findOneAndUpdate(query, update, options);
}
export const deleteComment = async(query: FilterQuery<CommentDocument>,
    )=> {
      return CommentModel.findOneAndDelete(query);
    }