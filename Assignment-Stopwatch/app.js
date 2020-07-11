
var miliSecs = 0;
var secs = 0;
var mins  = 0;


var getMilSec = document.getElementById('msec');
var getSec = document.getElementById('sec');
var getMins = document.getElementById('min'); 

var interval;

function timer(){
    miliSecs++
    getMilSec.innerHTML = miliSecs 
    if(miliSecs >= 100){
        miliSecs = 0;
        secs++;
        getSec.innerHTML = secs
    }
    else if(secs >= 60 ){
        secs = 0;
        mins++
        getMins.innerHTML =  mins
    }
}

function start(){
    interval = setInterval(timer , 10)
    document.getElementById('start').disabled = true
}
function stop(){
    clearInterval(interval);
    document.getElementById('start').disabled = false
}
function reset(){
    stop();
    secs = 0;
    miliSecs = 0;
    mins = 0;
    getMins.innerHTML = mins;
    getSec.innerHTML = secs;
    getMilSec.innerHTML = miliSecs;
    document.getElementById('start').disabled = false;
}