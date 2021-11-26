import { DocumentDefinition, FilterQuery, QueryOptions } from "mongoose"
import PledgeModel, { PledgeDocument } from "../models/pledge.model"

export const createPledge = async(input: DocumentDefinition<Omit<PledgeDocument,"createdAt" | "updatedAt"|"pledgeId">>)=>{
    return PledgeModel.create(input)
}
export const findPledge = async(query:FilterQuery<PledgeDocument>,options:QueryOptions = {lean:true})=>{
    return PledgeModel.findOne(query,{},options)
}

export const findAllPledges = async(query:FilterQuery<PledgeDocument>,options:QueryOptions = {lean:true})=>{
    return PledgeModel.find(query,{},options)
}