// var arr = [1, 2, [4, 3], [5, 6, 8], [7, 8, [10, 9]]];

// var arr2 = [{name: 'a', age: 1}, {name: 'b', age: 2},
//              [{name: 'c', age: 3}]]

// 扁平化去重排序
// function handerArr(arr){
//     return (arr instanceof Array)?
//          [...new Set(arr.toString().split(",").map((item)=>{
//             return item*1
//         }))].sort((a,b)=>{
//            if(a.age>b.age) return 1;
//            else return -1
//        }):'请传入数组作为参数'
   
// }

// function handerArr(arr){
//     let newArr = [];
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index] instanceof Array){
//             let tmpArr = arguments.callee(arr[index])
//             for (let j = 0; j < tmpArr.length; j++) {
//                 newArr.push(tmpArr[j]);
//             }
//         }else{
//             newArr.push(arr[index]);
//         }
        
//     }
//     if((typeof newArr[0])!=='object'){
//         newArr = new Set(newArr)
//     }
//     return newArr.sort((a,b)=>{
//         if(a.age>b.age){
//             return 1
//         }else{
//             return -1
//         }
//     })
// }

/**
 * params:1
 * type:Array
 */

var arr2 = [
    {name: 'c', age: 0,  rank: 70},
    {name: 'a', age: 1, rank: 90},
    {name: 'b', age: 2,  rank: 80},
    {name: 'c', age: 3,  rank: 70},
    {name: 'c', age: 2,  rank: 70}
];

 function sortObj(a,b){
    if(a.rank===b.rank){
        if(a.age>b.age){
            return 1
        }else if(a.age===b.age){
            if(a.name>b.name){
                return 1
            }else{
                return -1
            }
        }else{
            -1
        }
    }else if(a.rank>b.rank){
        return 1
    }else{
        return -1
    }
 }

 function sortObj(a,b,props,step){
    if(a[props[step]]===b[props[step]]){
        return sortObj(a,b,props,step+1)
    }else if(a[props[step]]>b[props[step]]){
        return 1
    }else{
        return -1
    }
 }
console.log(arr2.sort(sortObj))