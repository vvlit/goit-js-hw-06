const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeFontSize = event => {
    text.style.fontSize = `${event.target.value}px`;
};

input.addEventListener("input", changeFontSize);
