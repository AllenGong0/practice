function fn(){
    let name = 'name' 
    console.log(this)
}
let person = {
    name:'allen',
    age:20
}
Function.prototype.calls = function(person){
    console.log(this.name);
    console.log(typeof this)
    person.fn = this
    person.fn()
    delete person.fn
}
fn.calls(person);
