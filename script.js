var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var submitError = document.getElementById("submit-error");
var messageError = document.getElementById("message-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function validatePhone() {
    var phone = document.getElementById("contact-number").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required";
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "Phone number should be 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please";
        return false;
    }


    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = "email is required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }


    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 50;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + " more characters are required";
        return false;
    }



    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validEmail() || !validMessage() || !validatePhone()) {
        submitError.style.display = 'block'
        submitError.innerHTML = "Please fix the errors to submit";

        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
}
