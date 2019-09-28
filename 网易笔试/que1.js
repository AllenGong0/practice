const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    print(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});


// let line = readline()
// var n = parseInt(readline());
// var q = parseInt(readline());
//
// let arrM = [];
// var arr = line.split(" ")
// for(let j = 0;j < n; j++){
//     arrM[j] =  parseInt(arr[j]);
// }
//
// var arrList = []
// for (let i=0;i<q;i++){
//     arrList[i] = parseInt(readline());
// }
//
//
// // let n  = 4,m=3;
// // let arr = [1,2,3];
// // let q = [3,3]
//
// for (let i=0;i<q;i++){
//     let num=0;
//     for (let j=0;j<arr.length;j++){
//         if (arrM[j]>=arrList[i]){
//             num++;
//             arrM[j]=arrM[j]-1
//         }
//     }
//     print(num)
// }
