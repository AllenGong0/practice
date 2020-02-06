let p1 = new Promise((resolve,reject)=>{
    reject()
})
p1.then(()=>{
    console.log("then1")
}).catch(()=>{
    console.log("catch1")
    return 'aa'
}).then((data)=>{
    console.log(data)
    console.log("new promise")
})