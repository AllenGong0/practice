let obj = {
    name: 'allen',
    age: 20,
    arr:[54,8,51,8]
}

let proxy = new Proxy(obj, {
    get: function (target, propKey, receiver) {
        console.log(`getting ${propKey}!`);
        return Reflect.get(target, propKey, receiver);
    },
    set: function (target, propKey, value, receiver) {
        console.log("getter")
        return Reflect.set(target, propKey, value, receiver);
    }
})

proxy.age = 5
console.log(proxy.arr.push(5));