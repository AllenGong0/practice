// let str = '2211KpU0o7nZbj'
// console.log(str.replace(/\d+/g,(item)=>{
//     return '*' + item + '*'
// }))
function big(){
    return 5
}
async function get(){
    let a = await big()
    console.log(a)
} 
get()