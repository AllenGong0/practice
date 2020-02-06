const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', {useNewUrlParser: true});
var Schema = mongoose.Schema;

//拼写规则
const stuSchema = new Schema({
  name:  {
      type:String,
      required:true
  }, // String is shorthand for {type: String}
  age: {
      type:Number,
      required:true

  },
  gender:{
      type:Number,
      required:true
  },
  hobbies:{
      type:String,
      required:true
  }
});

//将文档结构发布为模型
//User会自动转换为users 即为一个集合

//添加数据库 利用model方法增加一个模型

const Student = mongoose.model('Student',stuSchema)

var stu = new Student({
    name:"allen",
    age:21,
    gender:0,
    hobbies:"吃饭睡觉"
})

stu.save().then(() => console.log('发布成功'));

Student.find().then((data)=>{
    console.log(data)
})

Student.findByIdAndUpdate()

// User.findById("5e392be828edb9179cc06eb5").then((data)=>{
//     console.log(data)
// })

// User.findOneAndUpdate({
//     username:'admin'
// },{
//     username:"allen"
// }).then((data)=>{
//     console.log(data)
// })

// User.deleteMany({
//     username:'zs'
// }).then((data)=>{
//     console.log(data)
// })



// User.findOneAndDelete()