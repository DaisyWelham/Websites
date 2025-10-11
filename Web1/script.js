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

function secondsUntilWednesday() {
  const now = new Date();
  const day = now.getDay(); // 0–6
  const daysUntilWed = (3 - day + 7) % 7 || 7; // number of days until next Wednesday (0→7)
  
  // Start of next Wednesday (midnight)
  const nextWednesday = new Date(now);
  nextWednesday.setDate(now.getDate() + daysUntilWed);
  nextWednesday.setHours(0, 0, 0, 0);

  const secondsLeft = Math.floor((nextWednesday - now) / 1000);
  alert(`There are ${secondsLeft.toLocaleString()} seconds until Wednesday.`);
}