const getWeatherCard = (weatherObj) => {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");
  try {
    const currentTemp = document.createElement("div");
    currentTemp.classList.add("current-temp");
    let CTempInC = Number.parseFloat(weatherObj.main.temp) - 273;
    currentTemp.textContent = `${CTempInC.toFixed(1)}°C`;

    const maxTemp = document.createElement("div");
    maxTemp.classList.add("max-temp");
    let MaxTempInC = Number.parseFloat(weatherObj.main.temp_max) - 273;
    maxTemp.textContent = `MAX: ${MaxTempInC.toFixed(1)}°C`;

    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    let MinTempInC = Number.parseFloat(weatherObj.main.temp_min) - 273;
    minTemp.textContent = `MIN: ${MinTempInC.toFixed(1)}°C`;

    weatherCard.appendChild(currentTemp);
    weatherCard.appendChild(maxTemp);
    weatherCard.appendChild(minTemp);
  } catch (error) {
    console.log(error);
    weatherCard.textContent = "City not found! :(";
    return weatherCard;
  }
  return weatherCard;
};

export default getWeatherCard;
