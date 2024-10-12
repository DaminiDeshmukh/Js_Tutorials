// const coding=["js","py","java","c++"];
// const values=coding.forEach((item)=>{
// console.log(item);
// return item;
// })
// console.log(values); //undefined,why? because forEach() method always return undefined.
const myNums=[1,2,3,4,5]
// const newNums=myNums.filter((num)=>{
//     return num>4
// })
//return likhna zaroori h

const newNums=[]
myNums.forEach((num)=>{
    if(num>4)
    {
        newNums.push(num)
    }
})
console.log(newNums);

//filter() method returns a new array with the elements that pass the condition.


const books=[
    {title:'Book One',genre:'fiction',publish:1980,edition:1982},
    {title:'Book Two',genre:'non-fiction',publish:1990,edition:1992},
    {title:'Book Three',genre:'fiction',publish:2000,edition:2002},
    {title:'Book Four',genre:'non-fiction',publish:2010,edition:2012},
    {title:'Book Five',genre:'fiction',publish:2020,edition:2022}
    
]
const userBooks=books.filter((bk)=>bk.genre==='fiction')
// console.log(userBooks)
// const userBooks1=books.filter((bk1)=>{bk1.publish>=2000})

// const userBooks1=books.filter((bk1)=>{return bk1.publish>=2000})

const userBooks1=books.filter((bk1)=>bk1.publish>=2000)
//scope open kr loo ya to bracket mt likhna ya return likh doo
// console.log(userBooks1)

const userBooks2=books.filter((bk)=>{return bk.genre==='non-fiction' && bk.publish>2000})
console.log(userBooks2)