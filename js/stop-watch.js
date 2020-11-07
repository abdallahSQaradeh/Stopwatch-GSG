let sw=document.getElementsByClassName('s-body');
let current_timer,interval,last_update,start;
s_start = document.getElementsByClassName("s-start")[0];
s_reset = document.getElementsByClassName("s-reset")[0];

let s_sec = document.getElementsByClassName("s-seconds")[0];
let s_m_sec = document.getElementsByClassName("s-m-seconds")[0];
let s_min = document.getElementsByClassName("s-minutes")[0];
let s_s_m = document.getElementsByClassName("s-m")[0];
let s_seconds, s_milSeconds = 0,s_minutes=null;
[].forEach.call(sw,(s)=>
{
    s_current_timer=0;
    s_interval=0;
    s_last_update=new Date().getTime();//refernce
    
})

function pad(n){
    return ("" + n).substring(-2)
}
function resetTimer()
{
    stopTimer();
    clearInterval(interval);
    s_interval=0;
    s_current_timer=0;
    s_start.textContent="start";
    s_start.style.backgroundColoe="#1A73E8"
    s_start.style.border="none";
    s_m_sec.textContent= pad("00"); s_sec.textContent = pad(0);

    s_min.style.display="none";
        s_min.textContent=pad(0);
        s_s_m.style.display="none"

}
function update(){
 
    let s_now =new Date().getTime(),
    s_dt = s_now - s_last_update;
    s_current_timer+=s_dt;
    let s_time = new Date(s_current_timer);
    s_sec.textContent = pad(s_time.getSeconds());
    s_m_sec.textContent = pad(Math.floor(s_time.getMilliseconds()/10));
    
    s_last_update = s_now;
    if(s_time.getMinutes()!=0)
    {
        s_min.style.display="inline-block";
        s_min.textContent=pad(s_time.getMinutes());
        s_s_m.style.display="inline-block"
    }

}
function startTimer()
{

    if(s_start.textContent.toLowerCase()==="start")
    {
        if(!s_interval)
        {
            s_last_update = new Date().getTime();
            s_interval = setInterval(update,1)
        }
        s_start.textContent="stop";
        s_start.style.backgroundColoe="#1B66C9"
        s_start.style.border="1px solid black";

    }else if(s_start.textContent.toLowerCase()==="stop")
    {
        s_start.textContent="start";
        stopTimer();
        s_start.style.backgroundColoe="#1A73E8"
        s_start.style.border="none";
    }
        
    
    
}
function stopTimer(){

    clearInterval(s_interval);
    s_interval  =0;
}
