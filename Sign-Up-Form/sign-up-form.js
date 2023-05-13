function validatePasswords() {
    let password = document.forms["form"]["password"];
    let confirm_password = document.forms["form"]["confirm_password"];
    let error_message = document.querySelector('input[type="password"] + span')

    if (password.value === confirm_password.value && (password.value !== "" && confirm_password.value != "")) {
        password.classList.remove('error')
        confirm_password.classList.remove('error')
        error_message.classList.remove('error')
        return true
    } else {
        password.classList.add('error')
        confirm_password.classList.add('error')
        error_message.classList.add('error')
        return false
    }
}

const password_fields = document.querySelectorAll('input[type="password"]');
password_fields.forEach((field) => {
    field.addEventListener("input", validatePasswords);
});
