function mostrarTabuada() {
      const numero = parseInt(document.getElementById("numero").value);
      const resultadoDiv = document.getElementById("resultado");

      if (isNaN(numero)) {
        resultadoDiv.innerHTML = "Por favor, digite um número inteiro válido.";
        return;
      }

      let tabuadaHTML = `<h2>Tabuada do ${numero}</h2>`;
      for (let i = 1; i <= 10; i++) {
        tabuadaHTML += `${numero} x ${i} = ${numero * i}<br>`;
      }

      resultadoDiv.innerHTML = tabuadaHTML;
    }

function kgm(){
     if (parseInt(document.getElementById("kg", "m").value = kg/(m*m)))
    console.log("o IMG é", kgm())
    }

function calcular() {
      const n1 = parseFloat(document.getElementById("num1").value);
      const n2 = parseFloat(document.getElementById("num2").value);
      const operacao = document.getElementById("operacao").value;
      let resultado;

      if (isNaN(n1) || isNaN(n2)) {
        resultado = "Digite dois números válidos.";
      } else {
        switch (operacao) {
          case "soma":
            resultado = n1 + n2;
            break;
          case "subtracao":
            resultado = n1 - n2;
            break;
          case "multiplicacao":
            resultado = n1 * n2;
            break;
          case "divisao":
            resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero";
            break;
          default:
            resultado = "Operação inválida.";
        }
      }

      document.getElementById("resultado4").textContent = resultado;
    }
     function calcularIMC() {
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
      const resultado = document.getElementById("resultado5");

      if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
        return;
      }

      const imc = peso / (altura * altura);
      let classificacao = "";

      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc < 25) {
        classificacao = "Peso normal";
      } else if (imc < 30) {
        classificacao = "Sobrepeso";
      } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
      } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
      } else {
        classificacao = "Obesidade grau 3 (mórbida)";
      }

      resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
    }
      function converterParaF() {
      const valor = parseFloat(document.getElementById("tempInput").value);
      if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Digite um número válido.";
        return;
      }
      const fahrenheit = (valor * 9/5) + 32;
      document.getElementById("resultado").textContent = `${valor}°C = ${fahrenheit.toFixed(2)}°F`;
    }

    function converterParaC() {
      const valor = parseFloat(document.getElementById("tempInput").value);
      if (isNaN(valor)) {
        document.getElementById("resultado").textContent = "Digite um número válido.";
        return;
      }
      const celsius = (valor - 32) * 5/9;
      document.getElementById("resultado3").textContent = `${valor}°F = ${celsius.toFixed(2)}°C`;
    }
     let segundos = 0;
    let minutos = 0;
    let horas = 0;
    let intervalo = null;

    function atualizarCronometro() {
      segundos++;

      if (segundos === 60) {
        segundos = 0;
        minutos++;
      }

      if (minutos === 60) {
        minutos = 0;
        horas++;
      }

      const formatar = (n) => (n < 10 ? "0" + n : n);

      document.getElementById("cronometro").textContent =
        `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`;
    }

    function iniciar() {
      if (!intervalo) {
        intervalo = setInterval(atualizarCronometro, 1000);
      }
    }

    function pausar() {
      clearInterval(intervalo);
      intervalo = null;
    }

    function zerar() {
      pausar();
      segundos = 0;
      minutos = 0;
      horas = 0;
      document.getElementById("cronometro").textContent = "00:00:00";
    }
      function verificarRespostas() {
      const respostasCorretas = {
        q1: "c",  // 5 + 3 = 8
        q2: "b",  // 12 ÷ 4 = 3
        q3: "a"   // 7 × 6 = 42
      };

      let pontos = 0;

      for (let questao in respostasCorretas) {
        const respostaSelecionada = document.querySelector(`input[name="${questao}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[questao]) {
          pontos++;
        }
      }

      const total = Object.keys(respostasCorretas).length;
      document.getElementById("resultado2").innerText = `Você acertou ${pontos} de ${total} questões.`;
    }
