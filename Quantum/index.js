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
const gridContainer = document.querySelector(".grid-container");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

async function getCards() {
    const response = await fetch("./courses.json");
    const data = await response.json();

    let expired = document.createElement("div");
    expired.classList.add("expired");
    expired.innerHTML = "EXPIRED";

    data.forEach((card) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let new_card = `
                <div class="card-body">
                    ${card.favourite ? `<img src="./assets/icons/favourite.svg" class="favourite" />` : ""}
                    <img src=${card.image} class="displayImg" />
                    <div class="card-desc">
                        <div class="card-name">${card.desc.title}</div>
                        <div class="card-text">${card.desc.subject}
                            <span class="hr">Grade ${card.desc.grade[0]}</span> 
                            <span class="green">+${card.desc.grade.length - 1}</span>
                        </div>
                        <div class="card-text">
                            <span class="bold">${card.desc.syllabus.units}</span> units 
                            <span class="bold">${card.desc.syllabus.lessons}</span> lessons
                            <span class="bold">${card.desc.syllabus.topics}</span> topics                           
                        </div>
                        <div class="select">
                            <select name="class">
                                ${card.desc.options.map((option) => {
                                    return `<option value=""> ${option} </option>`;
                                })}
                            </select>
                        </div>
                        <div class="card-text">${card.desc.students} Students
                            ${
                                card.desc.dates
                                    ? `<span class="hr">${card.desc.dates.start} - ${card.desc.dates.end}</span>`
                                    : ""
                            }
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" ${!card.footer[0] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/preview.svg" />
                    </a>
                    <a href="#" ${!card.footer[1] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/manage_course.svg" />
                    </a>
                    <a href="#" ${!card.footer[2] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/grade_submissions.svg" />
                    </a>
                    <a href="#" ${!card.footer[3] ? `class= 'disabled'` : ""}>
                        <img src="./assets/icons/reports.svg" />
                    </a>
                </div>
        `;

        div.innerHTML = new_card;
        if (card.expired) {
            div.appendChild(expired);
        }

        gridContainer.appendChild(div);
    });
}

getCards();
