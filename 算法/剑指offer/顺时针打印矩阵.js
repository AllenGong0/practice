let arr = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ] 
console.log(arr)
function printArr(arr){
    let newArr = []
    // top:left->right
    let j=0
    let row,col,bottom=arr.length-1,right=arr[0].length-1;
    while(j<Math.ceil(Math.min(arr.length,arr[0].length)/2)){
        row = j;
        for(let i=j; i<=arr[0].length-1-j; i++){
                console.log("this is l->r ")
            newArr.push(arr[row][i])
        }
        if(bottom!==j){
            row ++;
            col = arr[0].length-1-j;
            
            for(let i=row; i<=arr.length-1-j; i++){
                console.log("this is top->bottom")
                newArr.push(arr[i][col])
            }
        
            row = arr.length-1-j
            col--;
            if(j!==right){
                for(let i=col; i>=j; i--){
                    console.log("this is r->l")
                    newArr.push(arr[row][i])
                }
                col = j;
                row--;
                for(let i=row; i>=j+1; i--){
                    newArr.push(arr[i][col])
                }
            }
        }
        bottom--;
        right--;
        j++;

    }
    console.log(newArr)
}
printArr(arr)