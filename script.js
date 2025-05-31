"use strict"

// Function to handle the click event on the button
document.querySelector(".btn-submit").addEventListener("click", async function() {
    const userData = {
        firstname: document.getElementById("fullname").value,
        lastname: "dara",
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmpassword: document.getElementById("confirm").value
    };
    
    const result = await signUpUser(userData);
    if (result) {
        alert("Sign up successful!");
    } else {
        alert("Sign up failed. Please try again.");
    }
});

async function signUpUser(userData) {
    try {
        const response = await fetch('https://jodna-portfolio.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        console.log("Response Status:", response);
        
        if (!response.ok) {
            throw new Error('Sign up failed');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}
;