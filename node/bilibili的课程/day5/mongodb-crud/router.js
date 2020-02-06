var express = require('express');
var router = express.Router();
var Student = require('./student')

router.get('/', (req, res) => {
    let fruits = ['苹果', '香蕉', '梨']
    Student.find().then((data)=>{
            res.render('index.html', {
            fruits, student:data
        })
    },
    (err)=>{
        res.status(500).end(err)
    })
    
})

router.get('/student/new', (req, res) => {
    res.render('new.html')

})

router.post('/student/new', (req, res) => {
    new Student(req.body).save().then(()=>{
        res.redirect('/')
    },
    (err)=>{
       return res.statusCode(500).render(err)
    })
})

router.get('/student/edit', (req,res) => {
    Student.findById(req.query.id,(err,data)=>{
        res.render('edit.html',{
            student:data
        })
    })
})

router.post('/student/edit', (req,res) => {
    let info = req.body;
    Student.findByIdAndUpdate(info.id,info,(err)=>{
        if(err){
            return res.statusCode(500).render(err)
        }
        console.log("修改成功")
        res.redirect('/')
    })
})

router.get('/student/delete',(req,res)=>{
    // console.log(req.query);
    // var id = ;

    Student.findByIdAndDelete(req.query.id).then(()=>{
        console.log("删除成功");
        res.redirect('/')
    },
    (err)=>{
        console.log(err)
        res.status(500).send(err)
    })
})
module.exports = router