import mongoose from "mongoose"
require('dotenv').config();
import { logger } from "../services/loggerService";

const uri = process?.env?.DB_URI as string

//console.log(uri)

const options = { useNewUrlParser: true, useUnifiedTopology: true };


export const dbConnect = () => {
    if (!uri) {
        logger.error("no db connection found")
    }
    mongoose.connect(uri)
        .then(() => logger.info("connected to database"))
        .catch((e) => logger.error(e))
}