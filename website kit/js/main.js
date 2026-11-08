// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}

menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

// Contact form: opens the visitor's email app with the message filled in.
// The site has no server, so nothing is stored or sent from here.
const form = document.getElementById("quote-form");
const note = document.getElementById("form-note");
const TO = "frank.mhando@gmail.com";
const CC = "afidhumatata81@gmail.com";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Website enquiry: ${data.get("service")}`;
  const body = [
    `Name: ${data.get("name")}`,
    `Phone or email: ${data.get("contact")}`,
    `Service: ${data.get("service")}`,
    "",
    data.get("message"),
  ].join("\n");
  window.location.href = `mailto:${TO}?cc=${CC}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = `Your email app should open now. If it does not, email us at ${TO}.`;
});
