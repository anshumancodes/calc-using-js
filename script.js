
let display=document.querySelector('.input')
let string='';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

    if (e.target.innerHTML=='=') {
        string=eval(string)
        display.value=string
        
    }
    else if (e.target.innerHTML=='c') {
        string='0'
        display.value=string
        
    }
    else{
        console.log(e.target)
        string=string+e.target.innerHTML;
      
        display.value=string

    }
        
        
    })


})


