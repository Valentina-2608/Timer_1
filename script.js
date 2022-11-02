/* Script */


let start = document.getElementById('start');
let stop = document.getElementById('stop');
let block_timer = document.querySelector('.block_timer')
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');



/* Function for change time */
img2.addEventListener('click', changeTime);

function changeTime(){
    alert('You can change time');
    minutes.disabled = false;
    seconds.disabled = false;
    img1.style.display = 'block';
    img2.style.display = 'none'
}


/* Function for return inputs to state disabled */ 
img1.addEventListener('click', returnInputs);

function returnInputs(){
    minutes.disabled = true;
    seconds.disabled = true;
    img1.style.display = 'none';
    img2.style.display = 'block';
}



start.addEventListener('click', startTimer);

function startTimer(){
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let time_start = Number(minutes.value) * 60 + Number(seconds.value);
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
            setTimeout(() =>{
                start.style.display = 'block';
                stop.style.display = 'none';
                minutes.value = '0';
                seconds.value = '15';
                block_timer.style.borderColor = '#6FA37F';
            }, 2000)
            

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

