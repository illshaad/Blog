import express from 'express'
import { articleRouter } from './ressources/articles'
import { adminRoute } from './ressources/admin'

export const restRouter = express.Router()

restRouter.use('/article', articleRouter)
restRouter.use('/admin', adminRoute);