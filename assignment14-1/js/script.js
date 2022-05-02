var range_input= document.getElementById("range-input");
var show_value= document.getElementById('show-value');
var play_icon= document.getElementById('play');
play_pause="play";
var plus= document.getElementById('plus');
var minus= document.getElementById('minus');
var value=50;
var timer;
var snd = new Audio("audio.wav");

// change range input
range_input.oninput= function() {     // تغییر استایل های اینپوت
    value = (range_input.value-range_input.min)/(range_input.max-range_input.min)*100;
    range_input.style.background = 'linear-gradient(to right, #82d0a9 0%, #82d0a9 ' + value + '%, #fff ' + value + '%, white 100%)'
    
    show_value.innerHTML= Math.round(value);
    timer= setInterval(beep, 60000/value );
};

function beep() {              // تولید صدا
    if(play_pause == "play"){
        snd.play();
    }
    else if(play_pause == "pause"){
        if(snd)
            snd.pause();
    }
}

plus.onclick= function(){           // کلیک روی +
    if(value < 100 && value > 1){
        value++;
        set_input(value);
    }
}
minus.onclick= function(){         // کلیک روی -
        if(value < 100 && value > 1){
        value--;
        set_input(value);
    }
}
//بعد از کلیک روی + و - این فانکشن اجرا میشود تا استایلهای موردنظر و به اینپوت بده و تایمر صدا و روشن کنه
function set_input(value){   
    range_input.style.background = 'linear-gradient(to right, #82d0a9 0%, #82d0a9 ' + value + '%, #fff ' + value + '%, white 100%)'
    range_input.value= value;
    show_value.innerHTML=Math.round(value);
    timer= setInterval(beep, 60000/value );
}

// کلیک روی استارت و استپ
play_icon.onclick= function(){
    if(play_pause == "play"){
        play_icon.src= "images/play-icon.png";
        play_pause = "pause";
        timer= setInterval(beep, 60000/value );
    }
    else if(play_pause == "pause"){
        play_icon.src= "images/pause-icon.png";
        play_pause = "play";
        //clearInterval(timer)
    }
}