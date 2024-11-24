const nomeMes = document.getElementById("nome-mes");
const diaSemana = document.getElementById("dia-semana");
const numeroDia = document.getElementById("numero-dia");
const ano = document.getElementById("ano");

const data = new Date();
const mes = data.getMonth();

nomeMes.innerText = data.toLocaleDateString("pt", {
    month:"long"
});
diaSemana.innerText = data.toLocaleString("pt", {
    weekday: "long"
});
numeroDia.innerText = data.getDate();

ano.innerText = data.getFullYear();


  

