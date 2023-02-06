function trocarCor() {
  let tema = document.getElementById("tema");
  let backgroudPrincipal = document.getElementById("primeira");

  if (tema.className == "temaLight") {
    tema.classList.add("temaDark");
    tema.classList.remove("temaLight");
    backgroudPrincipal.style.background = "#151515";
  } else {
    tema.classList.add("temaLight");
    tema.classList.remove("temaDark");
    backgroudPrincipal.style.backgroundColor = "white";
  }
}

function buscaHora() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  let relogio = document.getElementById("hora");

  horas = horas < 10 ? `0${horas}` : horas;
  minutos = minutos < 10 ? `0${minutos}` : minutos;
  segundos = segundos < 10 ? `0${segundos}` : segundos;

  if (horas >= 0 && horas < 12) {
    relogio.innerHTML = `${horas}:${minutos}:${segundos} AM`;
  } else {
    relogio.innerHTML = `${horas}:${minutos}:${segundos} PM`;
  }
}

buscaHora();
setInterval(buscaHora, 1000);

function buscaData() {
  let data = new Date().toLocaleDateString();
  let localData = document.getElementById("data");

  localData.innerHTML = `${data}`;
}

buscaData();

function trocaTemaDeAcordoComHorario() {
  let data = new Date();
  let hora = data.getHours();
  let tema = document.getElementById("tema");
  let backgroudPrincipal = document.getElementById("primeira");

  if (hora >= 6 && hora < 18) {
    tema.classList.add("temaLight");
    tema.classList.remove("temaDark");
    backgroudPrincipal.style.backgroundColor = "white";
  } else {
    tema.classList.add("temaDark");
    tema.classList.remove("temaLight");
    backgroudPrincipal.style.background = "#151515";
  }
}

trocaTemaDeAcordoComHorario();
