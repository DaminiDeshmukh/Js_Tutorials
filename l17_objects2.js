//singleton object using constructor function
const tinderUser=new Object()//{}//new Object()-singleton object 
console.log(tinderUser);//{}-non-singleton object with no properties
tinderUser.id="123abc"
tinderUser.name="simmy"
tinderUser.age=21
console.log(tinderUser);

const tinderUser1={}
console.log(tinderUser1);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"ratan",
            lastname:"tata"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
//chaining - accessing nested object properties

console.log(regularUser.fullname?.userfullname.firstname);

//object ko combine kre
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

///obj2 in console
const obj3={obj1,obj2}
console.log(obj3);
const obj31=Object.assign({},obj1,obj2)
//cosnt obj31={...obj1,...obj2}
console.log(obj31)
const users=
[
    {
        id:1,
        email:"dd@gmail.com"
    },
    {
        id:1,
        email:"dd@gmail.com"
    },
    {
        id:1,
        email:"dd@gmail.com"
    },
    
]
console.log(users[1].email)
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedin'));

const course=
{
    coursename:"jai hind",
    price:"999",
    courseInstructor:"damini"
}
const{courseInstructor:instructor}=course

console.log(instructor);



// {
//     "name":"damini",
//     "coursename":"jai hind",
//     "price":"free"
// }
[
    {},
    {},
    {}
]
