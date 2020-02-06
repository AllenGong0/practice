const promiseA = Promise.resolve('a');
promiseA.then((res)=>{
    console.log('1:'+res)
}).then((res)=>{
    console.log('2:'+res)
})

const promiseB = Promise.resolve('b');
promiseB.then((res)=>{
    console.log('3:'+res)
})
promiseB.then((res)=>{
    console.log('4:'+res)
})