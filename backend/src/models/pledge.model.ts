import mongoose from 'mongoose'
import { ProjectDocument } from './project.model'
import { UserDocument } from './user.model'


export interface PledgeDocument extends mongoose.Document {
    user: UserDocument["_id"];
    project: ProjectDocument["_id"]
    sessionId:string;
    amount: number;
    userName: string;
    projectName:string;
}

const pledgeSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        project:{type: mongoose.Schema.Types.ObjectId,ref:"Project" },
        sessionId:{type:String,required:true,unique:true},
        amount: {type:Number, required:true},
        userName:{type:String,required:true},
        projectName:{type:String,required:true}
    },
      {
        timestamps: true,
      }
)

const PledgeModel = mongoose.model<PledgeDocument>("pledge", pledgeSchema)

export default PledgeModel;