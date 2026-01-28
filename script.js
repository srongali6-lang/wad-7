function validateForm() {
    let isValid = true;

   
    document.querySelectorAll(".error").forEach(error => {
        error.innerHTML = "";
    });

    
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

 
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email address";
        isValid = false;
    }

    
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
        isValid = false;
    }


    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    
    let mobile = document.getElementById("mobile").value.trim();
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit mobile number";
        isValid = false;
    }

   
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        document.getElementById("genderError").innerHTML = "Please select a gender";
        isValid = false;
    }

   
    let termsAccepted = document.getElementById("terms").checked;
    if (!termsAccepted) {
        document.getElementById("termsError").innerHTML = "You must accept the terms and conditions";
        isValid = false;
    }

    if (isValid) {
        alert("Registration Successful!");
    }

    return isValid;
}

