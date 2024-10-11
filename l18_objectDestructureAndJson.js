//de structuring of objects
const course={
    name:"sst",
    price:1000,
    courseInstructor:"Mr.Aman"
}
//course is an object ,name is a key and sst is a value

//printing
console.log(course.name);
console.log(course.price);
console.log(course.courseInstructor);
//this type of printing is not good

// const {courseInstructor}=course;
// console.log(courseInstructor);
//this is de structuring of objects,means we are directly accessing the value of key

const {name:n,price:p,courseInstructor:ci}=course;
console.log(n);
console.log(p);
console.log(ci);

//de structuring of objects- we can directly access the value of key without using object name using curly braces

//api- application programming interface, it is a set of rules and protocols that allows one software application to communicate with another
//json- javascript object notation, it is a lightweight data interchange format
// {
//     "name":"science",
//     "age":13,
//     "city":"up"
// }

//
/*
[
{},
{},
{},
{}
]
*/

//api random user- https://randomuser.me/api/
//formate api website-