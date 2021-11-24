import mongoose from 'mongoose'
import {UserDocument} from './user.model'
import {customAlphabet} from 'nanoid'
import { number, string } from 'zod'

//create custom id 
const nanoId = customAlphabet("0123456789qwertyuioplkjhgfdsazxcvbnm",10)

export interface ProjectDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title:string;
    description: string;
    pledgeGoal: number;
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        projectId:{
            type: string,
            required:true,
            unique: true,
            default:()=> `project_${nanoId()}`

        },
        title:{type:string, required:true},
        description:{type:string, required: true},
        pledgeGoal:{ type:number, required:true}
      },
      {
        timestamps: true,
      }
)

const ProjectModel = mongoose.model<ProjectDocument>("Project", projectSchema)

export default ProjectModel;

