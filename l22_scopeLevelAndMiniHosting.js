// dom-kese html page ko manipulate krte h dom ki mdt se


function one()
{
    const username="hitesh"
    function two()
    {
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();
if(true)
{
    const username="hitesh"
    if(username==="hitesh")
    {
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



//""""""""""""""""""""""""
console.log(addone(5))
function addone(num)
{
    return num+1
}

const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(5))
//both are functions but the difference is that the first one is a function declaration and the second one is a function expression
//hoisting-declaration se phele use nhi kr skte but expression se kr skte h
