let bigNum1 = '9999999999999999999999999999999999999';
let bigNum2 = '99999999999888888888888888888888888888888888888888888888';
// 100999999998
let i = bigNum1.length-1,j = bigNum2.length-1,sum = '',carry = 0;;
console.log(i,j)
while(i>=0||j>=0||carry){
    let a = bigNum1.charAt(i);
    let b = bigNum2.charAt(j);
    let tmpSum;
    if(a&&b){
        tmpSum = parseInt(a) + parseInt(b) + carry;
    }else if(a&&b===''){
        tmpSum = parseInt(a) + carry
    }else if(a===''&&b){
        tmpSum = parseInt(b) + carry
    }else{
        tmpSum = carry;
    }
    if(tmpSum>9){
        carry = 1;
    }else{
        carry = 0
    }
    if(tmpSum !== 0){
        sum += tmpSum%10;
    }
    i--;
    j--
}
console.log(sum.split("").reverse().join(""))