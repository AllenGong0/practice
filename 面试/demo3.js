// function flat(arr){
//     let res = [];
//     arr.forEach((item) => {
//         if(Array.isArray(item)){
//             res.push(...flat(item))
//         }else{
//             res.push(item)
//         }
//     });
//     return res;
// }
// let a = flat([1,2,3,[4,5,6,[7,8,9]]])
// console.log(a)
(function(ms){
    let tmp ;
    function set(n){
        clearTimeout(tmp);
        if(n){
            tmp = setTimeout(()=>{
                set(n--)
            },ms)
        }
    }
}(ms))

    
