import { Request, Response } from 'express';
import { createSession, deleteSessions, findSession } from '../service/session.service';
import { findUser, validatePassword } from '../service/user.service';
import { signJWT } from './../utils/jwt.utils';
import config from 'config'

export async function createSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body)
    if(!user) {
        return res.status(401).json({
            message: 'Invalid email or password'
        })
    } 

    const session = await createSession(String(user._id));



    const accessToken = signJWT(
        {...user, session: session._id},
        {expiresIn: config.get<string>('accessTokenTTL')}
    );


    const refreshToken = signJWT(
        {...user, session: session._id},
        {expiresIn: config.get<string>('accessTokenTTL')}
    );
    
    res.cookie("accessToken", accessToken,{
        maxAge: 24*60*60*1000*365,
        httpOnly: true,
        domain: '.crowfund-project.vercel.app',
        path: '/',
        secure: true,
        sameSite: 'none'
    })
    res.cookie("refreshToken",refreshToken,{
        maxAge: 24*60*60*1000*365,
        httpOnly: true,
        domain: '.crowfund-project.vercel.app',
        path: '/',
        secure: true,
        sameSite: 'none'
    })

    let userObj = findUser({name: req.body.name})

    return res.send({accessToken, refreshToken, user:userObj})
}

export async function getUserSessionsHandler(_: Request, res: Response) {
    const user = res.locals.user;
    const userId = user._id;
  
    const sessions = await findSession({ user: userId, valid: true });
    return res.send(sessions);
  }

  export async function deleteSessionHandler(_: Request, res: Response) {
    const user = res.locals.user;
    const userId = user._id;
    
    await deleteSessions({ user: userId });
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    return res.sendStatus(200);
}
