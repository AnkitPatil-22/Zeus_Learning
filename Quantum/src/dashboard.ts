import { Card } from "./interface";

const gridContainer = document.querySelector(".grid-container") as HTMLDivElement;

let url = "./courses.json";

async function getCards() {
    const response = await fetch(url);
    const data: Card[] = await response.json();

    let expired = document.createElement("div");
    expired.classList.add("expired");
    expired.innerHTML = "EXPIRED";

    data.forEach((card: Card) => {
        let div = document.createElement("div");
        div.classList.add("card");

        let new_card = `
                <div class="card-body">
                    <img src="./assets/icons/favourite.svg" class="favourite ${!card.favourite ? "disable" : ""}" />
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
                            <select name="class" class="${card.desc.options ? "" : "disabled"}">
                                ${
                                    card.desc.options
                                        ? card.desc.options.map((option: string) => {
                                              return `<option value=""> ${option} </option>`;
                                          })
                                        : `<option value=""> No Classes </option>`
                                }
                                <option value=""> sdasdsa    </option>
                            </select>
                        </div>
                        <div class="card-text">
                            ${card.desc.students ? `${card.desc.students} Students` : ""} 
                            ${
                                card.desc.dates
                                    ? `<span class="hr">${card.desc.dates.start} - ${card.desc.dates.end}</span>`
                                    : ""
                            }
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <a href="#" ${!card.footer.preview ? `class='disabled'` : ""}>
                        <img src="./assets/icons/preview.svg" />
                    </a>
                    <a href="#" ${!card.footer.calendar ? `class='disabled'` : ""}>
                        <img src="./assets/icons/manage_course.svg" />
                    </a>
                    <a href="#" ${!card.footer.submission ? `class='disabled'` : ""}>
                        <img src="./assets/icons/grade_submissions.svg" />
                    </a>
                    <a href="#" ${!card.footer.reports ? `class='disabled'` : ""}>
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
