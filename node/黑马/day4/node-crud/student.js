var fs = require('fs')

const dbPath = './db.json'
exports.findAll = () => {

    //promise不需要callback传递参数
    // fs.readFile('./db.json', 'utf8', (err, data) => {
    //     if (err) {
    //         return cb(err)
    //     }
    //     // console.log(JSON.parse(data).student)
    //     cb(null,JSON.parse(data).student)

    // })
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            console.log(data)
            let stu = JSON.parse(data).student
            if (err) {
                reject(error)
            }
            resolve(stu)
        })
    })
}

exports.findById = (id,cb)=>{
    fs.readFile(dbPath,'utf8',(err,data)=>{
        if(err) return cb(err)
        let students =  JSON.parse(data).student;
        cb(null,students.find((item)=>{
            return item.id == id;
        }))
        
    })
}
exports.save = function (stuObj) {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            let student = JSON.parse(data).student;
            stuObj["id"] = student[student.length - 1].id + 1
            student.push(stuObj)
            fs.writeFile(dbPath, JSON.stringify({ student }), (err) => {
                if (err) {
                    reject(err)
                }
                resolve(true)
            })
        })
    })
    //回调函数形式
    fs.readFile(dbPath, 'utf8', (err, data) => {
        fs.writeFile(dbPath, data, () => {
            cb()
        })
    })
}

exports.updateById = (student, cb) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            reject(err)
        }
        let students = JSON.parse(data).student;
        let oldStudent = students.find((item) => {
            return (item.id == studen·t.id);
        })
            
        for(var key in student){
            oldStudent[key] = student[key]
        }

        fs.writeFile(dbPath, JSON.stringify({ student: students }), (err) => {
            if (err) {
                cb(err)
            }
            cb(null)
        })
    })
}

exports.deleteById = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, (err, data) => {
            if (err) reject(err)
            let students = JSON.parse(data).student;
            let newStudents = students.filter((item) => {
                return item.id != id;
            })
            // Object.assign(newStudent,)
            fs.writeFile(dbPath, JSON.stringify({ student: newStudents }), (err) => {
                if (err) reject(err)
                resolve()
            })
        })
    })
}
