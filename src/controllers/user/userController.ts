import { Request, Response } from "express"
import bcrypt from "bcryptjs"
import _ from "lodash"
import JWT from "jsonwebtoken"
require("dotenv").config()



import { User } from "../../model/userModel"
import { UserLoginTypes, UserRegisterTypes } from "../../types/types"
import { validateRegister, validateLogin } from "../../services/validationService"
import { generateToken } from "../../services/tokenServices"
import { comparePassword, hashPassword } from "../../services/passwordServices"
import { logger } from "../../services/loggerService"
import { ImageUpload } from "../imageUpload"



export const Register = async (req: Request, res: Response) => {
    try {
        const { error } = validateRegister(req.body)
        if (error) return res.json({
            message: error.details[0].message
        })

        const newUser: UserRegisterTypes = req.body

        const user = await User.findOne({ email: newUser.email })

        if (user) return res.status(409).json({
            message: "User already has an account, try logging in"
        })


        newUser.password = await hashPassword(newUser.password)

        const addUser = new User(newUser)
        await addUser.save()

        res.status(201).json({
            status: "SUCCESS",
            "new user": _.pick(addUser, ["_id", "email", "businessName"])
        })
    } catch (error) {
        if (error) return res.status(500).json({
            message: "internal server error"
        })
        logger.error(error)
    }
}



export const Login = async (req: Request, res: Response) => {

    try {

        const { error } = validateLogin(req.body)
        if (error) return res.json({
            message: error.details[0].message
        })

        const userLogin: UserLoginTypes = req.body
        const user = await User.findOne({ email: userLogin.email })
        if (!user) return res.status(404).json({
            message: "incorrect username or password"
        })

        const validpassword = await comparePassword(userLogin.password, user.password)
        if (!validpassword) return res.status(404).json({
            message: "incorrect username or password"
        })

        const token = generateToken(user._id)


        res.header("token", token).json({
            status: "SUCCESS",
            token: token
        })
    } catch (error) {
        logger.error(error)
        if (error) return res.status(500).json({
            message: "iternsal server error"
        })
    }

}

// export const uploadImage = async (req: Request, res: Response) => {
//     const userId = req.params.id
//     const body: UserRegisterTypes = req.body
//     try {
//         const user = await User.findById({ _id: userId })
//         if (!user) res.json({
//             message: "user not found, could not upload image"
//         })

//         const result = await ImageUpload(req.file)
//          if (!result) return res.json({
//             message: "image updload fail"
//         })

//         body.image = result
//         const update = await User.findByIdAndUpdate({ _id: userId },{...body})
//         res.json({
//             message: "SUCCESS"
//         })

//     } catch (error) {
//         logger.error(error)
//     }

// }