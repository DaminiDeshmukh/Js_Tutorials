const myNumers=[1,2,3,4,5,6,7,8,9,10]
const myNums=myNumers.map((number)=>{return number+2})
console.log(myNums)

const newNums1=myNumers.map((n)=>{return n*10})
.map((n)=>{return n+1})
.filter((n)=>{return n>=40})

console.log(newNums1)