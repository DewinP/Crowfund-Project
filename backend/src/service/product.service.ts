import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose"
import ProductModel, { ProductDocument } from "src/models/product.model"

export const findProduct = async(query:FilterQuery<ProductDocument>,options:QueryOptions = {lean:true})=>{
    return ProductModel.findOne(query,{},options)
}

export const createProduct = async(input: DocumentDefinition<Omit<ProductDocument,"createdAt" | "updatedAt">>)=>{
    return ProductModel.create(input)
}

export const findAndUpdateProduct = async(query: FilterQuery<ProductDocument>,
    update: UpdateQuery<ProductDocument>,
    options: QueryOptions)=>{
        return ProductModel.findOneAndUpdate(query, update, options);
}