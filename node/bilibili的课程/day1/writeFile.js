var fs = require('fs');

fs.writeFile('./da/你好.md',`大家好

，我是------`,(error)=>{
    console.log(error)
})