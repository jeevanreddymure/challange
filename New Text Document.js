function app(x,y,z) => {
    if((x<y)&&(x<z))
    {
      return x
    }
    else if((y<x)&&(y<z))
    {
      return y
    } 
    else{
      return z
    }
}
  document.querySelector('#calculate').addEventListener('click',() =>{

   var a=document.querySelector('#first').value.length
   var b=document.querySelector('#second').value.length
   var c= document.querySelector('#third').value.length
   
  const ans =  `your sum is ${app(a,b,c)}`

   document.querySelector('#width').innerHTML= ans 
  }
   
  


