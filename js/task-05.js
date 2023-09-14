const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const changeOutput = (event) => {
    output.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;

};
 
input.addEventListener("input", changeOutput);

