const div = document.querySelector(".divButton");

div.addEventListener("click", () => {
  event.stopPropagation()
  alert("¡Hola! Soy el div");
});

const button = document.querySelector(".divButton button");

button.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("¡Hola! Soy el botón");
});