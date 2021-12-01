import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface ProjectDocument extends mongoose.Document {
    user: UserDocument["_id"];
    name:string;
    description: string;
    pledgeGoal: number;
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name:{type:String, required:true},
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

