//for
for(let i=0;i<=10;i++)
    {
        const element=i;
        if(i==5)
        {
            console.log("five");
        }
        console.log(element);
        
    }
    // console.log(element);
    for(let i=1;i<=10;i++)
    {
        console.log(`outer loop value:${i}`);
        for(let j=1;j<=10;j++)
        {
           console.log(`inner loop ${j} and outer loop ${i}`)
           console.log(i+'*'+j+'='+i*j);
        }
    }
    
    let myarray=["flash","batman","superman"]
    console.log(myarray.length);
    for(let index=0;index<myarray.length;index++)
    {
        const element=myarray[index];
        console.log(element);
    }
    
    //break and continue
    console.log(`break`)
    for(let index=1;index<=20;index++)
    {
       if(index==5)
       {
        console.log(`detected 5`);
        break
       }
       console.log(`value of i is ${index}`);
    }
    console.log(`continue`)
    for(let index=1;index<=20;index++)
        {
           if(index==5)
           {
            console.log(`detected 5`);
            continue
           }
           console.log(`value of i is ${index}`);
        }