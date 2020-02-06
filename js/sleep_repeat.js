function repeat(func, times, wait) {
    return  function fn(str){
        new Promise((resolve,reject)=>{
            let timeOut = setTimeout(() => {
                resolve({func,str})
                clearTimeout(timeOut)
            }, wait);
        }).then(({func,str})=>{
            if(times--){
                func(str)
                arguments.callee(str)
            }
        })
    }
}


var repeatFunc = repeat(console.log, 2, 1000)
repeatFunc("hello")