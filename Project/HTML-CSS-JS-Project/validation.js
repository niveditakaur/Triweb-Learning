function validateForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var dob = document.getElementById("dob").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var resume = document.getElementById("resume").value;

    if (fname === "" || lname === "" || dob === "" || age === "" || gender === "" || resume === "") {
      alert("All fields are required");
      return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    var contactPattern = /^[6789]\d{9}$/;
    if (!contactPattern.test(contact)) {
      alert("Please enter a 10-digit contact number starting with 6, 7, 8, or 9");
      return false;
    }

    return true;
  }

  document.getElementById("registrationForm").onsubmit = validateForm;