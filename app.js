import express from 'express'
import UserRoutes from './routes/user.js'
import TaskRoutes from './routes/task.js'
import { config } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleWare } from './middlewares/error.js'
import cors from 'cors'

export const app = express()

config({
    path: "./data/config.env"
})

// Middleware
// Use express.json or any other route middleware before using routes
// Ensure that the cookie-parser middleware is placed before any middleware or route handlers that require access to req.cookies. Middleware order matters in Express.
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods:["Get","PUT","POST","DELETE"],
    credentials: true
}))


//routes
app.use("/api/v1/users", UserRoutes) 
app.use("/api/v1/tasks", TaskRoutes)

app.get("/", (req, res) => {
    res.send("Server is working")
})

app.use(errorMiddleWare)