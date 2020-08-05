function sendMail(contactForm) {
    emailjs.send("gmail", "mykonos_website", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Success, your email has been sent", response);
        },
        function(error) {
            alert("Error, your message has not been sent", error);
        }
    );
    return false;  // To block from loading a new page
}