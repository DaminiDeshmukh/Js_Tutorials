/*
js m memory kese kaam krti h
//stack memory
-- used for primitive data type
--copy milta h 
//heap memory
-- used for non- primitive data type
--reference milta h 
*/
let myName="damini"
let anotherName=myName
anotherName="mini"
console.log(myName);
console.log(anotherName);

let user=
{
    email: "xyz@gmail.com",
    upi:"xyz@okhdfcbank"
}
let user1=user
user1.email="damini@google.com"
console.log(user.email);
console.log(user1.email);

