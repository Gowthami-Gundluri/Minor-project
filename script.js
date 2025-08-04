const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  const result = zxcvbn(password);

  strengthBar.className = ""; // clear previous
  strengthBar.classList.add(`strength-${result.score}`);

  if (password.length === 0) {
    feedback.innerText = "";
  } else if (result.feedback.suggestions.length > 0) {
    feedback.innerText = result.feedback.suggestions.join(" ");
  } else {
    feedback.innerText = "Strong password!";
  }

  // Optional: Save password to check reuse
  if (!localStorage.getItem(password)) {
    localStorage.setItem(password, "used");
  } else {
    feedback.innerText += " ⚠️ This password was already used.";
  }
});
