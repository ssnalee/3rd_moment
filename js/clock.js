const clock = document.querySelector("#clock");
//console.log(clock);

console.log(document);
function  getClock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds =String(date.getSeconds()).padStart(2,"0");
  //  console.log(date);
   // clock.innerText(`${hour}:${minutes}:${seconds}`);
    console.log(clock.innerText)
    clock.innerText = `${hour}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000);