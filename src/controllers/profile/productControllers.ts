import { Response, Request } from "express"

import { Profile } from "../../model/profileModels"
import { logger } from "../../services/loggerService"
import { ImageUpload } from "../imageUpload"
import { AuthRequestType } from "../../middlewares/authMiddleware"

import { getAllFromDB, updateToDB, deleteFromDB } from "../../db/operations/profileOperations"
import { addProductToDB, deleteProductFromDB, getAllProductsFromDB, updateProductInDB } from "../../db/operations/productOperations"

export const addProduct = async (req: AuthRequestType, res: Response) => {
    try {
        const result = await addProductToDB(req, Profile,)


        if (!result) return res.json({
            message: "Could not Add Product"
        })

        res.json({
            status: "SUCCESS",
            post: result
        })

    } catch (error) {
        logger.error(error)
    }
}

// export const getPro = async (req: Request, res: Response) => {
//     try {
//         const [result] = await getFromDB(req, Profile)


//         if (!result) return res.status(404).json({
//             message: "profile not found"
//         })


//         res.json({
//             status: "SUCCESS",
//             profile: result
//         })

//     } catch (error) {
//         logger.error(error)
//     }
// }




export const getProducts = async (req: Request, res: Response) => {
    try {

        const result = await getAllProductsFromDB(req, Profile)
        if (!result) return res.json({
            message: "No Data Found",
        })


        return res.json({
            message: "SUCCESS",
            profiles: result
        })

    } catch (error) {
        logger.error(error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const updated = await updateProductInDB(req, Profile)
        // if (!update) return res.json({
        //     message: "FAILED"
        // })


        return res.json({
            status: "SUCCESS",
            profile: updated
        })

    } catch (error) {
        logger.error(error)
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        await deleteProductFromDB(req, Profile)
        res.json({
            message: "SUCCESS",
        })

    } catch (error) {
        logger.error(error)
    }
}

// export const uploadPostImage = async (req: Request, res: Response) => {
//     const id = req.params.id
//     const body = req.body
//     try {
//         const post = await Profile.findById({ _id: id })
//         if (!post) res.json({
//             message: "post not found, could not upload image"
//         })

//         const result = await ImageUpload(req.file)
//         if (!result) return res.json({
//             message: "image updload fail"
//         })

//         body.image = result
//         const update = await Profile.findByIdAndUpdate({ _id: id }, { ...body })
//         res.json({
//             message: "SUCCESS"
//         })

//     } catch (error) {
//         logger.error(error)
//     }

// }

