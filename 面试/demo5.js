// function person(){
//     this.name = "allen"
// }
// person.prototype.say = function(){
//     console.log(this.name)
// }

// let b = new Object();

// let a = new person();
// for(let key in b){
//     console.log(key)
// }

// for(var i=0; i<4; i++){
//     setTimeout((i)=>{
//         console.log(i)
//     },1000*i,i)
// }

function setInt(fn,timeout,n){
    let tmp;
    function tim(){
        tmp = setTimeout(()=>{
            clearTimeout(tmp)
            fn()
        }, timeout*n);
    }
    while(n--){
        tim();
    }
}
setInt(()=>{
    console.log(55)
},3000,5)