// // 数据类型
// //     基本数据类型 string number symbol boolean null undefined
// //     引用数据类型 array object
// //    数组本质就是对象
// // symbol是一个独一无二的值
//
// let arr = [5,8,5,8];
// console.log(arr instanceof Array );
//
// let s3 = Symbol();
// let obj = {
//     s3:'sss'
// }
// console.log(obj instanceof Object)
// console.log(obj.s3)
// let s1 = Symbol();
// let s2 = Symbol();
// obj.s2 = "qwe"
// // console.log(s1==s2)
// console.log(obj.s2)
// console.log(s3)

let str = 'asd';
console.log(str.charAt())
// 由于字符串下面没有方法，
// 当调用字符串下面的方法时
// 首先创建一个字符串的实例化对象
// 在实例化对象上调用方法，
// 销毁实例