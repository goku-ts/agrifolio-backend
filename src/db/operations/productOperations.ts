

import { Model } from "mongoose"
import { AuthRequestType } from "../../middlewares/authMiddleware"
import { ProfileTypes } from "../../types/types"
import { Request } from "express"


export const addProductToDB = async (request: Request, database: Model<ProfileTypes>, validation?: any,) => {
    // const { error } = validation(request.body)
    // if (error) return error.details[0].message
    const id = request.params.id
    const product = request.body

    const profile = await database.findById({ _id: id }) //.populate({ path: populate_path, select: populate_name })
    if (!profile) return `no data with given id available`

    profile.businessProfile.products.unshift(product)

    return await profile.save()
}


export const getAllProductsFromDB = async (request: Request, database: Model<ProfileTypes>, populate_path?: string, populate_name?: string, collection_name?: string) => {
    const id = request.params.id
    const profile = await database.findById({ _id: id }) //.populate({ path: populate_path, select: populate_name })
    if (!profile) return `no data with given id available`
    const products = profile?.businessProfile?.products

    return products
}

export const updateProductInDB = async (request: Request, database: Model<ProfileTypes>, collection_name?: string) => {
    const id = request.params.id
    const update = request.body
    const productId = request.body.id


    const profile = await database.findById({ _id: id }) //.populate({ path: populate_path, select: populate_name })
    if (!profile) return `no data with given id available`
    const products = profile?.businessProfile?.products


    products.forEach(async (p: any) => {
        let objectId = p._id
        if (objectId.toString() === productId) {
            p.name = update.name
            p.description = update.description
            p.image = update.image
            p.inStock = update.inStock
            p.price = update.price

            await profile.save()
            return
        }
    })

    return

}

export const deleteProductFromDB = async (request: Request, database: Model<ProfileTypes>, collection_name?: string) => {
    const id = request.params.id
    const productId = request.body.id

    const profile = await database.findById({ _id: id }) //.populate({ path: populate_path, select: populate_name })
    if (!profile) return `no data with given id available`
    const products = profile?.businessProfile?.products

    let index: number
    products.forEach(async (p: any) => {
        let objectId = p._id
        if (objectId.toString() === productId) {
            index = products.indexOf(p)
            products.splice(index, 1)

            return await profile.save()
        }
    })
}
