const form = document.getElementById("form");
const name = document.getElementById("name");
const comment = document.getElementById("comment");
const male = document.getElementById("male");
const female = document.getElementById("female");
const gender = document.querySelectorAll("input[name='gender']");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    nameValue = name.value;
    commentValue = comment.value;

    if (nameValue === "") {
        alert("All fields are compulsory");
        name.focus();
    } else if (commentValue === "") {
        alert("All fields are compulsory");
        comment.focus();
    } else if (!male.checked && !female.checked) {
        alert("All fileds are compulsory");
        male.focus();
    } else {
        alert("Form submitted successfully");
    }
}
