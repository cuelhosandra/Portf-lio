
//ROLAR ATÉ ÀS SEÇÕES CLICADAS NO MENU
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  });
});

//FUNÇÃO QUE VERIFICA QND O USUÁRIO CLICA NO HAMBURGUER PARA ESCONDÊ-LO NOVAMENTE
function hideMenu() {
  if (window.innerWidth <= 768) {
    document.getElementById('checkbox_toggle').checked = false;
  }
}

//BOTÕES EXPANDIR CONHECIMENTOS
var botoes = document.querySelectorAll(".btn");

botoes.forEach(function(botao) {
  botao.addEventListener("click", function() {
    var conteudo = this.nextElementSibling;

    if (conteudo.style.display === "block") {
      conteudo.style.display = "none";
    } else {
      conteudo.style.display = "block";
      document.getElementById("conteudo-expandido").innerHTML = conteudo.innerHTML;
    }
  });
});