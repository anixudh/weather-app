import "./style.css";
import loadWeatherData from "./loadWeatherData";
import getWeatherCard from "./getWeatherCard";

const getWeatherData = async (e) => {
  const cityName = cityInput.value;
  const weatherData = await loadWeatherData(cityName);

  console.log(weatherData.main, weatherData.weather);
  const weatherCard = getWeatherCard(weatherData);
  weatherInfo.appendChild(weatherCard);
};

const submitCity = document.querySelector(".submit-city");
const cityInput = document.querySelector(".city-input");
submitCity.addEventListener("click", getWeatherData);

const weatherInfo = document.querySelector(".weather-info");
