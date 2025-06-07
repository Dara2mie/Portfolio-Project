"use strict";
async function signUpUser(userData) {
  try {
    const response = await fetch(
      "https://jodna-portfolio.onrender.com/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    console.log("Response Status:", response);

    if (!response.ok) {
        const errorText = await response.text();
        console.error("Error Response:", errorText);
      throw new Error("Sign up failed");
    }
    const result = await response.json();
    console.log("Response Data:", result);
    window.location.href="settings.html"
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Function to handle the click event on the button
document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const userData = {
  firstname: document.getElementById("fullname").value,
  lastname: "dara",
  email: document.getElementById("email").value,
  password: document.getElementById("password").value,
  confirmpassword: document.getElementById("confirm").value,
};

  const result = await signUpUser(userData);
  if (result) {
    console.log("Sign up successful!");
  } else {
    console.log("Sign up failed. Please try again.");
  }
});
