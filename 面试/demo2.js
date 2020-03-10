let arr = [1,1,2,2,3];
arr.sort((a,b)=>{
    if(a>b)return 1
    else return -1
})
let n = arr.length;
for(let i=0; i<n; i++){
    if(arr[i] === arr[i+1]){
        arr.push(...arr.splice(i,1));
        n = n-1;
    }
}
console.log(arr);

