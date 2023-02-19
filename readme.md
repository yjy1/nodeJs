## 4.Npm&Yarn
    01 npm的使用
        npm init
        npm install 包名 -g (uninstall,update)
        npm install 包名 --save-dev (uninstall,update)
        npm list -g (不加-g，列举当前目录下的安装包)
        npm info 包名(详细信息) npm info 包名 version(获取最新版本)
        npm install md5@1 (安装指定版本)
        npm outdated( 检查包是否已经过时)
        "dependencies":{"md5":"^2.1.0"} 表示 如果 直接npm install 将会 安md5 2.'.'最新版本
        "dependencies":{md5":"~2.1.0"} ~ 表示 如果 直接npm install 将会 安装md5 2.1.*最新版本
        "dependencies":{md5":"*"}表示如果 直接npm install 将会安装 md5 最新版本


## 02 全局安装nrm
    NRM(npm registry manager)是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在
    npm 源间切换。  
    手动切换方法: npm config set registry https://registry.npm.taobao.org
    安装nrm
        在命令行执行命令，npminstall-gnrm，全局安装nrm。
    使用nrm
        执行命令nrmls 查看可选的源。其中，带*的是当前使用的源，上面的输出表明当前源是官方源
    切换nrm
        如果要切换到taobao源，执行命令nrm use taobao。
    测试速度
        你还可以通过nrm test测试相应源的响应时间
            nrm test

    扩展:
        中国NPM 镜像
        这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟一次以保证尽量与官方服务同步。
        npm install -g cnpm --registry=https://registry.npmmirror.com

## 03 yarn使用
    npm install -g yarn
    对比npm:
        速度超快: Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时利用并行下载以最大化资源利用率，因此安装速度更快。
        超级安全: 在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。
    开始新项目
        yarn init
    添加依赖包
        yarn add [package]
        yarn add [package]@[version]
        yarn add [package] --dev
    升级依赖包
        yarn upgrade [package]@[version]
    移除依赖包
        yarn remove [package]
    安装项目的全部依赖


## 5.内置模块
    01 http模块
    要使用 HTTP 服务器和客户端，则必须require('http')。
        //第一种写法
        const http = require('http');
        // 创建本地服务器来从其接收数据
        const server = http.createServer((req，res) => {
            res.writeHead(200，{Content-Type':'application/json' });
            res.end(JsoN.stringify({
                data: 'He11o wor1d!'
            }));
        });
        server.listen(8000);

        //第二种写法
        const http = require('http');
        // 创建本地服务器来从其接收数据
        const server = http.createServer();
        // 监听请求事件
        server.on('request',(req,res)=>{
            if(req.url==="/favicon.ico"){
                // todo 读取本地图标
                return
            }
            res.writeHead(moduleRenderStatus.renderStatus(req.url),{"Content-Type":"text/html;charset=utf-8"})
            res.write(moduleRenderHtml.renderHtml(req.url))
            res.end()
        })
        server.listen(3000,()=>{
            console.log('server start')
        })


## 02 url模块
    02.1 parse
        const url = require('url')
        const urlString= "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110"
        const parsedStr = url.parse(urlString)
        console.1og(parsedStr)
    02.2 format
        const url = require('url')
        const urlObject = {
            protocol: 'https',
            sTashes: true ,
            auth: null,
            host: 'www.baidu.com:443',
            port:'443',
            hostname : 'www.baidu.com',
            hash:'#tag=110',
            search: '?id=8&name=mouse',
            query: { id:'8', name: 'mouse' },
            pathname:'/ad/index.htm1',
            path: '/ad/index.htm1?id=8&name=mouse'
        }
        const parsedObj = url.format(urlObject)
        console.log(parsedObj)
    02.3 resolve
        const url = require('url')
        var a = url.resolve('/one/two/three','four') ( 注意最后加/ ，不加/的区别 )
        var b = url.resolve('http://example.com/','/one' )
        var c = url.resolve('http://example.com/one'，'/two')
        console.log(a + "," + b + "，" + c)


## 03 querystring模块
    03.1 parse
        const querystring = require('querystring')
        var qs ='X=3&y=4!'
        var parsed = querystring.parse(qs)
        console.log(parsed)
    03.2 stringify
        const querystring = require('querystring')
        var qo = {
            x: 3,
            y:4
        }
        var parsed = querystring.stringify(qo)
        console.1og(parsed)
    03.3 escape/unescape
        'use strict';

        const mysql = require( 'mysql');

        let param = 'ns';
        let pool = mysql.createpool({
            user: 'root'
            password: 'root',
            database: 'nlp dict
        });
        pool.getConnection(function (err, conn) {
            let sql = 'select * from tb_nature where nature = "' + param + '" and del_status=1';
            conn.query(sgl, function (err, result) {
                conle.log(result);
            })
        })


        这时正常情况下能查询到一条数据，如果将param修改成
        let param = 'ns"-- 
        sql语句就会变成
        select * from tb nature where nature = "ns"-- " and del status=1
        后面的del_status就会被参数中的-- 注释掉，失去作用，能查询到多条数据。
        如果对param使用escape包装下，就能将参数中的特殊字符进行转义，防止sql的注入

        const querystring = require('querystring')
        var str = 'id=3&city=北京&urFhttps://www.baidu.com'
        var escaped = querystring.escape(str)
        console.1og(escaped)

        const querystring = require('querystringvar')
        str ='id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26ur1%3Dhttps%3A%2F%2Fwww.baidu.com'
        var unescaped = querystring.unescape(str)
        conso1e.Tog(unescaped)


## 04http模块补充
    04.1接口:jsonp
        const http = require('http')
        const ur1 = require('ur1')
        const app = http.createServer((req，res) => {
            let urlobj = ur1.parse(req.ur1， true)
            switch (urlobj.pathname) {
                case '/api/user':
                    res.end(`${urlobj.query.cb}({"name": "gp145"})`)
                    break
                default:
                    res.end('404.')
                    break
            }
        })

        app.listen(8080，() => {
            console.1og('localhost:8080')
        })

    04.2 跨域 cros
        const http = require('http')
        const url = require('url')
        const querystring = require('querystring')
        const app = http.createServer((req，res) => {
            let data = ''
            let urlobj = url.parse(req.url,true)

            res.writeHead(200，{
                'content-type': 'application/json;charset=utf-8',
                'Access-Contro-A11ow-origin':'*'
            })

            req.on('data'，(chunk) => {
                data += chunk
            })

            reg.on('end'，() => {
                responseResu1t(querystring.parse(data))
            })

            function responseResu1t(data) {
                switch (urlobj.pathname) {
                    case '/api/1ogin':
                        res.end(JsoN.stringify({
                            message: data
                        }))


## 05 event模块
    const EventEmitter = require('events ')
    class MyEventEmitter extends EventEmitter {}
    const event = new MyEventEmitter()
    event.on('play'，(movie) => {
        console.1og(movie)
    })
    event.emit('play',"我和我的祖国")
    event.emit('play',"中国机长")


## 06fs文件操作模块
    const fs = require('fs')
    // 创建文件夹
    fs.mkdir('./logs'， (err) => {
        conso1e. 1og('done.')
    }）
    // 文件夹改名
    fs.rename('./logs','./1og' , () => {
        console.log('done')
    })
    // 删除文件夹
    fs.rmdir('./1og'，() =>{
        conso1e. 1og(' done.')
    })
    // 写内容到文件里
    fs.writeFile('./avatar/a.text','你好',(err)=>{
        console.log(err)
    })


    // 同步读取文件
    try {
        const content = fs.readFileSync('./logs/log-1.txt'，'utf-8')
        console.log(content)
        conso1e.log(0)
    } catch (e) {
        conso1e.log(e.message)
    }
    //异步读取文件: 方法一
    fs.readFile('./logs/log-0.txt'，'utf-8'，(err， content) => {
        console.log(content)
        conso1e.log(0)
    })
    console.log(1)
    // 异步读取文件: 方法二
    const fs = require("fs").promises
    fs.readFile('./logs/log-0.txt'，'utf-8').then(result => {
        console.log(result)
    })

    js在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢:
        .由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
        .服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。


## 07stream流模块
    stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持流”这种数据结构。
    什么是流?流是一种抽象的数据结构。想象水流，当在水管中流动时，就可以从某个地方(例如自来水厂)源源不断地到达另一个地方(比如你家的洗手池》。我们也可以把数据看成是数据流，比如你敲键盘的时候，就可以把每个字符依次连起来，看成字符流。这个流是从键盘输入到应用程序，实际上它还对应着一个名字:标准输入流(stdin) 。

    如果应用程序把字符一个一个输出到显示器上，这也可以看成是一个流，这个流也有名字:标准输出流(stdout)。流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。

    有些流用来读取数据，比如从文件读取数据时，可以打开一个文件流，然后从文件流中不断地读取数据。有些流用来写入数据，比如何文件写入数据时，只需要把数据不断地往文件流中写进去就可以了。

    在Node.js中，流也是一个对象，我们只需要响应流的事件就可以了: data 事件表示流的数据已经可以读取了end事件表示这个流已经到末尾了，没有数据可以读取了，error事件表示出错了。
        var fs = require('fs'):
        // 打开一个流:
        var rs = fs.createReadstream('sample.txt','utf-8');
        rs.on('data'，function (chunk) {
            console.1og('DATA:')
            console.1og(chunk);
        })

        rs.on('end', function () {
            console.1og('END');
        })

        rs.on('error',function (err) {
            console.log('ERROR'+err)
        });
        要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据要以流的形式写入文件，只需要不断调用write()方法，最后以end()结束:


## 08 zlib
    const fs = require('fs')
    const zlib = require('zlib')
    const gzip = zlib.createGzip()
    const readstream = fs.createReadstream('./note.txt')
    const writestream = fs.createwritestream('./note2.txt')
    readstream
        .pipe(gzip)
        .pipe(writestream)


## 09 crypto
    .crypto模块的目的是为了提供通用的加密和哈希算法。用纯Javacript代码实现这些功能不是不可能，但速度会非常慢。Nodeis用C/C++实现这些算法后，通过cypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。

    .MD5是一种常用的哈希算法，用于给任意数据一个“签名”。这个签名通常用一个十六进制的字符串表示
        const crypto = require('crypto');
        const hash = crypto.createHash('md5');
        // 可任意多次调用update():
        hash.update('Hello，world!');
        hash.update('Hello，nodejs!') ;
        console.log(hash.digest('hex'));
    .update(方法默认字符串编码为UTF-8，也可以传Buffer。
    .如果要计算SHA1，只需要把“md5 改成sha1 ，就可以得到SHA1的结果
        1f32b9c9932c02227819a415feed43e13laca40
    .Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥:
        const crypto = require('crypto');


    .AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用:
        const crypto = require("crypto");
        function encrypt (key, iv，data) {
            let decipher = crypto.createcipheriv('aes-128-cbc'，key， iv);
            //decipher.setAutoPadding(true);
            return decipher.update(data, 'binary', 'hex') + decipher.final('hex');
        }
        function decrypt (key， iv， crypted) {
            crypted = Buffer.from(crypted,'hex').tostring('binary');
            let decipher = crypto.createDecipheriv('aes-128-cbc'，key，iv);
            return decipher.update(crypted,'binary', 'utf8') + decipher.final('utf8');
        }
    .可以看出，加密后的字符串通过解密又得到了原始内容.
  

## 6.路由
    01 基础
    var fs = require("fs")
    var path = require("path")
    function render(res, path) {
        res.writeHead(200，{"content-Type": "text/html;charset=utf8"})
        res.write(fs.readFileSync(path，"utf8"))
        res.end()
    }
    const route = {
        "/login": (req,res) => {
            render(res，"./static/login.html")
        },
        "/home": (req，res) => {
            render(res，"./static/home. html")
        },
        "/404": (req，res) => {
            render(res，"./static/home. html")
        }