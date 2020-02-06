let arr = [-3,-4,1,3,-2,5,7,-1,5]
//第一个出现正数和最后一次出现负数
let zInd = 0,fInd=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]>0&&zInd===0){
        zInd = i
    }
    if(arr[arr.length-1-i]<0 && fInd===0){
        fInd = arr.length-1-i;
    }
    if(zInd!==0&&fInd!==0){
        break;
    }
}
console.log(zInd,fInd);