var opne_form= document.getElementById('open-form-button');
var form_section= document.getElementById('form-section');
opne_form.addEventListener('click', function(){
    form_section.classList.toggle('display-form')
})

// Dark Light mode
var dark_light_mode= document.getElementById('dark-light-mode');
dark_light_mode.addEventListener('click', function(){
    if(dark_light_mode.checked){
        form_section.style.backgroundColor= "grey";
    }
    else{
        form_section.style.backgroundColor= "mistyrose";
    }
})

// married or single
var single= document.getElementById('single');
var married= document.getElementById('married');
var isMarried= document.querySelector('.isMarried');
married.addEventListener('click', function(){
    if(married.checked && single.checked == false){
        isMarried.style.display= "block";           // show married box
    }
})
single.addEventListener('click', function(){
    if(single.checked && married.checked == false){
        isMarried.style.display= "none";           // hidden married box
    }
})

// children section
var child= document.getElementById('child');
var isChildren= document.querySelector('.isChildren')
child.addEventListener('click', function(){
    if(child.checked){
        isChildren.style.display= "block";      // show children box
    }
    else 
        isChildren.style.display= "none";      // hidden children box
})

// plus minus for children's count
var children_inputes_box= document.getElementById("children-inputes")
var plus= document.getElementById('plus');
var minus= document.getElementById('minus');

plus.addEventListener('click', function(){      // create input element
    var input= document.createElement('input');
    input.setAttribute('class', 'block-input');
    input.setAttribute('id', 'child-input')
    children_inputes_box.appendChild(input);
})

minus.addEventListener('click', function(){     // remove input element
    if (children_inputes_box.hasChildNodes()) {
        children_inputes_box.removeChild(children_inputes_box.children[0]);
    }
})