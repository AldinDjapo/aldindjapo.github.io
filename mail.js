function sendEmail(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "aldin.djapo97@gmail.com",
    Password: "7C927D97690E25262154FD0E1E4EAFC6F32A",
    To: "aldin.djapo97@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: document.getElementById("message").value,
  }).then((message) => alert(message));
  return alert("Email sent successfully");
}
