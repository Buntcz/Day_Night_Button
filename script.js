let content = document.querySelector(".content")
let button = document.querySelector(".switch")

button.addEventListener("click", () => {
    content.classList.toggle("dark")
    button.classList.toggle("dark-button")
})