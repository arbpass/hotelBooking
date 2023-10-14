import express from "express";
import { updateUser, deleteUser, getUser, getUsers } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router= express.Router();

//CHECK
// router.get("/checkAuth", verifyToken, (req, res, next)=> {
//     res.send("hello user you are logged in!");
// })

// router.get("/checkUser/:id", verifyUser, (req, res, next)=> {
//     res.send("hello user you are logged in adn you can't delete your account!");
// })

// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next)=> {
//     res.send("hello admin you are logged in adn you can delete all account!");
// })

//UPDATE
router.put('/:id', verifyUser, updateUser);

//DELETE
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get('/:id', verifyUser, getUser);

//GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;