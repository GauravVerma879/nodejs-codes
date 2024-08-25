console.log("this is a global module") //global modulebecause we do need to import/require anyehre this function is already available in node enviromrnt
const fs=require('fs')
const { dirname } = require('path')
fs.writeFileSync("module.txt","This is a non global module") //because we do need to import/require anyehre this function is already available in node enviromrnt
console.log("-->",__dirname) //get current directory path
console.log("-->",__filename) //get current file path