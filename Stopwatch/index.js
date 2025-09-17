let timeOutId;

function startTimer(){
  timeOutId =setTimeout(()=> window.alert("Hello"),3000);
  console.log("Start");
}



function clearTimer(){
  clearTimeout(timeOutId);
  console.log("Endd");
}