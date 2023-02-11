const horasEl = document.querySelector(".horas");
const minutosEl = document.querySelector(".minutos");
const segundosEl = document.querySelector(".segundos");

function updateRelogio() {
  const currentDate = new Date();
  setTimeout(updateRelogio, 1000);
  const horas = currentDate.getHours();
  const minutos = currentDate.getMinutes();
  const segundos = currentDate.getSeconds();
  const horasDeg = (horas / 12)*360;
  horasEl.style.transform = `rotate(${horasDeg}deg)`;
  const minutosDeg = (minutos / 60)*360;
  minutosEl.style.transform = `rotate(${minutosDeg}deg)`;
  const segundosDeg = (segundos / 60)*360;
  segundosEl.style.transform = `rotate(${segundosDeg}deg)`;

}

//updateRelogio();
setInterval(updateRelogio, 1000)