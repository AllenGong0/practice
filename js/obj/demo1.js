let o1 = {
    a:5,
    b:6,
    c:7
}

let o2 = {
    q:1,
    w:2,
    e:3
}

let oo = Object.assign({},o1,o2)
console.log(oo)
o1.a = 6;
console.log(o1)
console.log(oo)
