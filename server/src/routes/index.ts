import Router from 'koa-router'
import users from './users'

const router = new Router()
users(router)

export default router.routes()
