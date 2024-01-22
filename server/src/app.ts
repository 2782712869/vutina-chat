import Koa from 'koa';
import router from './routes';
import cors from '@koa/cors';
import bodyparser from '@koa/bodyparser'
import error from 'koa-error';
import mongoose from 'mongoose';

const app = new Koa()

// app.use(error())
app.use(cors())
app.use(bodyparser())
app.use(router)

const dbURI = 'mongodb://localhost:27017/chat'
const port = 3000

mongoose.connect(dbURI)

mongoose.connection.once('open', () => {
  app.listen(port, () => {
    console.log(`server runing on http://127.0.0.1:${port}`)
  })
})
