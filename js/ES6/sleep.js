function sleep(interval){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve, interval);
    }).then(()=>{
        console.log("this is promise")
    })
}

async function one2FiveInAsync(interval){
    for(let i=0; i<5; i++){
        console.log('this is sleep')
        await sleep(interval)
    }
    return 5
}

let a = one2FiveInAsync(1000);
a.then((data)=>console.log(data))