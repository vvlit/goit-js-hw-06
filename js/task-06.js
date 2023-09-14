const textInput  = document.querySelector("#validation-input");
const properDataLength = Number(textInput.dataset.length);

const changeBorderColor = event => {
    if (event.currentTarget.value.length === properDataLength) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
};
textInput.addEventListener("blur", changeBorderColor);