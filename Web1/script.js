// script.js
function checkWednesday() {
  const today = new Date();
  const day = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

  if (day === 3) {
    alert("It's Wednesday my dudes! :)");
  } else {
    alert("It's not Wednesday my dudes! :(");
  }
}
