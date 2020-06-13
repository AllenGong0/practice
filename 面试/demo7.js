// function find(arr,item){
//     var left = 0;
//     right = arr.length-1;
//     while(left<=right){
//         var mid = Math.floor((left+right)/2);
//         if(arr[mid] === item){
            
//             if(arr[mid]!==arr[mid+1] || mid===arr.length-1){
//                   return mid
//             }else{
//                 left = mid + 1;
//             }
//         }else if(arr[mid]>item){
//             right = mid - 1;
//         }else{
//             left = mid + 1
//         }
//     }
//     return -1;
// }
// let res = find([1,2,2,2,2],2)
// console.log(res)

