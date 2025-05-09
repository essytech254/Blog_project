document.addEventListener("DOMContentLoaded", function () {
  // ----- Contact Form Functionality -----
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formMessage.textContent = "❗ Please fill in all fields.";
        formMessage.style.color = "#cc0000";
      } else {
        formMessage.textContent = "✅ Thank you for your message.";
        formMessage.style.color = "#2e7d32";
        contactForm.reset();
      }
    });
  }

  // ----- Journal Prompt Functionality -----
  const promptButton = document.getElementById("promptButton");
  const promptEl = document.getElementById("prompt");

  if (promptButton && promptEl) {
    promptButton.addEventListener("click", function () {
      const prompts = [
        "📝 What would I say to my past self who's going through this heartbreak?",
        "🌱 What have I learned about myself in love and loss?",
        "💖 What does loving myself look like today?",
        "🔁 What kind of love do I want to receive — and give?",
        "🌿 When was the last time I truly felt at peace?"
      ];

      const randomIndex = Math.floor(Math.random() * prompts.length);
      promptEl.textContent = prompts[randomIndex];
    });

    console.log("✅ Journal prompt button initialized");
  } else {
    console.error("⚠️ Journal prompt button or prompt element not found");
  }
});
