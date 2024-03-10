import express from 'express'
const router =express.Router()
import UserController from '../controllers/userController.js'
import checkUserAuth from '../middlewares/auth-middleware.js'


// route level middleware
router.use('/changepassword',checkUserAuth)

//public routes 

router.post('/register',UserController.UserRegistration)

router.post('/login',UserController.userLogin)


//private routes 
router.post('/changepassword',UserController.changeUserPassword)



export default router