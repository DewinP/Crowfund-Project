import mongoose from 'mongoose'
import { customAlphabet } from 'nanoid'
import { ProjectDocument } from './project.model'
import { UserDocument } from './user.model'

//create custom id 
const nanoId = customAlphabet("0123456789qwertyuioplkjhgfdsazxcvbnm",10)

export interface PledgeDocument extends mongoose.Document {
    user: UserDocument["_id"];
    project: ProjectDocument["_id"]
    pledgeId: string;
    projectName:string;
    sessionId:string;
    amount: number;
}

const pledgeSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        project:{type: mongoose.Schema.Types.ObjectId,ref:"Project" },
        sessionId:{type:String,required:true},
        pledgeId:{
            type: String,
            required:true,
            unique: true,
            default:()=> `order_${nanoId()}`
        },
        projectName:{type:String,required:true},
        amount: {type:Number, required:true},
    },
      {
        timestamps: true,
      }
)

const PledgeModel = mongoose.model<PledgeDocument>("pledge", pledgeSchema)

export default PledgeModel;