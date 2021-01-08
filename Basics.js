console.log(__dirname);
//the current dic C:\Users\William\WebstormProjects\NodeJSBasics
console.log(__filename);
//the current file C:\Users\William\WebstormProjects\NodeJSBasics\Basics.js
// Sources can be the ones that come with Node.js, the ones we install using npm, or our own .js files


const path = require("path");

console.log(`The directory name is ${path.basename(__dirname)} and the file name is ${path.basename(__filename)}`);
//output: The directory name is NodeJSBasics and the file name is Basics.js

//Another example of global
console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv); // an array showing where the node interpreter is coming from as well as the source code we are going to run

