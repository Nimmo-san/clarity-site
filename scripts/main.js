// Form validation and success
const form = document.getElementById("notify-form");
const emailInput = document.getElementById("notify-email");
const message = document.getElementById("notify-message");

form?.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  // Basic validation
  if (!validateEmail(email)) {
    message.textContent = "Please enter a valid email.";
    // message.style.color = "red";
    return;
  }

  // simulates success response
  message.textContent = "Thank you! You'll be notified!";
  // message.style.color = "green";

  // where i can send data to backend 
  console.log("Email submitted:", email);

  // clear field after completion
  form.reset();
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
