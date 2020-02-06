var arr = [1, 2, [4, 3], [5, 6, 8], [7, 8, [10, 9]]];

var arr2 = [
    {name: 'a', age: 1, rank: 90},
    {name: 'b', age: 2,  rank: 80},
    {name: 'c', age: 3,  rank: 70},
    {name: 'c', age: 2,  rank: 70},
    {name: 'abc', age: 2,  rank: 70}
];



// 扁平化去重排序

function flatten(array) {
    return arr.reduce((result,item)=>{
        return result.concat(Array.isArray(item)?flatten(item):item);
   },[]);
}
function sort() {
}
function deduplicate() {

}
function handerArr(arr){
    // 1. let 和 const 区别
    
    // 扁平化
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if(Array.isArray(arr[index])){
            // 2. 数组的拼接，有什么其他方法么
            newArr = newArr.contact(handerArr(arr[index]))
        }else{
            newArr.push(arr[index]);
        }
        
    }
    
    // 排序
    if((typeof newArr[0])!=='object'){
        // 3. set 不兼容怎么办
        let new_arr = [];
        indexOf  === -1;
       // babel => babel-polyfill  //es6 -> es5 
       // newArr = new Set(newArr)
    }
    
    // 去重
    return newArr.sort((a,b)=>{
        return a > b;
    })
}


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


/**/
function createGenericComparer(key, asc = true) {
    const sign = asc ? 1 : -1;
    return (a, b) => {
        if (a > b) {
            return sign;
        }
        if (a < b) {
            return -sign;
        }
        return 0;
    }
}

function createCombineComparer(comparerList) {
    return (a, b) => {
        let result = 0;
        comparerList.some(comparer => {
            result = comparer(a, b);
            if (result) {
                return true;
            }
        });

        return result;
    }
}

function rankComparer(a, b) {
    if (a.rank === b.rank) {
        return 0;
    }

    if (a.rank === null) {
        return 1;
    }

    if (b.rank === null) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    if (a < b) {
        return -1;
    }

    return 0;
}

dataList.sort(
    createCombineComparer([
        rankComparer,
        createGenericComparer('age'),
        createGenericComparer('name', false),
    ])
);


 function sortObj(a,b,props,step){
    if(a[props[step]]===b[props[step]]){
        return sortObj(a,b,props,step+1)
    }else if(a[props[step]]>b[props[step]]){
        return 1
    }else{
        return -1
    }
 }

console.log(handerArr(arr2));
//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];