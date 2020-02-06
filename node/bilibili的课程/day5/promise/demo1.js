import { rejects } from "assert";

//数据库查询多表可以用promise.all[]方法，发起去异步请求
function ajax({url,method},callback){
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = ()=>{

            //多种形式
            callback(xhr.responseText)
            resolve(xhr.responseText)
        }
        xhr.onerror = ()=>{
            reject(xhr.responseText)
        }
        xhr.send();
    })
}