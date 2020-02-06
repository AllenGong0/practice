var express = require('express');
var User = require('./modules/user.js')
var router = express.Router();
var md5 = require('blueimp-md5')
router.get('/', (req, res) => {
    res.render('index.html')
})

router.get('/login', (req, res) => {
    res.render('login.html')
})

router.post('/login', (req, res) => {
    User.findOne({
        email:req.body.email,
        password:md5(md5(req.body.password))
    })
    .then((data)=>{
        console.log(data)
        console.log("查询成功")
        req.session.user = req.body
        res.end()
    })
    .catch((err)=>{
        res.status(500).json({
            erro_code:1,
            message:'服务端错误'
        })
    })
    res.render('login.html')
})

router.get('/register', (req, res) => {
    res.render('register.html')
})

router.get('/settings/admin', (req, res) => {
    res.render('settings/admin.html')
})

router.get('/settings/profile', (req, res) => {
    res.render('settings/profile.html')
})

router.post('/register', (req, res) => {
    User.find({
        email: req.body.email
    })
        .then((data) => {
            console.log("success")
            console.log(data)
            if (data.length) {
                return Promise.reject({
                    err_code: 1,
                    message: '邮箱已存在'
                })
            }
            req.body.password = md5(md5(req.body.password))
            return new User(req.body).save()
        }, (err) => {
            return Promise.reject({
                err_code: 500,
                message: err
            })
        }).then(() => {
            req.session.user = req.body
            res.status(200).json({
                err_code: 200,
                message: '创建成功'
            });
        }, (data) => {
            if(data.err_code === 500){
                res.status(500).json(data)
            }else{
                res.status(200).json(data)
            }
        })

})


module.exports = router