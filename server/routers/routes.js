import { Router } from "express";
import {
    authenticate,
    emailregister,
    generateOTP,
    login,
    register,
    resetSession,
    updatePassword,
    updateProfile,
    user,
    verifyOTP
} from "../controllers/controller.js";
const route = Router()

//post routes

route.post('/register', register)
route.post('/emailregiter', emailregister)
route.post('/authenticate', authenticate)
route.post('/login', login)

//get routes

route.get('/user/:username', user)
route.get('/generateotp', generateOTP)
route.get('/verifyotp', verifyOTP)
route.get('/resetsession', resetSession)

//put routes

route.put('/updateprofile', updateProfile)
route.get('/updatepassword', updatePassword)



export default route