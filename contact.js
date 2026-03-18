// mail contact form
document.getElementById("contact-form");

addEventListener("submit", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;

  const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${msg}`;

  const mailto = `mailto:anemail@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  form = document.getElementById("contact-form");

  form.action = mailto;
});
