import { CreateCommentInput } from "../schema/comment.schema";
import { createComment, findAndUpdateCommnet, findComments } from "../service/comment.service";
import { Request, Response } from "express";

export const createCommentHandler = async (req: Request<CreateCommentInput["params"],{},CreateCommentInput["body"]>, res: Response) => {
    const user= res.locals.user
    const projectId = req.params.projectId

    return await createComment({...req.body,project:projectId,user: user._id,userName:user.name})
}

export const updateCommentHandler = async (req: Request<CreateCommentInput["params"],{},CreateCommentInput["body"]>, res: Response) => {
    const commentId = req.params.commentId;
    const updateBody = req.body;
    const comment = await findAndUpdateCommnet({_id: commentId},updateBody,{new: true});
    if(!comment){
        return res.sendStatus(404)
    }
    return res.send(comment)
}

export const findAllCommentsByProjectHandler = async (req: Request<CreateCommentInput["params"]>, res: Response) => {
    const projectId = req.params.projectId;
    const comments= await findComments({project: projectId})
    return res.send(comments)
}