var spinner= document.getElementById("spinner");
var arrow= document.getElementById("arrow-icon");

spinner.onclick=function(){
    var n=Math.floor(Math.random()*10);
    var deg=Math.floor(Math.random()*700);
    for(var i=n; i>1; i--){
        setInterval( rotate(i,deg),i*n);
    }
 }
function rotate(second,deg){
    spinner.style.transform= 'rotate('+deg+'deg)';
    spinner.style.transitionDuration= second+'s';
    setTimeout(function(){
        arrow.classList.add("blink")
    }, second*1000)
}