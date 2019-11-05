
import theCityForm from './theCityForm';
import saveToLocalStorage from './saveToLocalStorage';
import './style.css';

const weatherDiv = document.querySelector('.weatherInf');
const form = document.querySelector('#formA');
const chngeCitybutton = document.querySelector('#change-city-btn');

const renderWeatherData = (weatherData, otherWeatherDiv) => {
  const location = otherWeatherDiv.querySelector('#loc');
  const humidity = otherWeatherDiv.querySelector('#humidity');
  const weather = otherWeatherDiv.querySelector('#weather');
  const weatherIcon = otherWeatherDiv.querySelector('#weatherIcon');
 


  if (weatherData.cod !== '404') {
    location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
    weather.textContent = `${weatherData.main.temp} °C`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;

    weatherIcon.textContent = '';
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const img = document.createElement('img');
    img.setAttribute('src', iconUrl);
    weatherIcon.appendChild(img);
  } else {
    location.textContent = 'CITY NOT FOUND!';
    weather.textContent = '';
    humidity.textContent = '';
    weatherIcon.textContent = '';
  }
};

const getCityInfo = async (city) => {
  const API_KEY = '60893133019f8947f3001b83a0d2b23d';
  const units = 'metric';
  const targetURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`;
  const response = await fetch(targetURL);
  const weatherData = await response.json();

  saveToLocalStorage('weatherData', weatherData);
  return weatherData;
};

const renderCityForm = (formRaw) => {
  form.innerHTML = formRaw;

  const cityForm = document.querySelector('#city-search');
  const cityInput = document.querySelector('#city-name');
  cityInput.focus();

  cityForm.addEventListener('submit', (e) => {
    e.preventDefault();
    getCityInfo(cityInput.value)
      .then((weatherData) => renderWeatherData(weatherData, weatherDiv));
  });
};


if (localStorage.getItem('weatherData')) {
  const weatherData = JSON.parse(localStorage.getItem('weatherData'));
  renderWeatherData(weatherData, weatherDiv);
  chngeCitybutton.style.display = 'block';
  chngeCitybutton.addEventListener('click', (e) => {
    e.preventDefault();
    renderCityForm(theCityForm);
  });
} else {
  renderCityForm(theCityForm);
}
