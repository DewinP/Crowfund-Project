import {Request,Response} from 'express'
import { CreateProductInput, UpdateProductInput } from 'src/schema/product.schema'
import { createProduct, findAndUpdateProduct, findProduct } from 'src/service/product.service'

export const createProductHandler = async (req: Request<{},{},CreateProductInput["body"]>, res: Response) => {
    const userId= res.locals.user._id
    const body = req.body
    await createProduct({...body, user:userId})
    return res.sendStatus(201)
}

export const updateProductHandler = async (req: Request<UpdateProductInput["params"]>, res: Response) => {
    const userId= res.locals.user._id;
    const productId = req.params.productId;

    const updateBody = req.body;
    const product = await findProduct({productId})
    if(!product){
        return res.sendStatus(404)
    }
    if(product.user != userId){
        return res.sendStatus(403)
    }

    await findAndUpdateProduct({productId}, updateBody, {
        new:true
    })

    return res.sendStatus(204)
}