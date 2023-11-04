function formValidation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementsByName("message")[0].value;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Initialize error message variable
  let errorName, errorEmail, errorMessage, errorSubject;

  // Validate Name
  if (name === "") {
    errorName = "Name is required.\n";
    $("#errorName").html("<span class='danger' >Name field is Empty. </span>");
    return false;
  } else {
    $("#errorName").html("");
  }

  // Validate Email
  if (email === "") {
    $("#errorEmail").html(
      "<span class='danger' >Email field is Empty. </span>"
    );
    return false;
  } else if (!email.match(emailRegex)) {
    $("#errorEmail").html("<span class='danger' >Not valid email. </span>");
    return false;
  } else {
    $("#errorEmail").html("");
  }

  // Validate Subject
  if (subject === "") {
    $("#errorSubject").html(
      "<span class='danger' >Subject field is Empty. </span>"
    );
    return false;
  } else {
    $("#errorSubject").html("");
  }

  // Validate Message
  if (message === "") {
    $("#errorMessage").html(
      "<span class='danger' > Message field is Empty. </span>"
    );
    return false;
  } else {
    $("#errorMessage").html("");
  }

  // Display error message if there are validation errors

  // If form is valid, send an AJAX request
  const date = new Date();
  const messageId = date.getTime();
  $.ajax({
    type: "POST",
    url: "https://bbdqabg7ee.execute-api.us-east-1.amazonaws.com/v1/contact-form",

    data: JSON.stringify({
      name: name,
      email: email,
      subject: subject,
      message: message,
    }),

    cache: false,
    success: function (response) {
      // Display the success message
      console.log(response);
      $("#success").html(
        "<span class='success' > Message sent successfully.</span>"
      );
      document.getElementById("contactForm").reset();
      $("#error-message").html("");
      return true;
    },
    error: function (error) {
      console.log(error);
      // Display an error message if the request fails
      $("#error-message").html(
        "<span class='danger' >Error! Could not send the message.</span>"
      );
    },
  });
  return false;
  // Prevent the default form submission
}

// Add form submission event listener
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    if (!formValidation()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
