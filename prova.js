function BotãoParImpar(valor){
     if (parseInt(document.getElementById("caixa1").value) % 2 === 0)
        alert ("O número é par")
    else
        alert ("O número é impar")
let numero = parseInt(document.getElementById("caixa1").value)
}

const tabo = []

 let numero = 0;

    function atualizarTela() {
      document.getElementById("valor").textContent = numero;
    }

    function aumentar() {
      numero++;
      atualizarTela();
    }

    function diminuir() {
      numero--;
      atualizarTela();
    }
     let numeroSecreto = Math.floor(Math.random() * 10) + 1;

    function verificarPalpite() {
      const palpite = parseInt(document.getElementById("palpite").value);
      const mensagem = document.getElementById("mensagem");

      if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.textContent = "Digite um número válido entre 1 e 10.";
        return;
      }

      if (palpite === numeroSecreto) {
        mensagem.textContent = "🎉 Parabéns! Você acertou!";
      } else {
        mensagem.textContent = "❌ Errado! Tente novamente.";
      }
    }

    function reiniciarJogo() {
      numeroSecreto = Math.floor(Math.random() * 10) + 1;
      document.getElementById("palpite").value = "";
      document.getElementById("mensagem").textContent = "Novo número sorteado. Tente adivinhar!";
    }

  function calcularMedia() {
      const n1 = parseFloat(document.getElementById("nota1").value);
      const n2 = parseFloat(document.getElementById("nota2").value);
      const n3 = parseFloat(document.getElementById("nota3").value);
      const resultado = document.getElementById("resultado1");

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.textContent = "Por favor, digite as três notas corretamente.";
        return;
      }

      const media = (n1 + n2 + n3) / 3;
      const status = media >= 6 ? "✅ Aprovado" : "❌ Reprovado";

      resultado.innerHTML = `Média: ${media.toFixed(2)}<br>${status}`;
    }
      function alternarModo() {
      document.body.classList.toggle('dark-mode');
    }
       function verificarResposta() {
      const opcoes = document.getElementsByName("resposta");
      let selecionado = null;

      for (let opcao of opcoes) {
        if (opcao.checked) {
          selecionado = opcao.value;
          break;
        }
      }

      const resultado = document.getElementById("resultado2");

      if (selecionado === null) {
        resultado.textContent = "Por favor, selecione uma resposta!";
        resultado.style.color = "orange";
      } else if (selecionado === "c") {
        resultado.textContent = "Resposta correta! 🎉";
        resultado.style.color = "green";
      } else {
        resultado.textContent = "Resposta incorreta. 😕 Tente novamente.";
        resultado.style.color = "red";
      }
    }
     function mudarCor() {
      const opcoes = document.getElementsByName("cor");
      for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
          document.body.style.backgroundColor = opcoes[i].value;
          break;
        }
      }
    }
        window.onload = function () {
      // b. Seleciona o botão pelo ID
      const botao = document.getElementById("btnCor");

      // c. Adiciona ouvinte de evento de clique
      botao.addEventListener("click", function () {
        // d. Lista de cores
        const cores = ["red", "blue", "green", "orange", "purple", "gold", "pink", "teal"];

        // e. Sorteia uma cor aleatória
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

        // Aplica a cor no fundo do botão
        botao.style.backgroundColor = corAleatoria;
      });
    };
     var x=0
     function btnContador(){
      x++;
      document.getElementById("contador").innerHTML=x
     }
       const input = document.getElementById("campoTexto");
    const span = document.getElementById("ultimaTecla");

    // Evento keydown (captura a tecla pressionada)
    input.addEventListener("keydown", function(evento) {
      span.textContent = evento.key;
    });
   const checkbox = document.getElementById("meuCheckbox");
    const botao = document.getElementById("meuBotao");

    // Adiciona o evento de mudança (change)
    checkbox.addEventListener("change", function() {
      botao.disabled = !checkbox.checked; // Habilita se marcado, desabilita se desmarcado
    });
