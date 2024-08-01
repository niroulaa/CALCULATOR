



const calc= document.querySelectorAll('.btns')
const input= document.querySelector('.field')
const del = document.querySelector('.btnsd')

del.onclick=()=>{
    input.value=input.value.slice(0,-1)
}
calc.forEach((button)=>{
  input.value=" "
    button.addEventListener("click",()=>{
        
        


if(button.innerHTML=="C"){
    input.value=" "
   }
else if(button.innerHTML=="="){
    input.value=eval(input.value)
   }
   
   else if(button.innerHTML=="%"){
    input.value +='/100'
    input.value=eval(input.value)
   }
   else if(button.innerHTML=="x²"){
    input.value=Math.pow(input.value,2);

   }
else{
    input.value=input.value+button.innerHTML
}
  

})

})
