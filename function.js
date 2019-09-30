var add = (x) => { 
    
    
  return x.length
}

const validate = async (event) => {
console.log(`triggered validate on ${event.target.id}`)
const isValid = event.target.checkValidity()
if (isValid) {
event.target.nextElementSibling.innerHTML = ''
} else {
event.target.nextElementSibling.innerHTML = 'Invalid input'
event.target.focus()
}
}

const updateWithAdd = async (event) => {
document.querySelector('#width').innerHTML = ''
if (document.querySelector('#first').checkValidity() ) {


var first = document.querySelector('#first').value


const i =  first


var final=add(i)
const ans = ` length of your string is . ${final}`
document.querySelector('#width').innerHTML = ans
}
}



// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
if (event.target && event.target.id === 'first') 
 {
validate(event)
}
})

document.addEventListener('click', event => {
if (event.target && event.target.id === 'calculate') { updateWithAdd(event) }
})
document.addEventListener('click', event => {
if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})
   
  


