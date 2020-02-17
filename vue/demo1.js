

    // function longestPalindrome(s) {
    //     let n = s.length,res = ''
    //     if (n === 0) return "";
    //     if (n === 1) return 1;
    //     let dp = [];

    //     for(let i = 0; i < n; i++){

    //         let tmp = [];
    //         tmp[i] = 1;
    //         dp[i] = [...tmp];
    //         if(!res) res = s.charAt(i)
    //         if(s.charAt(i)===s.charAt(i+1)){
    //             dp[i][i+1] = 1;
    //             res = s.substr(i,2)
    //         }

    //     }

    //     for (let j=3;j<=n;j++){  
    //         for (let q = 0;q < n;q++){
    //             let end = j+q-1;
    //             if (s.charAt(q)===s.charAt(end) && dp[q+1][end-1]===1){
    //                 dp[q][end] = 1;
    //                 res = s.substr(q,j);
    //             }
    //         }
    //     }

    //     console.log(res)
    // }

    // longestPalindrome("qqeqqaardaqadraa")

    var s = 'wdwdw';
    let dp = [],n=s.length,longest = 1,res = ''
     for(let i=0; i<n; i++){
         let tmp = new Array(n).fill(0);
         tmp[i] = 1
         dp[i] = [...tmp];
         if(!res) res = s.charAt(i)
         if(s.charAt(i)===s.charAt(i+1) ){
             dp[i][i+1] = 1;
             res = s.substr(i,2);
         }
     }
     for(let j=2; j<n; j++){
         for(let q=0; q<n; q++){
             let end = j+q;
             if(s.charAt(q)===s.charAt(end) ){
                 if((end-q+1)>longest){
                     longest = j+1;
                     res = s.substring(q,longest);
                     dp[q][end] = 1
                 }
             }
         }
     }
     console.log(res)
