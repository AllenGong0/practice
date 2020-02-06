var artTemplate = require('art-template');
var tempStr = 'name:{{name}}'
var res = artTemplate.render(tempStr,{
    name:'allen'
})
console.log(res)