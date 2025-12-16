const iframe = document.getElementById("iframe");
const input = document.getElementById("input");
window.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        iframe.src = "https://youtube.com/embed/" + input.value;
    }
});