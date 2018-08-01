import express from 'express'
import articleController from './articles.ctrl'
// import { isAdmin } from '../../middlewares/admin'

export const articleRouter = express.Router()

// const adminPolicy = [passport.authenticate('jwt', {session:false}), isAdmin]
articleRouter.route('/')
  .post(articleController.create)
  .get(articleController.findAll)
articleRouter.route('/:id')
  .get(articleController.findOne)
  .put(articleController.update)
  .delete(articleController.delete)




