/* Script */

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let time_start = Number(minutes.value) * 60 + Number(seconds.value);
let start = document.getElementById('start');
let stop = document.getElementById('stop');

start.addEventListener('click', startTimer);



function updateTime(){
        let minutesChanged = Math.floor(time_start/60);
        let secondsChanged = time_start % 60;
        if (secondsChanged < 10 ) {
            seconds.value = '0'+ secondsChanged;
        } else{
            seconds.value = secondsChanged;
        }
        if (minutesChanged < 10 ) {
            minutes.value =  '0'+ minutesChanged;
        } else{
            minutes.value =  minutesChanged;
        }
        time_start--;
}


function startTimer(){
    start.style.display = 'none';
    stop.style.display = 'block';
    setInterval(updateTime,  1000);
}

   

