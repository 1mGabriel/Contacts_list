// Seleções:
const nameInput = document.querySelector("#name");
const contactInput = document.querySelector("#contact");
const submitButton = document.querySelector('button[type="submit"]');
const tBody = document.querySelector("tbody");

let line = " ";

// Append da linha '<tr><td>Gabriel</td><td>numero</td></tr>'
const saveContact = () => {
  // Verificação de Valores
  if (nameInput.value === " " && contactInput.value === " ") {
    alert("Preencha todos os campos para prosseguir");
  } else {
    //Definindo e criando a nova linhas
    let lineToAppend = `<tr><td>${nameInput.value}</td><td>${contactInput.value}</td></tr>`;
    line += lineToAppend;
    tBody.innerHTML = line;
    // Resetar Formulario
    nameInput.value = " ";
    contactInput.value = " ";
  }
};

// Eventos:
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  saveContact();
});
