var a = 1
function foo(){

    console.log(this)
}

let o1 = {
    a:5,
    foo:foo
}

let o2 = {
    a:6,
}

// o1.foo()
let b = (o2.foo = o1.foo)
// console.log(b)
b()