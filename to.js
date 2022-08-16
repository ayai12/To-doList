'use strict';
const a = document.getElementById('btn');
const div = document.querySelector('.hidden');



 function biho(b){
    // b.style.visiblity = 'hidden';
    
 
a.addEventListener('click', function () {
 
    const sectionText = document.querySelector('.sectionText');
    if(sectionText.value ===''){
        alert('PlEASE FILL OUT THIS FIELD');
    }
    else{
        const  letterNumber = /^[0-9a-zA-Z]+$/;
       
 
        if(sectionText.value.match(  letterNumber)) {
            console.log('matched');
   
            const input = document.createElement('input');
            const section = document.createElement('section');
            section.setAttribute('id', 1);
           
           
            const h3 = document.createElement('h3');
            h3.innerText = document.getElementById('sectionText').value;
            document.getElementById('wrapper').appendChild(section);
            section.appendChild(h3);
           
            input.setAttribute('type', 'text');
            section.appendChild(input);
            const btn = document.createElement('button');
            btn.innerText = 'New List Item';
           
            section.appendChild(btn);
           
 
           
            const checkbox = document.createElement('INPUT');

            btn.addEventListener('click', function () {
               
                const div = document.createElement('div');
                    
                div.setAttribute('class', 'listItem');
               
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', 'chescker');
                div.appendChild(checkbox);
               
                const span = document.createElement('span');
                
               
                span.innerText = this.previousElementSibling.value;
                div.appendChild(span);
             input.parentNode.insertBefore(div, input);
    
             span.value="";
           
                },
       
           
            false);
        
           
            }
      else {
        alert(' only numbers and strings');
 
        }
sectionText.value="";


}});

 }

   biho();
