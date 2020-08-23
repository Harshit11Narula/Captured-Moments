function loginEventHandler() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var error_email = document.getElementById("error_email");
  var error_password = document.getElementById("error_password");
  error_email.innerHTML = "";
  error_password.innerHTML = "";
  var email_value = email.value;
  var pat = /{\W,_}/gi;
  var check = pat.test(password.value);
  console.log(check);
  if (check == true) {
    console.log("Pass");
  }

  var password_value = password.value;
  if (email_value == "") {
    error_email.innerHTML = "Email cannot be empty";
  }
  if (password_value == "") {
    error_password.innerHTML = "Password cannot be empty";
  }
}
