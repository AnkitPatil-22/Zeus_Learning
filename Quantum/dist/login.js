"use strict";
const password_field = document.getElementById("password");
const previewPassword = () => {
    if (password_field.type === "password") {
        password_field.type = "text";
    }
    else {
        password_field.type = "password";
    }
};
