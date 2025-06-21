 function entrar() {
      const nome = document.getElementById("nome").value.trim();

      if (nome === "") {
        alert("Por favor, digite seu nome.");
        return;
      }

      // Mostra a saudação
      alert(`Olá ${nome}. Seja bem-vindo(a).`);

      // Redireciona para seu site após 1 segundo
      setTimeout(() => {
        window.location.href = "prova.html"; // Substitua pelo seu link real
      }, 1000);
    }
