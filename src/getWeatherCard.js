const getWeatherCard = (weatherObj) => {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");
  const setBackground = () => {
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(../src/images/${weatherObj.weather[0].main}.jpg)`;
    container.style.backgroundSize = "cover";
  };
  try {
    const weatherHeader = document.createElement("div");
    weatherHeader.textContent = `${weatherObj.name},${weatherObj.sys.country}`;

    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");
    let CTempInC = Number.parseFloat(weatherObj.main.temp) - 273;
    currentTemp.textContent = `${CTempInC.toFixed(1)}°C`;

    const weatherIcon = document.createElement("img");
    weatherIcon.classList.add("weather-icon");
    weatherIcon.alt = "Weather icon";
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`;

    const weatherDesc = document.createElement("div");
    weatherDesc.textContent = `${weatherObj.weather[0].description}`;

    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp");
    let MaxTempInC = Number.parseFloat(weatherObj.main.temp_max) - 273;
    maxTemp.textContent = `MAX:${MaxTempInC.toFixed(1)}°C`;

    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    let MinTempInC = Number.parseFloat(weatherObj.main.temp_min) - 273;
    minTemp.textContent = `MIN:${MinTempInC.toFixed(1)}°C`;

    const maxMin = document.createElement("div");
    maxMin.classList.add("max-min");

    maxMin.appendChild(minTemp);
    maxMin.appendChild(maxTemp);

    weatherCard.appendChild(weatherHeader);
    weatherCard.appendChild(currentTemp);
    weatherCard.appendChild(weatherIcon);
    weatherCard.appendChild(weatherDesc);
    weatherCard.appendChild(maxMin);
    setBackground();
  } catch (error) {
    console.log(error);
    weatherCard.textContent = "City not found! :(";
    return weatherCard;
  }
  return weatherCard;
};

export default getWeatherCard;
