# Project related to DOM
## project link
[click here]()

# solution code

## project1

```javascipt
const buttons=document.querySelectorAll('.button');
const text=document.querySelector('.text');
const text1=document.querySelector('.text1');
const body=document.querySelector('body');
buttons.forEach((button)=>
    {
        button.addEventListener("click",function(e){
            switch(e.target.id)
            {
                case 'grey':
                    body.style.backgroundColor='grey';
                    text.style.color="white";
                    text1.style.color="white";
                    break;
                case 'white':
                    body.style.backgroundColor='white';
                    text.style.color='black';
                    text1.style.color='black';
                    break;
                case 'blue':
                    body.style.backgroundColor='blue';
                    text.style.color='white';
                    text1.style.color='white';
                    break;
                case 'yellow':
                    body.style.backgroundColor='yellow';
                    text.style.color='black';
                    text1.style.color='black';
                    break;
            }
        })
    });
```