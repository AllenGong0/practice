var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let curr = 0,sum = Number.MIN_VALUE;
rl.on('line', function(line) {
    let token = line.split(" ");
    for (let i=1;i<=token[0];i++){
        curr+=(token[i]*1)
        sum = curr>sum?curr:sum;
        curr = curr>0?curr:0
    }
    console.log(sum)
})
