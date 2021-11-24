import { signJWT } from './../utils/jwt.utils';
import {Request, Response} from 'express'
import { createSession, deleteSessions, findSession } from '../service/session.service'
import { validatePassword } from '../service/user.service'
import config from 'config'
import AuthUser from '../interfaces';

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
        {expiresIn: config.get("refreshTokenTTL")}
    );
    
    res.cookie("accessToken", accessToken,{
        maxAge: 900000,
        httpOnly: true,
        domain: config.get<string>('cookieDomain'),
        path: '/',
        sameSite: 'strict',
        secure: false
    })
    res.cookie("refreshToken",refreshToken,{
        maxAge: 24*60*60*1000*365,
        httpOnly: true,
        domain: config.get<string>('cookieDomain'),
        path: '/',
        sameSite: 'strict',
        secure: false
    })
    return res.sendStatus(200)
}

export async function getUserSessionsHandler(_: Request, res: Response) {
    const user:AuthUser = res.locals.user;
    const userId = user._id;
  
    const sessions = await findSession({ user: userId, valid: true });
  
    return res.send(sessions);
  }

  export async function deleteSessionHandler(_: Request, res: Response) {
    const user:AuthUser = res.locals.user;
    const userId = user._id;
    
    await deleteSessions({ user: userId });
    res.clearCookie("accessToken")
    res.clearCookie("refreshToken")
    return res.sendStatus(200);
}
