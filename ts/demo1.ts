// function getName(person:string){
//     console.log(person)
// }

// let en : number ;

// enum Color {Red,Green,Blue}

// let e :Color = Color.Blue
// console.log(Color[2]);
// getName('asd');

// interface Square{
//     color?:string,
//     width?:number,
//     [propName: string]: any;
// }
// function createSquare(sq:Square){
//     console.log(sq)
// }
// createSquare({color:'red',width:20,opacity:0.6} as Square) //绕过类型检查
// //将传入对象赋值给另一个对象也可以绕过检查

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1;
// }

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     // tick(); //方法
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);

// let myAdd: (x: number, y: number) => number =
// function(x: number, y: number) { return x + y; };


// function getName(firstName:string):string{
//     return ''

// }

//1.泛型函数类型定义
// function identity<T>(arg: T): T {
//     console.log(arg)
//         return arg;
// }

// identity('test');

// //1.箭头箭头函数形式声明
// let myIdentity: <T>(arg: T) => T = identity;

// //对象字面量形式声明
// // let myIdentity: {<T>(arg: T): T} = identity;


// myIdentity<number>(2);

// interface Lengthwise {
//     length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length);  // Now we know it has a .length property, so no more error
//     return arg;
// }

// loggingIdentity(['1','2','3']); 

// function getProperty(obj: any, key: any) {
//     return obj[key];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(getProperty(x, "a")); // okay
// console.log(getProperty(x, "m")); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

// interface Named {
//     name: string;
// }

// class Person {
//     name: string;
//     constructor(){
//         this.name = 'allen'
//     }
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person();
// console.log(p)

let x = (a: number) => 1;
let y = (b: number, s: string) => 2;

y = x; // OK
console.log(y(5,'s'))
// console.log(y)