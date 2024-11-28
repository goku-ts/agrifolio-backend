import { Request, Response, NextFunction } from "express"
import JWT, { JwtPayload } from "jsonwebtoken"
require("dotenv").config()


export interface AuthRequestType extends Request {
    user?: string | JwtPayload
}

const KEY = process.env.APP_KEY as string

export const Auth = (req: AuthRequestType, res: Response, next: NextFunction) => {
    const token = req.header("token")
    try {
        if (token) {
            if (KEY) {
                try {
                    const userId = JWT.verify(token, KEY)
                    if (userId) {
                        req.user = userId
                    }
                } catch (error: any) {
                    return res.json({
                        message: error.message
                    })
                }

                next()
            }

        }
        else return res.json({
            message: "no token provided"
        })
    } catch (error) {
        if (error) return res.json({
            message: "invalid token"
        })
    }



}