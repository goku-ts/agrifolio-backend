

import { AuthRequestType } from "../../middlewares/authMiddleware"



export const addToDB = async (request: AuthRequestType, database: any, validation?: any,) => {
    // const { error } = validation(request.body)
    // if (error) return error.details[0].message

    let name = request.body.businessProfile.name
    let pid = name.split(" ").join("")

    const [get] = await database.find({ pid: pid })

    if (get) return "Profile Exists"

    const add = new database({
        ...request.body,
        user: request.user,
        pid: pid
    })
    return await add.save()
}

export const getFromDB = async (request: AuthRequestType, database: any, populate_path?: string, populate_name?: string, collection_name?: string) => {
    //check if id is valid, if not, return with  error message
    const pid = request.params.pid

    const get = await database.find({ pid: pid }) //.populate({ path: populate_path, select: populate_name })
    if (!get) return `no data with given id available`
    return get
}

export const getAllFromDB = async (request: AuthRequestType, database: any, populate_path?: string, populate_name?: string, collection_name?: string) => {
    const get = await database.find() //.populate({ path: populate_path, select: populate_name })
    if (get.length === 0) return `no data available`
    return get
}

export const updateToDB = async (request: AuthRequestType, database: any, collection_name?: string) => {
    const get_update = request.body
    const id = request.params.id
    const get = await database.findByIdAndUpdate({ _id: id }, get_update)
    if (!get) return `no data with this id available`
    return get

}

export const deleteFromDB = async (request: AuthRequestType, database: any, collection_name?: string) => {
    const id = request.params.id
    const get = await database.findByIdAndDelete({ _id: id })
    if (!get) return `no data with this id available`
    return get
}

export const getByUserFromDB = async (request: AuthRequestType, database: any, collection_name?: string) => {
    const userId = request.user
    const get = await database.find({ seller: userId })
    if (get.length === 0) return `no data available`
    return get
}