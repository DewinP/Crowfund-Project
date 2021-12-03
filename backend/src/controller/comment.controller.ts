import { CreateCommentInput } from "../schema/comment.schema";
import { createComment, findAndUpdateCommnet, findComments } from "../service/comment.service";
import { Request, Response } from "express";

export const createCommentHandler = async (req: Request<CreateCommentInput["params"],CreateCommentInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const projectId = req.params.projectId
    const body = req.body;

    return await createComment({...body,user: userId, project: projectId})
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