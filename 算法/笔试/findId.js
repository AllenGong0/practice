// let arr = [
//     {
//         "name": "a",
//         "id": 1,
//         "children": [
//             {
//                 "name": "b",
//                 "id": 2
//             },
//             {
//                 "name": "c",
//                 "id": 3,
//                 "children": [
//                     {
//                         "name": "e",
//                         "id": 5
//                     },
//                 ]
//             }
//         ]
//     },
//     {
//         "name": "d",
//         "id": 4
//     }
// ]

// function findId(arr){
//     let newArr = [];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(arr[i]['id']);
//         if(arr[i].hasOwnProperty('children')){
//         newArr.push(...findId(arr[i]['children']))
//         }
//     }
//     return newArr
// }


// console.log(findId(arr));

let arr = [
    {
        "year": 2018,
        "month": 9,
        "day": 20,
        "num": 20
    },
    {
        "year": 2018,
        "month": 6,
        "day": 10,
        "num": 200
    },
    {
        "year": 2019,
        "month": 9,
        "day": 20,
        "num": 20
    },
    {
        "year": 2017,
        "month": 9,
        "day": 20,
        "num": 20
    }
]


//用key存储 ！！！数据解构非常重要！！！解题时候一定要想着数据解构！！！
function statistical(array){
    let obj = {}
    for (let index = 0; index < array.length; index++) {
        obj = {}
    }
}

statistical(arr)
