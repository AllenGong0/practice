Array.prototype.test = function(){
    this.push(5);
    console.log(this)
    this.call({})
}
let arr = [1,5,2,8,2];
arr.test()
console.log(arr)