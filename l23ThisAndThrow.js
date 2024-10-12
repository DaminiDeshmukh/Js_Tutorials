// const user={
//     username:"damini",
//     price:1000,
//     welcomeMessage:function() //function inside object
//     {
//         console.log(`${this.username},welcome to website`);
//         console.log(this)//this refers to object/current context
//     }

// }
// user.welcomeMessage();
// user.username="simmy"
// user.welcomeMessage();

// console.log(this)//node environment m empty kyuki global context m abhi kuch nhi h
//yahi line console m run krne pr window object print krega kyuki window object hota h browser m as a global object
//window browser m global object hota h jise hum global context kehte h
// function chai()
// {
//     let username="simmy"
//     console.log(this.username);//  yeh kewal object m kaam krta h ,function m nhi
// }
// chai();

// function ko declare krenge using arrow function

// const chai=function()
// {
//     let username="simmy"
//     console.log(this.username);
// }
// chai();

const chai=()=>//arrow function
{
    let username="simmy"
    console.log(this);
}
chai();

//function or arrow function m difference hota h ki function m this object hota h or arrow function m this object nhi hota h

//pure arrow function
const addTwo=(num1,num2)=>{
    return num1+num2;
}//curly braces m return likhna padega
//const addTwo=(num1,num2)=>num1+num2;//yeh bhi sahi h
console.log(addTwo(3,4));

//why arrow function-1. short syntax 2. this object nhi hota h isliye isse use krte h, this object ka use object m krte h,in easy words this object ka use object m krte h

//arrow function se object return krne ka tareeka
const addTwo1=(num1,num2)=>({username:"simmy"});
console.log(addTwo1(3,2));
//object return krne ke liye curly braces m object likhna padega


