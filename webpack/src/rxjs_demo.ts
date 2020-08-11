// const { interval } = require('rxjs');
// const { Observable, Subscriber, of, from, Subject} = require ('rxjs');
// const { map ,first, last, filter, multicast} = require('rxjs/operators')
// import _ from 'lodash';
// const observable = new Observable(subscriber => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });
 
// console.log('just before subscribe');
// observable.subscribe({
//   next(x) { console.log('got value ' + x); },
//   error(err) { console.error('something wrong occurred: ' + err); },
//   complete() { console.log('done'); }
// });
// console.log('just after subscribe');

//If either an Error or Complete notification is delivered, then nothing else can be delivered afterwards.
// const foo = new Observable( subscriber => {
//     try {
//       console.log("hello");
//       subscriber.next(42);
//       setTimeout(()=>{
//         subscriber.next("timeout")
//       },1000)
//       new Promise((resolve, reject)=>{
//         resolve(5)
//       }).then(res=>{
//         subscriber.next(res)
//       });
//       subscriber.complete();
//     } catch (error) {
//       subscriber.error(error)
//     }

// })
// foo.subscribe(next, error, complete)
// you can also pass an object as arguments
// let sub = foo.subscribe( x => {
//   console.log(x)
// })
// sub.unsubscribe();
// console.log(sub);

// let obs = new Observable(subscriber => {
//   // let timer = setInterval(()=>{
//   //   subscriber.next(3);
//   //     console.log("4")
//   // },2000)
//   subscriber.next(22);
//   subscriber.next(22);

//   return function unsubscribe() {
//       // clearInterval(timer);
//   }
// });
// obs.subscribe({
//   error() {console.log("this is error")},
// })
// let a = obs.subscribe( x => {
//   console.log("a"+x);
// })
// a.unsubscribe();//cancel subscribe
// let arr = [1,2,3]
// let tmp = [2,4,3]
// let obj = {
//   name:'2',
//   age: 20
// }
// let b = of(1,2,3)
// console.log(b);
// //from 数组
// last()(of(2,4,5)).subscribe((v) => console.log(`value: ${v}`));
// arr.push(4);
// const observable = interval(1000);
// const subscription = observable.subscribe(x => console.log(x));
// // Later:
// // This cancels the ongoing Observable execution which
// // was started by calling subscribe with an Observer.
// subscription.unsubscribe(); //取消所有订阅

// let ob1 = interval(3000);
// let ob2 = interval(4000);

// let sub1 = ob1.subscribe(x=>console.log("this is ob1 "+x))
// let sub2 = ob2.subscribe(x=>console.log("this is ob2 "+x))

// sub1.add(sub2);

// setTimeout(()=>sub1.unsubscribe(),4000);

// let sub = new Subject();

// sub.subscribe(x=>console.log(x),x=>x,x=>x);
// sub.subscribe(x=>console.log(x+"b"));

// const observable = from([1, 2, 3]);
 
// observable.subscribe(sub);

// const source = from([1, 2, 3]);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));
 
// // These are, under the hood, `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v:any) => console.log(`observerA: ${v}`)
// });
// multicasted.subscribe({
//   next: (v:any) => console.log(`observerB: ${v}`)
// });
 
// // This is, under the hood, `source.subscribe(subject)`:
// multicasted.connect();