import Koa, { Context } from 'koa';

const app = new Koa()

app.use((ctx) => {
  ctx.body = "hello koa"
})

app.listen(3000, () => {
  console.log("server runing on http://127.0.0.1:3000")
})
