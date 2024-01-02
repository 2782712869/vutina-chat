import express from 'express'
import authentication from './authentication'

const router = express.Router()

export default () => {
  authentication(router)
  return router
}