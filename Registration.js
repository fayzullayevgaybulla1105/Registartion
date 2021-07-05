registrationForm.onsubmit = (event) => {
    event.preventDefault()// ma`lumot jo`natilayotgan vaqtda refresh yani zagruska bo`lib ketmasligini oldini oladi
    try {
        if (!username.value || username.value.length > 12) throw new SyntaxError('Invalid username')
        if (!username.value) throw new SyntaxError('Invalid username')

        if (username.value.length < 8) throw new SyntaxError('Username length must be at least 8 characters long!!!')
        if (!password.value.match(/[0-9]/)) throw new SyntaxError('Password must include numbers 0-9!!!')
        if (!password.value.match(/[a-z]/)) throw new SyntaxError('Password must include lowercase letters!!!')
        if (!password.value.match(/[A-Z]/)) throw new SyntaxError('Password must include uppercase letters!!!')
        if (password.value != confirmpassword.value) throw new SyntaxError("Password or Confirm password  entered incorrectly")
        if (!checkbox.checked) throw new SyntaxError("Checkbox not selected!")
        console.log(checkbox);
        console.log(checkbox.checked);

        const x = document.getElementById("registrationForm");
        let txt = "";
        let i;
        for (i = 0; i < x.length; i++) {
            x.elements[i].value = ''
        }
        alert('Data is sent to the server!')



        errorMessage.textContent = ''
        // send server
    } catch (error) {
        errorMessage.textContent = error.message
        errorMessage.style.color = 'red'
    }
}