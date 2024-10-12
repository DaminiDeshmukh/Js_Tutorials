//immediately invoked function expression (iife)- function that runs as soon as it is defined-why? to keep the code modular and not pollute the global namespace
// function chai()
// {
//     console.log('DB CONNECTED');

// }
// chai();

// function chai()
// {
//     console.log('DB CONNECTED');
// }()
// //ERROR

(function chai()
{
    console.log('DB CONNECTED');
})();


//IIFE SYNTAX- (function(){})()
//IIFE is used to avoid polluting the global namespace

//USING ARROW FUNCTION

//named iife
(function aurcode(){
    console.log('DB CONNECTED');
})();

//unnamed iife,parameterised
((name)=>{
    console.log(`DB CONNECTED two ${name}`);
})('damini');

//iife ko pta nhi h kaha end hoga isilye ';' use krte h

