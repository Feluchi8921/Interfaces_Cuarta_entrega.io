document.addEventListener("DOMContentLoaded", function () {
    // Simular una carga de 5 segundos
    setTimeout(function () {
        // Ocultar el loader
        document.getElementById("loaderContainer").style.display = "none";
        // Mostrar el contenido principal
        document.getElementById("content").style.display = "block";
    }, 5000);

    // Actualizar el porcentaje de carga cada segundo
    let progress = 0;
    const interval = setInterval(function () {
        progress += 20;
        document.getElementById("loader").style.borderBottomColor = "#3498db";
        document.getElementById("loaderText").innerText = `Cargando... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 1000);
});

/*----------Duende--------------*/
document.addEventListener("DOMContentLoaded", function () {
    const duende = document.querySelector(".duende");
    
    window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        const speed = 0.3;

        // Se detiene el movimiento a los 800px de scroll
        if (scrollValue <= 800) {
            duende.style.transform = `translateY(${scrollValue * speed}px)`;
        }
    });
});

/*----------------Menu hamburguesa cruz-----------------*/
const menuHamburguesa = document.querySelector(".menu-hamburguesa");

menuHamburguesa.addEventListener("click", () => {
  menuHamburguesa.classList.toggle("cruz");
});

/*------------------------Menu achicable------------*/
const menuAchicar = document.querySelectorAll(".menuAchicar");
const achicarMenuHamburguesa = document.querySelectorAll(".achicarMenuHamburguesa");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 600) {
    menuAchicar.forEach(element => {
      element.classList.add("achicar");
    });
  } else {
    menuAchicar.forEach(element => {
      element.classList.remove("achicar");
    });
  }
});