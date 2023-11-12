const data= require("./Friends_data.json");
console.log(data);

// for running this node.js should be installed 
// Follow Anisul Islam video no 100.
// currently don't have node js installed 
// require is not working here , not defined 

console.log(data.friends[0]);

data.friends[0].name="Anis";
console.log(data.friends[0].name);
