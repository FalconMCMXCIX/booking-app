import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';


const router = express.Router()

// router.get("/checkauthentification", verifyToken, (req, res, next) => {
//     res.send("Hello user you are logged in")
// })

// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user you are logged in and you can delete your account if you want")
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin you are logged in and you can delete all accounts if you want")
// })


router.put("/:id", verifyUser, updateUser)

router.delete("/:id", verifyUser, deleteUser)

router.get("/:id", verifyUser, getUser)

router.get("/", verifyAdmin, getUsers)



export default router