const path= require("path");
const mypath= 'E:/node/node-express-mongodb-freecodecamp/module-two/index.js'

console.log(path.basename(mypath));
console.log(path.dirname(mypath));
console.log(path.extname(mypath));
console.log(path.parse(mypath));