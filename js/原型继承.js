// function Foo(id) {
//     this.id = id;
// }
// Foo.prototype.saySomething = function(){
//     console.log("I am speaking")
// }
// function Fn(id, name) {
//     Foo.call(id);
//     this.name = name;
// }

// Fn.prototype = Object.create(Foo.prototype)//连接到原型
// let o1 = new Fn(2,"allen")
// console.log(o1)
// o1.saySomething()

//委托关联模式  Fn委托到Foo 
Foo = {
    init:function(who){
        this.name = name;
    },
    speak:function(){
        console.log("I am saying");
    }
}
Fn = Object.create(Foo);
Fn.say = function(){
    this.speak()
    //code...
}

var a2 = Object.create(Fn)
a2.say()