/* Script */

let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let time_start = Number(minutes.value) * 60 + Number(seconds.value);
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let block_timer = document.querySelector('.block_timer')

start.addEventListener('click', startTimer);

function startTimer(){
    start.style.display = 'none';
    stop.style.display = 'block';

    let updateTime = setInterval(function(){
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

        if(minutes.value === '00' && seconds.value === '00'){
            clearInterval(updateTime);
            block_timer.style.borderColor = 'darkred';
         }
        time_start--;

    }, 1000);

    
    stop.addEventListener('click', stopTimer);
   
    function stopTimer(){
        start.style.display = 'block';
        stop.style.display = 'none';
        clearInterval(updateTime);
    }
    
}


