"use strict";
  const submitBtn = document.querySelector("#submitBtn");
  const email = document.querySelector("#email");
  const messageDiv = document.querySelector("#messageDiv");
  const fullName = document.querySelector("#fullName");
  const password = document.querySelector("#password");
var apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";

  submitBtn.addEventListener("click", submitBtnClicked);

  function submitBtnClicked(e) {
    e.preventDefault(); // prevent form submission

    let bodyData = {
      username: email.value,
      fullName: fullName.value,
      password: password.value,
    }

    console.log(bodyData);

    fetch(apiBaseURL + "/api/users", {
      method: "POST",
      body: JSON.stringify(bodyData),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    .then(response => response.json())
    .then(json => {
      console.log(json)
      messageDiv.innerHTML = "Account successfully created"
      window.location.href = "login.html";
    })

    .catch(err => {
      console.error(err)
      messageDiv.innerHTML = "There was an error while creating the account, please try again"
    })
  }