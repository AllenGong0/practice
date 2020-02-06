// var os = require('os');
// console.log(os.cpus());
var foo = 'aa';
console.log(globalThis.foo)
//node中只有模块作用域，即文件作用域，虽然加载另一个文件，
//但并不会污染当前文件。
//node中没有全局作用域
//可以省略后缀名
//相对路径'./'不能省略
