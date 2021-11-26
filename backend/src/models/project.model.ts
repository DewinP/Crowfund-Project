import mongoose from 'mongoose'
import { customAlphabet } from 'nanoid'
import { UserDocument } from './user.model'

//create custom id 
const nanoId = customAlphabet("0123456789qwertyuioplkjhgfdsazxcvbnm",10)

export interface ProjectDocument extends mongoose.Document {
    user: UserDocument["_id"];
    title:string;
    description: string;
    pledgeGoal: number;
    projectId: string;
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        projectId:{
            type: String,
            required:true,
            unique: true,
            default:()=> `project_${nanoId()}`

        },
        title:{type:String, required:true},
        description:{type:String, required: true},
        pledgeGoal:{ type:Number, required:true},
        dueDate:{type:Date, required:true},
      },
      {
        timestamps: true,
      }
)

const ProjectModel = mongoose.model<ProjectDocument>("Project", projectSchema)

export default ProjectModel;

