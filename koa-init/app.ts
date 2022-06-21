import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import bodyParser from 'koa-bodyparser'
import usersRouter from './routes/users'
import router from './routes'

const port = 3000

const app = new Koa()

// 必须在路由之前引入
app.use(
  views(`${__dirname}/views`, {
    extension: 'ejs',
  })
)

// 必须在路由之前引入
app.use(bodyParser())

app.use(serve(`${__dirname}/public`))

app.use(router.routes())
app.use(router.allowedMethods())

app.use(usersRouter.routes())
app.use(router.allowedMethods())

app.listen(port)

console.log(`Server running on http://localhost:${port}`)
