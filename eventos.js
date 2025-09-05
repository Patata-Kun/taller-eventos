const div = document.querySelector(".divButton");

div.addEventListener("click", () => {
  event.stopPropagation()
  alert("¡Hola! Soy el div");
});