let x= 9;
if(true){
  let x=5;
}

console.log(x);

for(let x=1; x<=10;x++){
   console.log();
}

let p= 25;
let q=30;
let sum = p+q;
console.log(`sum is ${sum}`);

let name= "Rezwanur Fahim";
let massege= `I am ${name}, learning Javascript`;
console.log(massege);

// function declaration in ES6

const add=(x,y)=>{
  let sum = x+y;
  console.log(sum);
}

add(20,30);

"use strict"
function message(text=" Default parameter"){
  console.log(`${text}`);
}
message("I love HTML and JS ES6.");
message();   // strict can print default paprameter

function sum2(x,y,...z){     // rest parameter can print rest of the value
    console.log(`x=${x}, y=${y}, z=${z}`);
}
sum2(5, 7, 8, 11, 100);

function addNum(x, y, z){
  return x+y+z;
}

let numbers=[1,7,9];
console.log(addNum(... numbers));    // spread operator also use 3 dots

let numbers1=[5, 7, ...numbers];
console.log(numbers1);

let numbers2=[3, 5, ...numbers, 9, 12];
console.log(numbers2);

let numyo= numbers1.concat(numbers2);
console.log(numyo);

let numyoyo=[...numbers1, ...numbers2];

console.log(numyoyo);

let p1={     // Object 1
  name: "Rezwanur Rahman ",
  age: 30
}

let p2= {        // object 2
  nationality: "Bangladesh",
  ocupation : "Engineer"
}

let p3 ={...p1, ...p2}   // concatination through spread operator
console.log(p3);

//  object letarals

function studentinfo1(name, age){
  return {
    //name: name,
    //age: age

    name,         // it will work same 
    age             // ES6 helps to eliminate duplication 
  }
}

console.log(studentinfo1("Fahim", 29));

// consize method
let messageBoy= {
  body : function(){     // body is an object and a function declared in it
    return `Hello! Returing from object function`
  }
}

console.log(messageBoy.body());

// now doing the same using consize method
let messageBoy2 = {
  body(){
    return " Returning from consize method."
  }
}
console.log(messageBoy2.body());

let messageBoy3 = {
  'body name'(){
    return " Returning from messageBoy3 consize method."
  }
}
console.log(messageBoy3['body name']());

// for of loop

const nameyo =["Fahim", "Jaoyad", "Musa"];
for(let x of nameyo){
    console.log(x);
}

// for in loop

let students= {
  name: 'Fahim',
  ID: 1808059,
  gpa: 3.9
}
for(let x in students){
   console.log(x);
   console.log(students[x]);
}
//for(let x of students){  // not valid cause it is not iterable
 // console.log(x);}

// for vs foreach loop 

var name5=[10, 20, 30, 40];
for(let x=0; x<name5.length;x++){
    console.log(name5[x]);
}

name5.forEach(myFunction);

function myFunction(x){
  console.log(x);
}

var squarenum=[];

// doing the same with annonumus function 
name5.forEach(function(x, index, arr){
  squarenum.push(x*x);
 // console.log(l);
 arr[index]=x+5;
});

console.log(name5);

console.log(squarenum);  // creating a new array


// map and filter
var numb =[2,5,7,9,12, 22, 31, 35, 26,78]
var squarenumb= numb.map(function(x){    // map() makes an array by itself
    return x*x;
});

console.log(squarenumb);

var newnumb= numb.filter(function(x){    // filter() makes an array by itself
  return x>10;
});

console.log(newnumb);





