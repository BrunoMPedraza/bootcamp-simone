const section = document.querySelector("section");

const fade = () => setTimeout(() => (section.classList.toggle("fadeout")),500);


section.addEventListener("load", fade());
