const form = document.querySelector(".login-form");

const validateForm = event => {
    event.preventDefault();
    
    const formInputEmail = event.currentTarget.elements.email.value;
    const formInputPassword = event.currentTarget.elements.password.value;
    
    if (formInputEmail === "" || formInputPassword === "") {
        alert("Please, fill in all form fields.");
        return
    };

    let dataObject = {};
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        dataObject[name] = value;
    });
    console.log(dataObject);
    form.reset();
}

form.addEventListener("submit", validateForm);