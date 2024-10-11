//array
const myArr=[0,1,2,3,4];
const myHeroes=["captian america","ratan tata","dr apj abdul kalam"];
const dc_heroes=["batman","superman","flash"];
console.log(myArr);
console.log(myHeroes);
console.log(myHeroes[2][0]); //it will print 'a' as it is the 1st index of 3rd element of myHeroes array
const allHeros=[...myHeroes, ...dc_heroes]; //it will merge both arrays
console.log(allHeros); //it will print all the elements of both arrays
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
console.log(another_array);
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray(another_array));
console.log(Array.isArray(real_another_array));
console.log(Array.from({name:"damini"})); //it will print empty array as it is not an array
let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//it will print array of 3 elements