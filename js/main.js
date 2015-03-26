
var totalLeft = 570;
var daysLeft = 36;
var dailySpend = (totalLeft / daysLeft);
document.getElementById("totalLeft").innerHTML = ("€") + (totalLeft);
document.getElementById("daysLeft").innerHTML = (daysLeft);
document.getElementById("dailySpend").innerHTML = ("€") + (dailySpend).toFixed(2);