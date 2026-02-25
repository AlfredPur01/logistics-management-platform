const trackingForm = document.getElementById("tracking-form");
const timeline = document.getElementById("timeline");
const trackingMessage = document.getElementById("tracking-message");
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealElements.forEach((section) => revealObserver.observe(section));

function animateTimeline() {
  const steps = [...timeline.querySelectorAll("li")];
  steps.forEach((step) => step.classList.remove("active"));

  steps.forEach((step, index) => {
    window.setTimeout(() => {
      step.classList.add("active");
    }, index * 320);
  });
}

trackingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const trackingInput = document.getElementById("tracking-number");
  const trackingNumber = trackingInput.value.trim();

  if (!trackingNumber) {
    trackingMessage.textContent = "Please enter a valid tracking number.";
    trackingMessage.style.color = "#b72e2e";
    return;
  }

  trackingMessage.textContent = `Showing movement timeline for ${trackingNumber}.`;
  trackingMessage.style.color = "#0b1f3a";
  animateTimeline();
});
