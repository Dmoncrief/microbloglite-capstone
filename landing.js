/* Landing Page JavaScript */

"use strict";

const loginForm = document.querySelector("#login");
const username = document.querySelector("#username");
const password = document.querySelector("#password")


window.onload = init();




function init(){

loginForm.addEventListener("click",  (event) => {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use loginForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const loginData = {
        username: username.value,
        password: password.value,
    }

    // Disables the button after the form has been submitted already:
    loginForm.disabled = true;

    // Time to actually process the login using the function from auth.js!
    login(loginData);
    console.log(loginData)
});

}