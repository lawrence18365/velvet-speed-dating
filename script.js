/**
 * VELVET — Interaction Logic
 * Minimal, frictionless, fast.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Simple scroll reveal for sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".the-room, .the-admission").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(el);
  });
});

// Modal / Gate Logic
const gate = document.getElementById("applicationGate");
const gateBody = document.getElementById("gateBody");
const gateSuccess = document.getElementById("gateSuccess");
const form = document.getElementById("admissionForm");

function openGate(tier = "") {
  // Reset
  gateBody.style.display = "block";
  gateSuccess.style.display = "none";
  form.reset();

  gate.classList.add("active");
  document.body.style.overflow = "hidden"; // Lock scrolling
}

function closeGate() {
  gate.classList.remove("active");
  document.body.style.overflow = ""; // Unlock scrolling
}

function submitApplication(e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const originalText = btn.textContent;

  btn.textContent = "Submitting...";
  btn.disabled = true;

  // Simulate network processing delay
  setTimeout(() => {
    gateBody.style.display = "none";
    gateSuccess.style.display = "flex";

    // Reset button internally
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1200);
}

// Close on backdrop click
gate.addEventListener("click", (e) => {
  if (e.target === gate) {
    closeGate();
  }
});
