function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function submitForm(e) {
  e.preventDefault();
  alert("Form submitted successfully!");
}
