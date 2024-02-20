import jwt from 'jsonwebtoken'

export const sendCookie = async (user, res, message, statusCode) => {

    const token = jwt.sign({ _id: user._id }, process.env.PRIVATE_KEY)

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
        sameSite : process.env.NODE_ENV === "Development" ?  "lax" : "none" ,
        secure : process.env.NODE_ENV === "Development" ? false : true
    }).json({
        success: true,
        message,
    })
}