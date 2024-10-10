// const score=100;// Number primitive
// console.log(score);
// const balance=new Number(1000); // Number object
// console.log(balance);
// console.log(balance.toString()); //ab additional properties aa gyi
// console.log(balance);
// console.log(balance.toFixed(2)); // 1000.00
// console.log(balance.toPrecision(2));// 1.0e+3
// //difference between to Fixed and toPrecision- toFixed is used to fix the decimal places and toPrecision is used to fix the total number of digits 
// const balance1=1.294;
// console.log(balance1.toPrecision(2));

// const hundreds=1000000000;
// console.log(hundreds.toLocaleString('en-IN'));
// const MAX_VALUE1=Number.MAX_VALUE;
// const MIN_VALUE1=Number.MIN_VALUE;
// console.log(MAX_VALUE1);
// console.log(MIN_VALUE1);

//++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++

console.log(Math); //in console we can see all the properties of Math object
console.log(Math.abs(-3))
console.log(Math.round(4.9));
//value upper m round off ho ya lower me round off krna ho to use ceil and floor
console.log(Math.ceil(4.1));//greater m round off hota h
console.log(Math.floor(4.9)); //lower m round off hota h
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log(Math.random());
console.log((Math.random()*10)+1);//zero se 10 tk random number generate hoga
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.random()*10);
const min=10;
const max=20;
console.log(Math.random()*(max-min+1)+min)


