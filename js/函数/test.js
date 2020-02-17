let res = '';
let num = ''
let str  = '45646'
function isNum(str){
    return str >= '0' && str <='9'
}

for(let i=0; i<str.length; i++){
    let tmp = str.charAt(i);
    if(isNum(tmp)){
        num += tmp;
        if(isNum(str.charAt(i+1)) && isNum(str.charAt(i+2)) && !res){
            res = str.substr(i,i+3);
        }
    }
}

console.log(res);