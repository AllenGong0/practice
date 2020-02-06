
new Promise((resolve,reject)=>{
    reject()
}).then(()=>{

},()=>{
    return Promise.reject('555')
}).then(()=>{
    console.log("-+++5")
},(data)=>{
    console.log(data)
})