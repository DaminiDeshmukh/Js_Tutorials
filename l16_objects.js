/*
objects ko declare krne k 2 tarike h - constructor ya literals m

//singleton - ek hi instance bnega, jaise ki ek hi ghar hoga,constructor se hamesha singleton bnegaa

Object.create() //empty object
Object.create(null) //null object

//object literals
*/
//object in js- key value pair, key is string, value can be anything, object can be nested, object can be passed as argument, object can be returned from function.
//object is a reference type, object is mutable, object is dynamic, object is unordered, object is iterable, object is extensible
//const JsUser={} //empty object

//symbol is a data type in js, it is used to create unique keys in object


//symbol declare
const mySym=Symbol("key1");
const JsUser={
    name:"damini",
    "full name":"damini deshmukh", ///ise . se access nhi kr skte, iske liye [] use krna pdega
    age:21, //object m key value pair hote h
    location:"M.p.",
    email:"daminideshmmukh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    // mySym:"mykey1",//datatype symbol nhi ayega, ye string hi ayega
    [mySym]:"mykey1",

}
//object access
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser.full name); error
// console.log(JsUser.mySym); //mykey1
// console.log(typeof JsUser.mySym); //string
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]); //symbol
//interview q - what is the use of symbol in js?- to create unique keys in object
//interview q- what is the use of object in js?- to store multiple values in a single variable
//interview q- symbol ko as a key use krna h, toh kaise use krenge? - [] m symbol ko pass krenge
//interview q-ek symbol lo use object ki keys m add kro aur print kr kr dikha doo-
//how to access objects in js- . or [] m se koi bhi use kr skte h
//object ki keys ki values change kr skte h, object ki keys ko change kr skte h, object ki keys ko delete kr skte h, object ki keys ko add kr skte h
JsUser.email="dd@gmail.com"
// Object.freeze(JsUser); //object ko freeze krne k liye, object ki keys ki values change nhi kr skte h
// JsUser.email="dd12@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser);

//functions ko variable ki trh use kr skte h, object ki keys m bhi function ko add kr skte h
JsUser.greeting=function()
{
    console.log("hello buddy");
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo=function()
{
    console.log(`hello ${this.name}`); //refer kr rhe h
    //this. keyword is used to refer the object
}
console.log(JsUser.greetingTwo());