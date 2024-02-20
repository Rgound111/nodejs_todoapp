import mongoose from "mongoose"

export const ConnectDB = () => {
    mongoose.connect(process.env.MONGO_URI,
        { dbName: "BackendApi" })
        .then((c) => {
            console.log(`Database connected to the ${c.connection.host}`)
        }).catch((err) => {
            console.log(err)
        })
}