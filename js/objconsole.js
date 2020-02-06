let obj = {'m':10}
let obj2 = obj;
obj.a = obj2 = {'n':5}
//{n:5}
console.log(obj)