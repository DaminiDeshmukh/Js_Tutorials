const coding=["js","ruby","c++","c","py"]
//callback function
coding.forEach( function (item){
    console.log(item)
})

//another variation
//arrow function
coding.forEach((value)=>{
    console.log(value);
})


//another variation
function printMe(item)
{
    console.log(item)
}
coding.forEach(printMe)


//another variation
coding.forEach((item,index,arr)=>
    {console.log(item,index,arr)
    })

const myCoding=
[
    {
        languageName:"js",
        filename:"app.js",

    },
    {
        languageName:"py",
        filename:"app.py",
        
    },
    {
        languageName:"c++",
        filename:"app.cpp",
        
    }
]
myCoding.forEach((item)=>
{
    console.log(item.languageName);
})