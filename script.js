document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const faqItem = btn.closest(".faq-item");
      const answer = faqItem.querySelector(".faq-answer");

      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove("active");
          item.querySelector(".faq-answer").style.display = "none";
        }
      });

      const isActive = faqItem.classList.contains("active");
      faqItem.classList.toggle("active");
      answer.style.display = isActive ? "none" : "block";
    });
  });
});


document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  register();
});

function register() {
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let conf_password = document.getElementById("conf_password").value;
  let gender = document.querySelector("input[name='gender']:checked");
  let date = document.getElementById("dob").value;

  if (username === "" || email === "" || password === "" || conf_password === "" || !gender || date === "") {
    alert("Please complete all fields before submitting the form.");
  } else if (!gender) {
    alert("Please select your gender.");
  } else if (!checklen(username)) {
    alert("Username must be between 5 to 10 characters.");
  } else if (!checkpass(password)) {
    alert("Password must contain only letters and numbers.");
  } else if (password !== conf_password) {
    alert("Password confirmation does not match.");
  } else if (!validateDOB(date)) {
    alert("Date of birth must be a valid date in the past.");
  } else {
    confirm("Registration successful. Thank you for signing up.");
    let nickname = prompt("How would you like us to address you?");
    alert("Welcome, " + nickname + "!");

    // Reset the form only after successful registration
    document.getElementById("register-form").reset();
  }
}

function checklen(username) {
  return username.length >= 5 && username.length <= 10;
}

function checkpass(password) {
  let isAlpha = false;
  let isNumeric = false;
  for (let i = 0; i < password.length; i++) {
    let ch = password[i];
    if (ch.toLowerCase() !== ch.toUpperCase()) {
      isAlpha = true;
    } else if (!isNaN(ch)) {
      isNumeric = true;
    }
  }
  return isAlpha && isNumeric;
}

function validateDOB(dob) {
  let enteredDate = new Date(dob);
  let today = new Date();
  return enteredDate < today;
}


