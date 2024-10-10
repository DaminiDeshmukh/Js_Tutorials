// data types - 2 types -primitive and non-primitive =call by value and call by reference - based on how data is stored in sysytem
//primitve - 7 
/*
string-jb inko copy krte h to inki location k refernce nhi dia jata,inko copy krkr dete h
NUMBER
BOOLEAN
NULL- TEMP WALA YAAD KRNA
UNDEFINED
SYMBOL
BigInt

JS IS DYNAMIC TYPED LANGUAGE BECAUSE TYPE PHELE SE NHI BTATE.the type of a variable is determined at runtime, and you don't have to explicitly declare the type of a variable when you define it. Variables can hold values of any type, and the type can change as the program runs.


//


*/
const score =false
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null  
let userEmail; //undefined
//let userEmail=undefined
const id=Symbol('123')
const AnotherId=Symbol('123')
console.log(id==AnotherId);

const bigNumber=2487372852738458n

// reference(non-primitive)
// inka reference directly allocate kia jata h ,inka return type function hota h and function k return type is object function
// ARRAY
// OBJECT*(EVENTS BHI MASTER KR LOO*)
// FUNCTIONS

const heroes=["shaktiman","captain marvel","ratan tata"]; //array
//object
let myObj=
{
    name:"damini",
    age:21
}
//function is used an a variable
const myFunction=function()
{
    console.log("Hello WOrld");
}
console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof myFunction);
//null is a type of object

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */