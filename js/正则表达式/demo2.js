// let reg = /./
// let str = '\n';
// let flag = reg.test(str);
// console.log(flag)  
//多行处理
// let str = `
//     #1 js,200元 #
//     #2 php,300元 #
//     #9 allen # 艾伦
//     #3 node.hs,180元 #`
//     let i = 0;
// str.match(/\s*#\d+\s+.+\s+#$/gm).map((v)=>{
//     let tmp = v.replace(/#\d+/,'').replace('#','').trim()
//     console.log(tmp)
// })

//a [L] 字符有L属性代表是字母
//  let str = 'allen';
//  console.log(str.match(/\p{L}/gu)) 

// let str = `https://allen.com?code=5&net=7`;
// let res = str.match(/\w*=\w*/g);
// console.log(res)
// res.map((w)=>console.log(w))
console.log(new Date())
let str = `
    <h1>allen</h1>
    <span>宫立新</span>
    <h2>asd</h2>
`
let reg = /<(h[1-6])>([\s\S]+)<\/\1>/gi
console.log(str.replace(reg,'<p>$1</p>'))
// $可以取到第几个原子组