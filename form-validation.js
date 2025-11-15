const form = document.getElementById("myForm");
const nameInput = document.getElementById("nameInput");
const msg = document.getElementById("msg");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name === "") {
        msg.textContent = "Name cannot be empty.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Hello, " + name;
    msg.style.color = "green"
})

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailResult = document.getElementById("result");

emailForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        emailResult.textContent = "Email is empty.";
        emailResult.style.color = "red";
        return;
    }

    emailResult.textContent = "Email saved."
    emailResult.style.color = "green";
})