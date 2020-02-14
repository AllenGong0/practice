// var x = 1 
// function ScopeTest() { 
//     alert(x)    //1 
//     var x = 'hello world'     
//     alert(x)  //hello world
// } 
// ScopeTest()
//let url = 'http://www.xxx.com/?a=2#b=3';
// function parseQueryString(url = 'http://www.xxx.com#ad/?a=2#b'){
//     let obj = {}
//     let params = url.split("?")[1];
//     let paramArr = []
//     if(~params.indexOf('&')){
//         paramArr = params.split('&')
//     }
//     if(~params.indexOf('#')){
//         paramArr = params.split('#');
//     }
//     for(let i = 0; i < paramArr.length; i++){
//         let tmp = params[i];
//         let para = tmp.split("=");
//         obj[para[0]] = para[1]
//     }
//     return obj;
// }
// parseQueryString()

// let p1 = new Promise((res,rej)=>{
//     res("55")
// }).then((res)=>{
//     console.log(res)
//     return Promise.resolve("66")
// })
// Promise.all([p1]).then((res)=>{
//     console.log(res)
// })

function copyObj(obj){
        let newObj = {}
        let objArr = Reflect.ownKeys(obj);
        for(let i = 0; i < objArr.length; i++){
            let key = objArr[i]
            if(obj[key] instanceof Array){
                let tmpArr = obj[key]
                let newArr = [];
                for(let j = 0; j < tmpArr.length; j++){
                    if(tmpArr[j] instanceof Object){
                        newArr.push(copyObj(tmpArr[i]))
                    }
                    newArr.push(j);
                }
                newObj[key] = newArr
                continue;
            }
            if(obj[key] instanceof Object){
                newObj[key] = copyObj(obj[key]);
                continue;
            }
            newObj[key] = obj[key]
        }
        return newObj
    }
    let obj = {
        name:'allen',
        age:30
    }
    console.log(copyObj(obj))