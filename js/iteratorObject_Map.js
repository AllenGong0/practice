let map = new Map();
map.set('a','b')
map.set('b','b')
map.set('c','b')
map.set('d','b')
console.log(map.keys())

map.forEach((val,pro)=>{
    console.log("pro:"+pro+':'+"val:"+val)
})

let obj = {
    name:'allen',
    age:20,
    sex:'men'
}


for(let key in obj){
    console.log(key)
}

Object.keys(obj).forEach(()=>{
    
})