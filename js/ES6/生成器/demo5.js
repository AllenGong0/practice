//错误的双层传递，可以向里面传递错误也可向外面传递错误

function *foo(){
    try{
        yield "B"
    }catch(err){
        console.log("error caught inside *foo():",err)
    }
    yield "C"
    throw "D"
}

function *bar(){
    yield "A";
    try{
       yield *foo()
    }
    catch(err){
        console.log("error caught inside *bar():",err)
    }
    yield "E"

    yield *bar();
    
    yield "G"
}

var it = bar()

console.log("outside:",it.next()) //A
console.log("outside:",it.next(1)) //B
console.log("outside:",it.throw(2)) //c
console.log("outside:",it.next(3)) //D
try{
    console.log("outside:",it.next(4))
}catch(err){
    console.log("outside:",err)
}
