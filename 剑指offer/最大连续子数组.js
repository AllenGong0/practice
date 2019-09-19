
    //题目为求最大连续子数组
    //记录上次的和 如果当前值大于0  记录并在下一步和max去比较，选取其中较大的值为max
    //真的是自己菜了 ps:n是牛客网需要的 js本身并不需要
    function maxSonArr(n,arr){
        // let arr = [3,-1,2,1];
        let maxNum=Number.MIN_VALUE,curr=0;
        for (let i=0;i<n;i++){
            curr+=arr[i];
            maxNum = curr>maxNum?curr:maxNum;
            // maxNum = Math.max(curr,maxNum);
            curr = curr>0?curr:0;
        }
        return maxNum;
    }

    let arr = [5,2,5,-1,6,5];
    let n = arr.length;
   console.log(maxSonArr(n,arr));
