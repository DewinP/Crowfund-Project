import { verifyJWT } from './../utils/jwt.utils';
import { NextFunction, Request, Response } from "express";
import {get} from 'lodash'
import config from 'config'
import { reIssueAccessToken } from '../service/session.service';

const deserializeUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const accessToken:string = get(req,"cookies.accessToken") || get(req, "headers.authorization", "").replace(
      /^Bearer\s/,
      ""
    );
    const refreshToken:string = get(req,"cookies.refreshToken") || get(req, "headers.x-refresh");
  
    if (!accessToken) {
      return next();
    }
    const { decoded, expired } = verifyJWT(accessToken as string);

    
    if (decoded) {
      res.locals.user = decoded;
      return next();
    }
  
    if (expired && refreshToken) {
      const newAccessToken = await reIssueAccessToken({ refreshToken });
  
      if (newAccessToken) {
        res.setHeader("x-access-token", newAccessToken);
        res.cookie("acessToken", newAccessToken,{
          maxAge: 900000,
          httpOnly: true,
          domain: config.get<string>('cookieDomain'),
          path: '/',
          sameSite: 'strict',
          secure: false
      })
      }
  
      const result = verifyJWT(newAccessToken as string);
  
      res.locals.user = result.decoded;
      return next();
    }
  
    return next();
  };

export default deserializeUser;