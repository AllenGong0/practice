function Fibo(n,ret1,ret2){
    if(n===1) return ret1
    return Fibo(n-1,ret2,ret1+ret2)
}

console.log(Fibo(5,0,1))