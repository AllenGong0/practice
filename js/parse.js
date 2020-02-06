const recast = require("recast");

const code = 
        `
        function add(a,b){
            return a +
            
            b
        }
        `
const ast = recast.parse(code);

const add = ast.program;

console.log(add.body[0].body.body[0]);


