

let input = document.getElementById("number");
let t_hours_2 = document.getElementsByClassName("t-hours-2")[0];
let t_minutes_2 = document.getElementsByClassName("t-minutes-2")[0];
let t_seconds_2 = document.getElementsByClassName("t-seconds-2")[0];
let t_hours = document.getElementsByClassName("t-hours-1")[0];
let t_minutes = document.getElementsByClassName("t-minutes-1")[0];
let t_seconds = document.getElementsByClassName("t-seconds-1")[0];

input.addEventListener("keyup",(e)=>
{
  let arr = e.target.value.split("");
  console.log(arr)
  if(e.target.value.length==1)
  {
    t_seconds.textContent=arr[0];
  }else if(e.target.value.length==2){

    t_seconds.textContent=arr[1];
    t_seconds_2.textContent=arr[0];
  }
  else if(e.target.value.length==3)
  {

    t_seconds.textContent=arr[2];
    t_seconds_2.textContent=arr[1];
    t_minutes.textContent=arr[0];
  }
  else if(e.target.value.length==4)
  {
    t_seconds.textContent=arr[3];
    t_seconds_2.textContent=arr[2];
    t_minutes.textContent=arr[1];
    t_minutes_2.textContent=arr[0];
  }
  else if(e.target.value.length==5)
  {
    t_seconds.textContent=arr[4];
    t_seconds_2.textContent=arr[3];
    t_minutes.textContent=arr[2];
    t_minutes_2.textContent=arr[1];
    t_hours.textContent=arr[0];
  }
  else if(e.target.value.length==6)
  {
    t_seconds.textContent=arr[5];
    t_seconds_2.textContent=arr[4];
    t_minutes.textContent=arr[3];
    t_minutes_2.textContent=arr[2];
    t_hours.textContent=arr[1];
    t_hours_2.textContent=arr[0];
  }
} )
input.addEventListener("keypress",(e)=>
{
  if(e.target.value.length>=6)e.preventDefault();
  let arr = e.target.value.split("");
  //console.log(arr)
  
} )


function startCountDown() 
{
  let hours = t_hours_2.textContent + t_hours.textContent;
  let minutes = t_minutes_2.textContent + t_minutes.textContent;
  let seconds = t_seconds_2.textContent + t_seconds.textContent;

  console.log({hours:hours,minutes:minutes,seconds:seconds,seconds})
  var date = new Date();
  var year = new Date().getFullYear();
  var month = new Date().getMonth();
  var day = new Date().getDay()
    var countDownDate = new Date(year,month,day,date.getHours()+hours, date.getMinutes()+minutes
        ,date.getSeconds()+seconds).getTime();
        console.log(countDownDate)

var x = setInterval(function() {

  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  console.log({
    hours:hours,minutes:minutes,seconds:seconds
  })
  if(hours!=0)
  {
    t_hours.textContent= hours%10;
    t_hours_2.textContent = +t_hours.textContent/10;
  }
  if(minutes!=0)
  {
    t_minutes.textContent= minutes%10;
    t_minutes_2.textContent = +t_minutes.textContent/10;
  }
  if(seconds!=0)
  {
    t_seconds.textContent= seconds%10;
    t_seconds_2.textContent = +t_seconds.textContent/10;
  }
 
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);

}
