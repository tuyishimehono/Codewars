let seconds = document.querySelector('#seconds')
time = 10;
let interval;

function startCountdown() {
    interval = setInterval(() => {
      seconds.textContent = time;
      time--;
      console.log(time);

      if(time <= 0){
        clearInterval(interval);
        seconds.textContent = 0;
       }
    }, 1000);
    
}

function increaseTime(t){
    time += t;
    clearInterval(interval);
    seconds.textContent = time;
    startCountdown();
}
let button5s = document.querySelector('#button1');
button5s.addEventListener('click', function(){
    increaseTime(5);
});
let button10s = document.querySelector('#button2');
button10s.addEventListener('click', function(){
    increaseTime(10);
});
let button15s = document.querySelector('#button3');
button15s.addEventListener('click', function(){
    increaseTime(15);
});
startCountdown();
