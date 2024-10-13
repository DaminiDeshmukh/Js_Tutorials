/*
in console 

document.getElementById('title')
<h1 id=​"title" class=​"heading">​DOCUMENT OBJECT MODAL​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').setAttribute('class','test')
undefined

const title=document.getElementById('title')
undefined
title
<h1 id=​"title" class=​"test">​DOCUMENT OBJECT MODAL​</h1>​
title.style.backgroundColor="green"
'green'

title.style.padding="15px"
'15px'
title.style.borderRadius="15px"
'15px'

//how to add content : 11:35

title.innerHTML
'DOCUMENT OBJECT MODAL <span style="display:none">Holaa</span> '
title.innerText
'DOCUMENT OBJECT MODAL'
title.textContent
'DOCUMENT OBJECT MODAL Holaa '

document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]
document.querySelector('h1')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('h2')
<h2>​Lorem, ipsum dolor.​</h2>​

document.querySelector('#title')
<h1 id=​"title" class=​"heading">​…​</h1>​
document.querySelector('.heading')
<h1 id=​"title" class=​"heading">​…​</h1>​

document.querySelector('input[type="password"]')
<input type=​"password" name=​"pass" id=​"id3" fdprocessedid=​"fsn9i">​
document.querySelector('p:first-child')

document.querySelector('ul')
<ul>​…​</ul>​
const myul=document.querySelector('ul')
undefined
myul.querySelector('li')
<li>​…​</li>​
const turnGreen=myul.querySelector('li')
undefined
turnGreen.style.backgroundColor="orange"
'orange'
turnGreen.style.padding="20px"

turnGreen.innerHTML
'one'
turnGreen.innerText="six"

-document.querySelectorAll('li')
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Object
-const tempList=document.querySelectorAll('li')


nodelist is different than array so we can't use array methods on it


-const tempList=document.querySelectorAll('li')
undefined
-tempList
NodeList(3) [li, li, li]
-tempList.style.color="green"
VM11822:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:21
(anonymous) @ VM11822:1Understand this error
-tempList[0].style.color='green'

-const myh1=document.querySelectorAll('h1')
undefined
-myh1
NodeList [h1#title.heading]
-myh1.style.color='green'
VM12190:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:17
(anonymous) @ VM12190:1Understand this error
-myh1[0].style.color='green'
'green'

-tempList
NodeList(3) [li, li, li]
-tempList.forEach((l)=>{l.style.backgroundColor='green'})


//html collection pr loop lganaa
-document.getElementsByClassName('.list-item')


HTMLCollection []
length
: 
0
[[Prototype]]
: 
HTMLCollection
item
: 
ƒ item()
length
: 
(...)
namedItem
: 
ƒ namedItem()
constructor
: 
ƒ HTMLCollection()
Symbol(Symbol.iterator)
: 
ƒ values()
Symbol(Symbol.toStringTag)
: 
"HTMLCollection"
get length
: 
ƒ length()
[[Prototype]]
: 
Object

-tempClassList

-tempClassList.forEach(function(li){
    console.log(li)
})
VM13915:1 Uncaught TypeError: tempClassList.forEach is not a function
    at <anonymous>:1:15

//nodelist pr map use krna h to convert krna pdta h.wese hi htmlcollectio ko change krna hoga

//htmlcollection ko array m convert krna

-tempClassList
HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
-Array.from(tempClassList)
(4) [li.list-item, li.list-item, li.list-item, li.list-item]

-const myConvertedArray=Array.from(tempClassList)
undefined
-myConvertedArray
(4) [li.list-item, li.list-item, li.list-item, li.list-item]
-myConvertedArray.forEach((li)=>{li.style.color='orange'})



//js wiki page

-document.querySelectorAll('h2')
NodeList(16) [h2.vector-pinnable-header-label, h2.cdx-dialog__header__title, h2#History, h2#Trademark, h2#Website_client-side_usage, h2#Other_usage, h2#Execution, h2#Features, h2#Syntax, h2#Security, h2#Development_tools, h2#Related_technologies, h2#References, h2#Sources, h2#Further_reading, h2#External_links]0: h2.vector-pinnable-header-label1: h2.cdx-dialog__header__title2: h2#History3: h2#Trademark4: h2#Website_client-side_usage5: h2#Other_usage6: h2#Execution7: h2#Features8: h2#Syntax9: h2#Security10: h2#Development_tools11: h2#Related_technologies12: h2#References13: h2#Sources14: h2#Further_reading15: h2#External_linkslength: 16[[Prototype]]: NodeList
--const allH2=document.querySelectorAll('h2')
undefined
-allH2[0].innerText
'Contents'
-allH2[1].innerText
'Page version status'
-allH2[2].innerText
'History'
-allH2[3].innerText
'Trademark'

-document.querySelectorAll('.mw-heading')
-myh2=document.querySelectorAll('.mw-heading')
NodeList(60) [div.mw-heading.mw-heading2, div.mw-heading.mw-heading3, div.mw-heading.mw-heading3, 


-const myh2=document.querySelectorAll('.mw-heading')
undefined
-myh2[0].innerHTML
'<h2 id="History">History</h2>'
-myh2.forEach((h)=>{h.style.color='red'})
undefined
-myh2.forEach((h)=>{h.style.color='black'})
undefined
-myh2.forEach((h)=>{h.style.color='green';h.style.backgroundColor='pink'})
undefined
-
myh2.forEach((h)=>{h.style.color='green';h.style.backgroundColor='pink';h.innerHTML="DAMINI"})


*/