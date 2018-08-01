import express from 'express'
import passport from 'passport'
import adminController from "./admin.ctrl"

export const adminRoute = express.Router()

adminRoute.post('/signup',adminController.signup)
adminRoute.post('/login',adminController.login)
// adminRoute.get('/me', passport.authenticate('jwt',{session : false}),adminController.authenticated)