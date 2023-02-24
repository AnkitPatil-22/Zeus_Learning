const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img  ");
const forecast = new Forecast();

const updateUI = ({ cityDetails, weather }) => {
    // upadte details template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    // update day/night and icon image
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src", iconSrc);

    let timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
    time.setAttribute("src", timeSrc);

    card.classList.remove("d-none");
};

cityForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast
        .updateCity(city)
        .then((data) => updateUI(data))
        .catch((err) => console.log(err));

    // set local storage
    localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
    let city = localStorage.city;
    forecast
        .updateCity(city)
        .then((data) => updateUI(data))
        .catch((err) => console.log(err));
}
