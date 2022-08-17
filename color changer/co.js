const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const htlm = document.querySelector('html');

// const color =  input.value;
var letterNumber = /^[A-Za-z]+$/;
 
btn.addEventListener('click',  function(){
    if ((input.value.match(letterNumber)) ) {
        htlm.style.backgroundColor = input.value;
    }
 if(input.value != input.value.match(letterNumber)){
    alert('only letters or color')
 }
})