 // --------------------------------------------Footer--------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
	const footer = document.getElementById("page-footer");
	const okButton = document.querySelector(".ok-btn");
  
	function checkFooterVisibility() {
	  const scrollPosition = window.scrollY + window.innerHeight;
	  const documentHeight = document.body.offsetHeight;
  	if (window.innerWidth < 500) {
		if (scrollPosition >= documentHeight) {
			footer.classList.add("hidden");
		  } else {
			footer.classList.remove("hidden");
		  }
		}
	} 
	
	document.addEventListener("scroll", checkFooterVisibility);
  
	if (okButton) {
	  okButton.addEventListener("click", function () {
		footer.classList.add("hidden");
	  });
	}
  
	checkFooterVisibility();
  });

// --------------------------------------------Modal--------------------------------------------

// Seleciona o modal e o botão de fechar
const modal = document.getElementById("modalInstagram");
const openModalBtn = document.getElementById("openInstagram");
const closeModalBtn = document.querySelector(".close");

// Abre o modal
openModalBtn.addEventListener("click", () => {
    console.log("abrindo o modal");
    modal.style.display = "flex"; // Mostra o modal
});

// Fecha o modal quando o botão de fechar é clicado
closeModalBtn.addEventListener("click", () => {
    console.log("fechando o modal");
    modal.style.display = "none"; // Esconde o modal
});

// Fecha o modal quando o fundo escuro é clicado
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; // Esconde o modal
    }
});

// --------------------------------------------Background--------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const backgrounds = document.querySelectorAll(".background-photo");
    let index = 0;

    setInterval(() => {
        backgrounds[index].classList.remove("active"); // Remove a classe ativa da atual
        index = (index + 1) % backgrounds.length; // Avança no array, voltando ao início quando chegar ao fim
        backgrounds[index].classList.add("active"); // Ativa a próxima imagem
    }, 5000); // Muda a cada 5 segundos
});