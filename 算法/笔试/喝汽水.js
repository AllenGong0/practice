// let count = 0;res = 0,full = 0,n = 81;
// while(n>=2){
//     if(n===2) {
//         console.log("n")
//         n = 0;
//         count++;
//     }else{
//         res = n%3;
//         full = parseInt(n/3);
//         count += full;
//         n = res + full
//     }
// }
// console.log(count)

// let str = 'swumneiiii'
// let arr = str.split(""),strReg = '',min = Infinity;
// let obj = {};
// for(let key of arr){
//     if(obj.hasOwnProperty(key)){
//         obj[key]++;
//     }else{
//         obj[key] = 1;
//     }
// }
// for(let key in obj){
//     let count = obj[key];
//     if(count<min){
//         min = count;
//         strReg = key;
//     }else if(count === min){
//         strReg += key;
//     }
// }
// console.log(str.replace(new RegExp('['+strReg+']','g'),""))


// let str = 'A Famous Saying: Much Ado About Nothing (2012/8).'
// let res = '';
// function strSort(a,b){
//     let reg = /[a-z]/
//     if(reg.test(a)){
//         a = a.toUpperCase();
//     }
//     if(reg.test(b)){
//         b = b.toUpperCase();
//     }
//     if(a<b){
//         return -1
//     }else{
//         return 1
//     }
// }
// let newStr = str.match(/[a-z]+/gi).join("").split("").sort(strSort).join("")
// for(let i=0,j=0; i<str.length; i++){
//     let tmp = str.charAt(i);
//     if(/[a-z]/i.test(tmp)){
//         res += newStr.charAt(j++)
//     }else{
//         res += tmp;
//     }
// }
// console.log(res)
//#$A^!#ab&~#CccCCCcDdef&Fff%g@(hIkl@LM^mmOPP((p$P-Rs&T-t$t%Uuv)wxYy@y-yZ
// let str = '#$Y^!#Pf&~#FUyTtAfZhCs&Dly%M@(muOI@Le^mydvc((w$x-cP&t-f$R%CCp)bCck@P-ag'
// //  let str = 'A Famous Saying: Much Ado About Nothing (2012/8).'
//  let letter = new Array(26).fill(''),res = '';
//  for(let i=0; i<str.length; i++){
//      let s = str.charAt(i);
//      if(/[a-z]/i.test(s)){
//          let index = s.charCodeAt()-(/[a-z]/.test(s) ? 97 : 65);
//          console.log(index)
//          letter[index] += s;
//      }
//  }
// let newStr = letter.join("");
// for(let i=0,j=0; i<str.length; i++){
//     let tmp = str.charAt(i);
//     if(/[a-z]/i.test(tmp)){
//         res += newStr.charAt(j++)
//     }else{
//         res += tmp;
//     }
// }
//#$A^!#ab&~#CccCCCcDdef&Fff%g@(hIkl@LM^mmOPP((p$P-Rs&T-t$t%Uuv)wxYy@y-yZ

