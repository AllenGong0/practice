// 
var uniquePaths = function(m, n) {
    let dp = new Array(m);
    dp[0] = new Array(n).fill(1)
    for(let i=1; i<m; i++){
        dp[i] = new Array(n+1)
        dp[i][0] = 1;
        for(let j=1; j<=n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};

uniquePaths(3,2)