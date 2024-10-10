

//"hello"+"world"+'its'+'me' -strings single aur double quotes dono m likh skte h
const name="damini"
const age=21
console.log(name+" "+" is"+age+" years old.");//concatenation
console.log(`${name} is ${age} years old.`); //template literals    
//backtics k use krkr placeholder bnaya ja skta h-string interpolation
const gameName=new String('damini-dr') //in console it will show as object
/*
'helloworlditsme'
const gameName=new String('damini')
undefined
gameName
String {'damini'}0: "d"1: "a"2: "m"3: "i"4: "n"5: "i"length: 6[[Prototype]]: String[[PrimitiveValue]]: "damini"
*/

//string methods
//console m jaakr dekhna
console.log(gameName[0])
console.log(gameName.__proto__) //String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}   //it will show all the methods of string
console.log(gameName.length) //6
console.log(gameName.toUpperCase());//original string will not change.
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
const newString=gameName.substring(0,3); //negative index is not used
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newString1="    hitesh   ";
console.log(newString1.trim());//it will remove all the spaces from the string
const url="https://www.google.com/damini loves jkdjaoi";
url.replace(' ','-');
console.log(url.replace(' ','-'));//it will replace only first space
console.log(url.includes('damini'));//true
console.log(gameName.split('-'));//it will split the string into array
/*
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"damini"
*/
