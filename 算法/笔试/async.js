function foo(){
    console.log("5")
}

async function fn(){
    await foo();
    console.log(6)
    return '6'
}
fn()
console.log("55555")