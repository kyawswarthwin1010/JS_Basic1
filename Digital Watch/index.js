function updateClock(){

  const now =new Date();
  let hours = now.getHours();
  const meridien = hours >=12 ? "PM" : "AM";
  hours = hours % 12 || 12;
   hours = now.getHours().toString().padStart(2,0);
  const minute = now.getMinutes().toString().padStart(2,0);
  const seconds = now.getSeconds().toString().padStart(2,0);
  const timeString = `${hours}:${minute}:${seconds}${meridien}`;
  document.getElementById("clock").textContent = timeString;
}


updateClock();
setInterval(updateClock,1000);