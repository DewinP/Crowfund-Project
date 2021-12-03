import mongoose from 'mongoose'
import { ProjectDocument } from './project.model'
import { UserDocument } from './user.model'


export interface CommentDocument extends mongoose.Document {
    user: UserDocument["_id"];
    project: ProjectDocument["_id"]
    userName: string;
    body: string;
}

const commentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        project:{type: mongoose.Schema.Types.ObjectId,ref:"Project" },
        userName:{type:String,required:true},
        body:{type:String,required:true},
    },
      {
        timestamps: true,
      }
)

const CommentModel = mongoose.model<CommentDocument>("comment", commentSchema)

export default CommentModel;