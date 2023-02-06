// LOGIN
const password_field = document.getElementById("password");

const previewPassword = () => {
    if (password_field.type === "password") {
        password_field.type = "text";
    } else {
        password_field.type = "password";
    }
};

// DASHBOARD
const toggleBtn = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".navbar-nav");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
