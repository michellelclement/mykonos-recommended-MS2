// Code as directed by Course material, EmailJS and Michelle

function sendMail(contactForm) {
  emailjs
    .send("gmail", "mykonos_website", {
      from_name: contactForm.name.value,
      from_email: contactForm.email.value,
      message: contactForm.message.value,
    })
    .then(alert("Thank you! You email has been sent"));

  $("#contact-form").text();
}
