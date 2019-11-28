import theCityForm from "./theCityForm";
import saveToLocalStorage from "./saveToLocalStorage";
import "./style.css";

const formArea = document.querySelector("#form-area");
const btnChangeCity = document.querySelector("#btn-change-city");
const weatherDiv = document.querySelector(".weather-info");

const removeUnitEl = () => {
  const elem = document.getElementById("unitEl");
  elem.parentNode.removeChild(elem);
  return false;
};

const renderWeatherData = (weatherData, otherWeatherDiv) => {
  const location = otherWeatherDiv.querySelector("#location");
  const weather = otherWeatherDiv.querySelector("#weather");
  const weatherCondIcon = otherWeatherDiv.querySelector("#weatherCondIcon");
  const humidity = otherWeatherDiv.querySelector("#humidity");

  if (weatherData.cod !== "404") {
    location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    weather.textContent = `${weatherData.main.temp} °C`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;

    weatherCondIcon.textContent = "";
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const img = document.createElement("img");
    img.setAttribute("src", iconUrl);
    weatherCondIcon.appendChild(img);
  } else {
    location.textContent = "CITY NOT FOUND!";
    weather.textContent = "";
    humidity.textContent = "";
    weatherCondIcon.textContent = "";
    removeUnitEl();
  }
};

const getCityInfo = async city => {
  const API_KEY = "60893133019f8947f3001b83a0d2b23d";
  const units = "metric";
  const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
  const response = await fetch(targetURL);
  const weatherData = await response.json();

  saveToLocalStorage("weatherData", weatherData);
  return weatherData;
};

const renderCityForm = formRaw => {
  formArea.innerHTML = formRaw;

  const cityForm = document.querySelector("#city-search");
  const cityInput = document.querySelector("#city-name");
  cityInput.focus();

  cityForm.addEventListener("submit", e => {
    e.preventDefault();
    getCityInfo(cityInput.value).then(weatherData =>
      renderWeatherData(weatherData, weatherDiv)
    );
  });
};

if (localStorage.getItem("weatherData")) {
  const weatherData = JSON.parse(localStorage.getItem("weatherData"));
  renderWeatherData(weatherData, weatherDiv);
  btnChangeCity.style.display = "block";
  btnChangeCity.addEventListener("click", e => {
    e.preventDefault();
    renderCityForm(theCityForm);
  });
} else {
  renderCityForm(theCityForm);
}
