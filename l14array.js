//array
const myArr=[0,1,2,3,4];
const myHeroes=["captian america","ratan tata","dr apj abdul kalam"];
const myArr2=new Array(1,2,3,4,5); //new keyword is optional.constructed using new keyword
console.log(myArr[1]);
console.log(myHeroes[2]);

//array methods
myArr.push(6);
myArr.push(7);
myArr.pop();
console.log(myArr);
myArr.unshift(9);
myArr.unshift(10);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr=myArr.join("-");
console.log(newArr);
console.log( myArr);
console.log("A",myArr);
//slice splice
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("c",myArr);