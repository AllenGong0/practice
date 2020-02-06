function instanceNew(a,b){
    let left = a.__proto__;
    let right = b.prototype;
    //判断left是否等于right
    left = left.__proto__

}
function Person(){

}
function Student(){
    Person.call(this)
}
