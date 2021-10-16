import "./style.css";
import loadWeatherData from "./loadWeatherData";
import getWeatherCard from "./getWeatherCard";
import resetPage from "./resetPge";

const getWeatherData = async (e) => {
  resetPage();
  const cityName = cityInput.value;
  const weatherData = await loadWeatherData(cityName);

  console.log(weatherData);
  const weatherCard = getWeatherCard(weatherData);
  weatherInfo.appendChild(weatherCard);
};

const submitCity = document.querySelector(".submit-city");
const cityInput = document.querySelector(".city-input");
submitCity.addEventListener("click", getWeatherData);

const weatherInfo = document.querySelector(".weather-info");
