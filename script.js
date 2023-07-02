const newYears = '2023-12-18T00:00:00';
//console.log(newYears);
//const targetDate = new Date("2024-01-01T00:00:00");
//console.log(targetDate);

function countDown(){
  const newYearsDate = new Date(newYears);
  //console.log(newYearsDate);
  const currentDate = new Date();
  //console.log(currentDate);

  
  //Get the total time difference in milliseconds

  let timeRemaining = newYearsDate - currentDate ;
  //console.log(timeRemaining);

  // Convert ms into days, hours, minus and seconds

  let days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)));
  //console.log(days);

  let hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  //console.log(hours);

  let mins = Math.floor((timeRemaining / (1000 * 60)) % 60);
  //console.log(mins);

  let seconds = Math.floor((timeRemaining / (1000)) % 60);
  //console.log(mins);

  document.querySelector('#days').innerHTML = days;
  document.querySelector('#hours').innerHTML = formatTime(hours);
  document.querySelector('#minus').innerHTML = formatTime(mins);
  document.querySelector('#seconds').innerHTML = formatTime(seconds);

  /*

  if(mins >= 10){
    document.querySelector('#minus').innerHTML = mins;
  }else{
    document.querySelector('#minus').innerHTML = `0${mins}`;
  };

  if(seconds >= 10){
    document.querySelector('#seconds').innerHTML = seconds;
  }else{
    document.querySelector('#seconds').innerHTML = `0${seconds}`;
  }

  */

  function formatTime(time){
    return time < 10 ? `0${time}`: time;
  }
  
  





}
  

countDown();

setInterval(countDown, 1000);

/*

let date1 = new Date();
console.log(date1);
let date2 = new Date('2023/06/30 13:07:00');
console.log(date2);
let diff = date2 - date1;
//let diff = Math.abs(date1 - date2);

console.log(diff);

let days = Math.floor((diff / (1000 * 60 * 60 * 24)));
console.log(days);

let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
console.log(hours);

let mins = Math.floor((diff / (1000 * 60)) % 60);
console.log(mins);
*/

//console.log(30 % 24);





