//构造函数继承
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// function Student(name,age,score,course){
//     Person.call(this,name,age);
//     this.score = score;
//     this.course = course;
// }

// let stu = new Student('allen','22','100','19');
// console.log(stu);


//原型链继承
function Person(name){
    this.name = name
}

function Student(age){
    this.age = age
}

Student.prototype = new Person('allen');
let stu = new Student()

//组合式继承 ？
//寄生式继承？