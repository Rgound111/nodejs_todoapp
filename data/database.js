import mongoose from "mongoose"

export const ConnectDB = () => {
    mongoose.connect(process.env.MONGO_URI,
        { dbName: "BackendApi" })
        .then(() => {
            console.log("Database connected")
        }).catch((err) => {
            console.log(err)
        })
}