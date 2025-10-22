const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Message block
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("errorMessage");
  const mmsgCondition = message.length < 10; // check for min 10 characters

  if (mmsgCondition) {
    errorMessage.textContent = `Message must be at least 10 characters ${
      10 - message.length
    } more needed.`;
  } else {
    errorMessage.textContent = "";
  }

  // Name condition
  const name = document.getElementById("fullName").value.trim();
  const errorName = document.getElementById("errorName");
  const nameCondition = !name;

  if (nameCondition) {
    errorName.textContent = "Full name is required.";
  } else {
    errorName.textContent = "";
  }

  //email condition
  const email = document.getElementById("email").value.trim();
  const errorEmail = document.getElementById("errorEmail");
  const emailCondition = !email
    ? (errorEmail.textContent =
        "Cannot submit empty form, Input correct details")
    : (errorEmail.textContent =
        "" || !email.includes(".com")
          ? (errorEmail.textContent = `Missing a .com, Input correct details!`)
          : (errorEmail.textContent =
              "" || !email.includes("@")
                ? (errorEmail.textContent =
                    "missing an @, Input correct details!")
                : (errorEmail.textContent = "")));

  // if (emailCondition) {
  //   errorEmail.textContent = "Valid email required.";
  // } else {
  //   errorEmail.textContent = "";
  // }

  // Subject condition
  const subject = document.getElementById("subject").value.trim();
  const errorSubject = document.getElementById("errorSubject");
  const subjectCondition = !subject;

  if (subjectCondition) {
    errorSubject.textContent = "Subject is required.";
  } else {
    errorSubject.textContent = "";
  }

  // Success condition
  if (
    !mmsgCondition &&
    !subjectCondition &&
    !nameCondition &&
    !emailCondition
  ) {
    successMsg.textContent = "Your message has been sent successfully!";
    successMsg.style.display = 'block'
    form.reset();
  } else {
    successMsg.textContent = "";
  }
});
