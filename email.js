<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

  (function () {
    emailjs.init("q526cXZF8syZa6HJZ"); // Replace with your EmailJS Public Key
  })();

  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    emailjs.send("service_gwgii87", "template_5sxbign", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    }).then(
      function (response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Clear form
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  });
