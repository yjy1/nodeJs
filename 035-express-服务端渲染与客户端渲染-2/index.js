const express = require('express')
const app = express()
const HomeRouter = require('./router/HomeRouter')
const LoginRouter = require('./router/LoginRouter')


// 配置模板引擎
app.set('views','./views')
app.set('view engine','ejs')

// 配置静态资源
app.use(express.static('public')) // 托管静态资源
// app.use(express.static('static'))
app.use('/static',express.static('static'))

// 配置解析post参数的-不用下载第三方，内置
app.use(express.urlencoded({ extended: false })) // post参数-usename=ycj&age=26
app.use(express.json()) // post 参数-{name:'ycj',age:26}
// 应用级别
app.use(function(req,res,next){
    console.log('验证token')
    next()
})

// 应用级别
app.use('/home',HomeRouter)
app.use('/login',LoginRouter)

// 错误中间件 匹配不到路由时执行
app.use((req,res)=>{
    res.status(404).send('丢了')
})
app.listen(3001, () => {
    console.log('server start')
})