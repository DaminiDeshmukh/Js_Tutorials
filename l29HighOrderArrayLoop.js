//for of loop- used for arrays
//high order loop
//array m strings
["","","",""]
//array m objects
[{},{},{},{}]

const arr=[1,2,3,4,5]
//for loop
for (const element of arr) {
    //here it means object is array
    console.log(element);
}

const greeting="hello world"
for(const greet of greeting)
{
    console.log(`each char is ${greet}`);
}

//maps
const map=new Map();

//map()- method,object which holds unique key value pairs
map.set('IN',"INDIA")
map.set('IN',"INDIA")
map.set('US',"UNITED STATES")
map.set('FR',"FRANCE")
console.log(map);

//for of loop for map
for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key,':-',value);
}

//for of list on object
const myObj=
{
    'game':'nfs',
    'game2':'spiderman'
}
// for (const [key,value] of myObj) {
//    console.log(key,':-',value); 
// }
//not iterable