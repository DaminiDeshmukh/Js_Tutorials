const myObj=
{
    js:"javascipt",
    cpp:"c++",
    py:"python"

}
//forin loop is used for iterating over the object
for (const key in myObj) {
   console.log(key);
}
for (const key in myObj) {
    console.log(`key for ${myObj[key]} is ${key}`);
 }


 //for in loop for array
    const arr=["js","rb","py","cpp"];
    for (const key in arr) {
        console.log(key);
        console.log(arr[key]);
    }
    //array m bhi key hoti h pr iski key 0 se start hoti h aur object ki key kese bhi start ho skti h

    //for in loop for map
    const map=new Map();
    map.set('js',"javascript")
    map.set('cpp',"c++")
    map.set('py',"python")
    for (const key in map) {
        
      console.log(key);
    }
    //map is not iterable so we can't use for in loop for map