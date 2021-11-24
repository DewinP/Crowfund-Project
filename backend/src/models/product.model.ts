import mongoose from 'mongoose'
import {UserDocument} from './user.model'
import {customAlphabet, nanoid} from 'nanoid'
import { number, string } from 'zod'

const nanoId = customAlphabet("0123456789qwertyuioplkjhgfdsazxcvbnm",10)

export interface ProductDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title:string;
    description: string;
    pledgeGoal: number;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        productId:{
            type: string,
            required:true,
            unique: true,
            default:()=> `product_${nanoId()}`

        },
        title:{type:string, required:true},
        description:{type:string, required: true},
        pledgeGoal:{ type:number, required:true}
      },
      {
        timestamps: true,
      }
)

const ProductModel = mongoose.model<ProductDocument>("Product", productSchema)

export default ProductModel;

