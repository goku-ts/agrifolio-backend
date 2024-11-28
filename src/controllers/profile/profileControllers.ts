import { Response, Request } from "express"

import { Profile } from "../../model/profileModels"
import { logger } from "../../services/loggerService"
import { ImageUpload } from "../imageUpload"
import { AuthRequestType } from "../../middlewares/authMiddleware"

import { addToDB, getFromDB, getAllFromDB, updateToDB, deleteFromDB, getByUserFromDB } from "../../db/operations/dbOperations"
import { validatePost } from "../../services/validationService"

export const addPost = async (req: AuthRequestType, res: Response) => {
    try {
        const result = await addToDB(req, Profile,)


        if (result === "Profile Exists") return res.json({
            message: "Profile Name Already Exists"
        })

        res.json({
            status: "SUCCESS",
            post: result
        })

    } catch (error) {
        logger.error(error)
    }
}

export const getPost = async (req: Request, res: Response) => {
    try {
        const [result] = await getFromDB(req, Profile)


        if (!result) return res.status(404).json({
            message: "profile not found"
        })


        res.json({
            status: "SUCCESS",
            profile: result
        })

    } catch (error) {
        logger.error(error)
    }
}




export const getAllPosts = async (req: Request, res: Response) => {
    try {

        const result = await getAllFromDB(req, Profile)
        res.json({
            message: "SUCCESS",
            profiles: result
        })

    } catch (error) {
        logger.error(error)
    }
}

export const updatePost = async (req: Request, res: Response) => {
    try {
        await updateToDB(req, Profile)
        res.json({
            message: "SUCCESS"
        })

    } catch (error) {
        logger.error(error)
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const result = await deleteFromDB(req, Profile)
        res.json({
            message: "SUCCESS",
        })

    } catch (error) {
        logger.error(error)
    }
}

export const uploadPostImage = async (req: Request, res: Response) => {
    const id = req.params.id
    const body = req.body
    try {
        const post = await Profile.findById({ _id: id })
        if (!post) res.json({
            message: "post not found, could not upload image"
        })

        const result = await ImageUpload(req.file)
        if (!result) return res.json({
            message: "image updload fail"
        })

        body.image = result
        const update = await Profile.findByIdAndUpdate({ _id: id }, { ...body })
        res.json({
            message: "SUCCESS"
        })

    } catch (error) {
        logger.error(error)
    }

}

export const getUserPosts = async (req: AuthRequestType, res: Response) => {
    try {
        const result = await getByUserFromDB(req, Profile)
        res.json({
            message: "SUCCESS",
            post: result
        })

    } catch (error) {
        logger.error(error)
    }
}