import Router from '@koa/router'

const router = new Router()

router.get('/', async (ctx, next) => {
  // 注意要await ctx.render()，不能直接返回
  await ctx.render('index', {
    title: 'Koa',
    slogan: 'Koa (koajs) -- 基于 Node.js 平台的下一代 web 开发框架',
  })
  await next()
})

router.post('/token', async (ctx, next) => {
  const { username, password } = ctx.request.body as Record<string, string>
  if (username === 'admin' && password === 'admin') {
    ctx.body = {
      token: '2350e1c4-09f4-4f61-923c-7039b68c15ff',
    }
  } else {
    ctx.body = 'Incorrect username or password'
  }
  await next()
})

export default router
