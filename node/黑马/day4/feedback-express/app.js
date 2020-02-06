var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

var comments = [
    {
        name:'allen1',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen2',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen3',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen4',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen5',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },{
        name:'allen6',
        age:20,
        message:'我事阿勒',
        date:'2019-02-20'
    },
]

// app.use('/public/',express.static('./public'))
// app.use('/view/',express.static('./view'))  //第一个参数可以是其他名字

app.use(express.static('./public'))

app.engine('html', require('express-art-template'));
// app.set('view', {
//     debug: process.env.NODE_ENV !== 'production'
// });
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

// routes
app.get('/', function (req, res) {
    res.render('index.html', {
        comments:comments
    });
    // res.send()
});

// app.get('/post',(req,res)=>{
//     res.render('post.html')
// })
//原生可以监听data事件获取post请求

//配置中间件，解析post请求
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.get('/post',(req,res)=>{
    res.render('post.html')
})

app.post('/commit',(req,res)=>{

    //get
    // comments.push({
    //     name:req.query.name,
    //     message:req.query.message,
    //     date:(new Date())
    // })
    // res.redirect('/')

    //post
    comments.push({
        name:req.body.name,
        message:req.body.message,
        date:(new Date())
    })
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log("server is running...")
})