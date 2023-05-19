const fs= require("fs");

// parameter => filename, ke likba seta
fs.writeFileSync('myfile.txt', 'hello programmers');
fs.appendFileSync('myfile.txt', 'anis write programme');
/*
note:
1. fs.writeFileSync()  
ata abar dele agerta replace hoye jabe

*/

//reading file

const data=fs.readFileSync('myfile.txt')
console.log(data);
//orginal data pete
console.log(data.toString())

//asunchronously
const data_two= fs.readFile('myfile.txt', (err, data)=>{
    console.log(data.toString());
})
console.log("anis practice node js");