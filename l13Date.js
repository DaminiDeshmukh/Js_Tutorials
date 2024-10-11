//dates
let myDate=new Date(); //current date-using new Date() constructor-date object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23)
let myCreateDate1=new Date(2023,0,23,5,3) //array m 0 january hota h
let myCreateDate2=new Date("2023-01-14") //lekin ese m 1 means january hota h
console.log(myCreatedDate);
console.log(myCreateDate1);
console.log(myCreateDate2);
let myCreatedDate3=new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());
let myTimeStamp=Date.now();
console.log(myTimeStamp); //time in milisconds from 1970
console.log(myCreatedDate3.getTime()); //time in milisconds from 1970
console.log(Math.floor(Date.now()/1000)); //time in seconds from 1970
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
}
)


