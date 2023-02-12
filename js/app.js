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