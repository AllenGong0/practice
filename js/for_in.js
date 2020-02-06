function Person(){
    this.name = 'allen';
}
function Student(){
    // Person.call(this)
    this.score = 80;
    this.year = 2016;
    
}
// Student.prototype = new Person();
// Student.prototype.constructor = Student;


Student.prototype = {
    courses:'cou'
}

let stu = new Student();

Object.defineProperty(stu,'year',{
    enumerable:false
})

//均不可遍历原型上的属性

//可遍历继承的属性  遍历可枚举属性
for (const key in stu) {
    if (stu.hasOwnProperty(key)) {
       console.log(key)
        
    }
}


//可遍历继承的属性，遍历可枚举属性
console.log(Object.keys(stu))


//可遍历继承的属性，可遍历不可枚举属性
console.log(Object.getOwnPropertyNames(stu))

