let timer = document.getElementsByClassName("timer")[0];
let stopwatch = document.getElementsByClassName("stop-watch")[0];
let timer_container = document.getElementsByClassName("t-container")[0];
let stopwatch_container = document.getElementsByClassName("s-container")[0];

function changetoTimer(){

    stopwatch.classList.remove("active");
    timer.classList.add("active");
    stopwatch_container.style.display="none";
    timer_container.style.display="block";
}
function changetoStopwatch()
{

    timer.classList.remove("active");
    stopwatch.classList.add("active");
    timer_container.style.display="none";
    stopwatch_container.style.display="block";
}