
let boton_info = document.getElementById("boton_info");

let hide_text = document.getElementById("hide_text");

boton_info.addEventListener("click", toggleText);

function toggleText() {
  hide_text.classList.toggle("show");
}

function encriptar() {
  var texto = document.getElementById("text-input").value.toLowerCase();
  var txtCifrado = texto.replace(/e/gim, "enter");
  var txtCifrado = txtCifrado.replace(/o/gim, "ober");
  var txtCifrado = txtCifrado.replace(/i/gim, "imes");
  var txtCifrado = txtCifrado.replace(/a/gim, "ai");
  var txtCifrado = txtCifrado.replace(/u/gim, "ufat");

  document.getElementById("imagen-astronauta").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto-dos").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("text-input").value.toLowerCase();
  var txtCifrado = texto.replace(/enter/igm, "e");
  var txtCifrado = txtCifrado.replace(/ober/igm, "o");
  var txtCifrado = txtCifrado.replace(/imes/igm, "i");
  var txtCifrado = txtCifrado.replace(/ai/igm, "a");
  var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

  document.getElementById("imagen-astronauta").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("texto-dos").innerHTML = txtCifrado;
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
}

function copy() {
  var contenido = document.querySelector("#texto-dos");
  contenido.select();
  document.execCommand("copy");
  alert("Se copió!");
}

function borrar() {
  var contenidos = document.querySelector(".input-text");
  contenidos.select();
  document.execCommand("delete")
}
