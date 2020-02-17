//dp[i] = Math.min(dp[i-2],dp[i-5],dp[i-7])+1   
// let dp = new Array(27).fill(Infinity);
// dp[0] = 0;
// for(let i=1; i<=26; i++){
//     let tmp = []
//     if(i>=2){
//         tmp.push(dp[i-2])
//     }
//     if(i>=5){
//         tmp.push(dp[i-5])
//     }
//     if(i>=7){
//         tmp.push(dp[i-7])
//     }
//     dp[i] = Math.min(...tmp)+1
// }
// console.log(dp)

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //+1 因为0
    let dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <=amount; i++) {
        for(let j=0; j<coins.length; j++){
            if(i>=coins[j] && dp[i - coins[j]]!==Infinity){
                dp[i] =Math.min(dp[i - coins[j]] + 1,dp[i])
            }
        }
    }
    return dp[amount]
};
console.log(coinChange([2,5,7],27))