const name = prompt("Qual o seu nome?");
alert("Olá "+name+", como vai você? Bem vindo(a) ao quiz sobre a Disney. Boa sorte! ✨");

function respostaAlice() {
  const alice2 = document.getElementById('resposta2').value;
  if (alice2 === document.querySelector('input[name="alice"]:checked').value) {
    alert("Resposta certa! 😁");
  }
  else {
    alert("Resposta errada! 😢");
  }
}

function respostaKuzco() {
  const kuzco3 = document.getElementById('resposta7').value;
  if (kuzco3 === document.querySelector('input[name="kuzco"]:checked').value) {
    alert("Resposta certa! 😁");
  }
  else {
    alert("Resposta errada! 😢");
  }
}

function respostaSereia() {
  const sereia2 = document.getElementById('resposta10').value;
  if (sereia2 === document.querySelector('input[name="sereia"]:checked').value) {
    alert("Resposta certa! 😁");
  }
  else {
    alert("Resposta errada! 😢");
  }
}
