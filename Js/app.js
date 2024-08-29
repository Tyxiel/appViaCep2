document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const tempSpan = document.createElement("span");
      tempSpan.style.position = "absolute";
      tempSpan.style.visibility = "hidden";
      tempSpan.style.whiteSpace = "pre";
      tempSpan.style.fontSize = "1rem";
      tempSpan.textContent = input.value || input.placeholder;
      document.body.appendChild(tempSpan);

      const inputWidth = tempSpan.getBoundingClientRect().width;
      input.style.width = `${Math.min(
        inputWidth + 20,
        window.innerWidth - 40
      )}px`; 

      document.body.removeChild(tempSpan);
    });
  });

  const cepInput = document.querySelector(".input-cep");

  cepInput.addEventListener("input", () => {
    let value = cepInput.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5, 8);
    }
    cepInput.value = value;
  });

  cepInput.addEventListener("blur", () => {
    const cepPattern = /^\d{5}-\d{3}$/;
  });
});

function Consultar() {
    let input = document.querySelector(".input-cep").value;
    Dados(input);
}

async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(x => x.json())
    console.log(dados)
    inserirValores(dados);
}

function inserirValores(dados) {
    document.querySelector(".estado-cidade").value = dados.localidade + ", " + dados.uf;
    document.querySelector(".ddd").value = dados.ddd;
    document.querySelector(".endereco").value = dados.logradouro + ", " + dados.complemento;
}