import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/Task.js"

export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title,
            description,
            user: req.user
        })

        res.status(201).json({
            success: "true",
            message: "Task created"
        })
    } catch (error) {
        next(error)
    }
}

export const getMyTask = async (req, res, next) => {
    try {
        const id = req.user._id

        const tasks = await Task.find({ user: id })

        res.status(200).json({
            success: true,
            tasks
        })
    } catch (error) {
        next(error)
    }
}

export const updateTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id)

        if (!task) return next(new ErrorHandler("Invalid Id", 404))

        task.isCompleted = !task.isCompleted;
        await task.save()

        res.status(200).json({
            success: true,
            message: "Task updated"
        });
    } catch (error) {
        next(error)
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.id
        const task = await Task.findById(id)

        if (!task) return next(new ErrorHandler("Invalid Id", 404))

        await task.deleteOne()

        res.status(200).json({
            success: true,
            message: "Task Deleted"
        })
    } catch (error) {
        next(error)
    }

}