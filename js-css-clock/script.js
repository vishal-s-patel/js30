const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

function setTime() {
  const time = new Date();

  const second = time.getSeconds();
  const secDegree = (second / 60) * 360 + 90;
  secHand.style.transform = `rotate(${secDegree}deg)`;

  const min = time.getMinutes();
  const minsDegrees = (min / 60) * 360 + (second / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = time.getHours();
  const hourDegree = (hour / 12) * 360 + (min / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

let timer = setInterval(setTime, 1000);
