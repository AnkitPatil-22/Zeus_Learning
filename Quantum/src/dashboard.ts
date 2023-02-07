import { Card } from "./interface";

const gridContainer = document.querySelector(".grid-container") as HTMLDivElement;

let url = "./courses.json";

async function getCards(): Promise<void> {
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
                        <div class="card-name">${card.course_details.title}</div>
                        <div class="card-text">${card.course_details.subject}
                            <span class="hr">Grade ${card.course_details.grade[0]}</span> 
                            <span class="green">+${card.course_details.grade.length - 1}</span>
                        </div>
                        <div class="card-text">
                            <span class="bold">${card.course_details.syllabus.units}</span> units 
                            <span class="bold">${card.course_details.syllabus.lessons}</span> lessons
                            <span class="bold">${
                                card.course_details.syllabus.topics
                            }</span> topics                           
                        </div>
                        <div class="select">
                            <select name="class" class="${card.course_details.options ? "" : "disabled"}">
                                ${
                                    card.course_details.options
                                        ? card.course_details.options.map((option: string) => {
                                              return `<option value=""> ${option} </option>`;
                                          })
                                        : `<option value=""> No Classes </option>`
                                }
                                <option value=""> sdasdsa    </option>
                            </select>
                        </div>
                        <div class="card-text">
                            ${card.course_details.students ? `${card.course_details.students} Students` : ""} 
                            ${
                                card.course_details.dates
                                    ? `<span class="hr">${card.course_details.dates.start} - ${card.course_details.dates.end}</span>`
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
