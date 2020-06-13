let arr = [1,2,5,2,8,3]
// arr.sort((a,b)=>{
//     return a>b?1:-1
// })
// arr = [...new Set([...arr])]
console.log(arr)
let max = 0;
let map = new Map();
let it;
arr.forEach((item)=>{
    if(map.get(item)){
        let tmp = map.get(item)+1;
        map.set(item,tmp)
    }else{
        map.set(item,1)
    }
    if(map.get(item)>max){
        max = map.get(item)
        it = item;
    }
})
console.log(map)
console.log(it,max)

function father(name){
    this.name = name
}

father.prototype.say = function(){
    console.log("I am father");
}

function son(name,age){
    father.call(name)
    this.age = age
}

son.prototype = Object.create(father.prototype);
son.constructor = son;

let s1 = new son('allen',22);
s1.say()
