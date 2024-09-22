const time = document.querySelector(".status-bar__column > span:nth-child(2)");
function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  time.innerText = `${hours}:${minutes}`;
}
getTime();
setInterval(getTime, 1000);
