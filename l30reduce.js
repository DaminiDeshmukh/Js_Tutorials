const myNums=[1,2,3,4,5]
const myTotal=myNums.reduce(function(acc,curr) 
{
    console.log(`acc: ${acc} and currval:${curr}`);
    return acc+curr;
},0
)
console.log(myTotal)

//reduce the array to a single value-it takes a callback function and an intial value
//acc is the accumulator and curr is the current value

const myTotal1=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1)

const shoppingCart=
[
    {
        itemName:"js course",price:2999
    },
    {
        itemName:"react course",price:3999
    },
    {
        itemName:"node course",price:4999
    }
]
const PriceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
//reduce syntax: array.reduce((acc,curr)=>acc+curr,0)
console.log(PriceToPay);