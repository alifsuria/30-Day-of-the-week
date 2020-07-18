const dayDisplay = document.getElementById("display");
const dayPredict = document.getElementById("predict");

function day() {
  let now = new Date().getDay();

  console.log(now);

  switch (now) {
    case 0:
      dayDisplay.innerHTML = "Sunday";
      dayPredict.innerHTML = "Time to Chillax";
      break;
    case 1:
      dayDisplay.innerHTML = "Monday";
      dayPredict.innerHTML = "Monday Blues";
      break;
    case 2:
      dayDisplay.innerHTML = "Tuesday";
      dayPredict.innerHTML = "Taco Time";
      break;
    case 3:
      dayDisplay.innerHTML = "Wednesday";
      dayPredict.innerHTML = "Three more days to the Weekend";
      break;
    case 4:
      dayDisplay.innerHTML = "Thursday";
      dayPredict.innerHTML = "Weekend is near";
      break;
    case 5:
      dayDisplay.innerHTML = "Friday";
      dayPredict.innerHTML = "Weekend is here";
      break;
    case 6:
      dayDisplay.innerHTML = "Saturday";
      dayPredict.innerHTML = "Time to party"
      break;
  }
}

day();
