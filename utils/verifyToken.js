import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) =>{
    const token = req.cookies.access_token
    if(!token){
        return next("401 = You are not authentificated")
    }
    jwt.verify(token, process.env.JWT, (error, user) => {
        if(error) {
            return next("403 = Token is not valid")
        }
        req.user = user;
        next()
    })
}


export const verifyUser = (req,res,next) => {
    verifyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next("403 = You are not authorized")
        }
    }) 
}

export const verifyAdmin = (req,res,next) => {
    verifyToken(req, res, next, () => {
        if(req.user.isAdmin){
            next()
        }else{
            return next("403 = You are not authorized")
        }
    }) 
}