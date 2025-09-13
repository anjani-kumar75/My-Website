// -------------------------------
// 1. Mobile Navbar Toggle
// -------------------------------
const nav = document.querySelector("nav ul");
const logo = document.querySelector(".logo");

// Logo par click karne se menu toggle (mobile ke liye)
logo.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// -------------------------------
// 2. Typing Effect in Hero Section
// -------------------------------
const text = "Web Developer | Programmer | AI Enthusiast";
let index = 0;

function typeEffect() {
  const element = document.querySelector(".hero p");
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80); // typing speed
  }
}

window.addEventListener("load", () => {
  document.querySelector(".hero p").textContent = ""; // clear old text
  typeEffect();
});

// -------------------------------
// 3. Smooth Scroll for Navbar Links
// -------------------------------
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// -------------------------------
// 4. Contact Form Validation
// -------------------------------
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.querySelector("input[type='text']").value.trim();
  const email = this.querySelector("input[type='email']").value.trim();
  const message = this.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill out all fields before submitting.");
    return;
  }

  if (!email.includes("@")) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you, " + name + "! Your message has been sent.");
  this.reset();
});
