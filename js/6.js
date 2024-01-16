//primitive

// string number boolean null undefined,symbol,bigint
//references(non primitive)
//array ,object,function
const score =100
const scoreValue=100.3
const isLoggedIn=false
const outSideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof myFunction);
console.log(typeof anotherId);

