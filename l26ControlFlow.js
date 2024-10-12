// // if
// const isUseLoggedIn=true
// const temperature=23
// //== is used to compare the value . === is used to compare the value and type
// if(temperature===20)
// {
//     console.log("temperature is 20 or less than 20")
// }
// else
// {
//     console.log("temperature is greater than 20")
// }

// console.log("execute")
// // <,>,<=,>=,==,!=,===,!==

// const score=200
// if(score>100)
// {
//     let power="fly"
//     console.log(`user power: ${power}`);
// }

// //console.log(`user power:${power}`); // power is not defined


// const balance=1000
// if(balance>500) console.log("test"),console.log("test2");// if we have only one statement then we can write it without curly braces

// if(balance<500)
// {
//     console.log("less than 500")
// }
// else if(balance<750)
// {
//     console.log("less than 750")
// }
// else if(balance <900)
// {
//     console.log("less than 750")
// }
// else
// {
//     console.log("less than 1200")
// }



const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmial=true

if(userLoggedIn && debitCard && 2==3)
{
    console.log("allow to buy course");
}

if(loggedInFromGoogle||loggedInFromEmial)
{
    console.log("user logged in");
}









//2 switch
// switch(key)
// {
//     case value:
//         break;

//     default:
//         break;
// }


// const month="march"
// switch(month)
// {
//     case "jan":
//         console.log("january");
//         break;
//     case "feb":
//         console.log("february");
//             break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case matched");
//         break;

        
// }




//truthy,falsy.ternary

// // const userEmail=[] //empty array
// // if(userEmail) //
// // {
// //     console.log("Got user email");

// // }
// // else{
// //     console.log("don't hava a email");

// // }

// //in js an empty array is considered a truthy value ,even though it may look like it's empty


// //falsy
// //false,0,-0,BigInt 0n,"",null,undefined,NaN

// //TRUTHY-"0",'fasle'," ",[],{},function(){}

// // if(userEmail.length===0)
// // {
// //     console.log("array is empty");
// // }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0)
// {
//     console.log("object is empty");
// }
// //nullish coalescing operator (??):null undefined

// let val1;
// val1=5??10// ?? checks for null or undefined why 5? because 5 is not null or undefined
// console.log(val1);
// val1=null??10 // ?? checks for null or undefined
// console.log(val1);
// val1=undefined??15
// console.log(val1);
// val1=null??10??20
// console.log(val1);

// //ternary operator
// //condition?true:false
// const iceTeaPrice=100
// iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")
