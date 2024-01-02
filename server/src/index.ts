import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import router from './routers'

const app = express()

app.use(cors({
  credentials: true
}))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', router)

mongoose.connect('mongodb://localhost:27017/chat').then(() => {
  app.listen('3000', () => {
    console.log('Server runing on port 3000!')
  })
})
