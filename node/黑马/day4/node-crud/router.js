var express = require('express');
var router = express.Router();
var Student = require('./student')

router.get('/', (req, res) => {
    //第二个参数为转换成utf8或toString()
    // fs.readFile('./db.json', 'utf8', (error, data) => {
    //     if (error) {
    //         return res.status(500).send("Server error");
    //     } else {
    //         let student = JSON.parse(data).student;
            
    //     }
    // })
    let fruits = ['苹果', '香蕉', '梨']
    // Student.findAll((err,data)=>{
    //     if(err){
    //         return res.status(500).send("Server error");
    //     }
    //     res.render('index.html', {
    //         fruits, student:data
    //     })
    // })
    Student.findAll().then((data)=>{
        res.render('index.html', {
            fruits, student:data
        })
    },(err)=>{
        console.log(err)
    })
    
})

router.get('/student/new', (req, res) => {
    res.render('new.html')

})

router.post('/student/new', (req, res) => {
    let info = req.body;
    Student.save(info).then(()=>{
        res.redirect('/')
    },
    (err)=>{
       return res.statusCode(500).render(err)
    })
})

router.get('/student/edit', (req,res) => {
    Student.findById(req.query.id,(err,data)=>{
        console.log(data)
        res.render('edit.html',{
            student:data
        })
    })
})

router.post('/student/edit', (req,res) => {
    Student.updateById(req.body,(err)=>{
        if(err){
            return res.statusCode(500).render(err)
        }
        console.log("修改成功")
        res.redirect('/')
    })
})

router.get('/student/delete',(req,res)=>{
    console.log(req.query);
    var id = req.query.id;

    Student.deleteById(id).then(()=>{
        console.log("删除成功");
        res.redirect('/')
    },
    (err)=>{
        console.log(err)
        res.status(500).send(err)
    })
})
module.exports = router