const section = document.querySelector("section");

const fade = () => setTimeout(() => (section.classList.toggle("fadeout")),500);


section.addEventListener("load", fade());

function scriptAlert() {
    document.getElementById("alertscript");
    window.alert("Secret");
}   