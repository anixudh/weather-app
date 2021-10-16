const getWeatherCard = (weatherObj) => {
  const weatherCard = document.createElement("div");
  weatherCard.classList.add("weather-card");
  const setBackground = () => {
    const container = document.querySelector(".container");
    container.style.backgroundImage = `url(../src/images/${weatherObj.weather[0].main}.jpg)`;
    container.style.backgroundSize = "cover";
  };

  const getWindDirection = () => {
    const dir = Number(weatherObj.wind.speed);
    if (dir <= 348.75 && dir >= 11.25) return "N";
    else if (dir <= 11.25 && dir >= 33.75) return "NNE";
    else if (dir <= 33.75 && dir >= 56.25) return "NE";
    else if (dir <= 56.25 && dir >= 78.75) return "ENE";
    else if (dir <= 78.75 && dir >= 101.25) return "E";
    else if (dir <= 101.25 && dir >= 123.75) return "ESE";
    else if (dir <= 123.75 && dir >= 146.25) return "SE";
    else if (dir <= 146.25 && dir >= 168.75) return "SSE";
    else if (dir <= 168.75 && dir >= 191.25) return "S";
    else if (dir <= 191.25 && dir >= 213.75) return "SSW";
    else if (dir <= 213.75 && dir >= 236.25) return "SW";
    else if (dir <= 236.25 && dir >= 258.75) return "WSW";
    else if (dir <= 258.75 && dir >= 281.25) return "W";
    else if (dir <= 281.25 && dir >= 303.75) return "WNW";
    else if (dir <= 303.75 && dir >= 326.25) return "NW";
    else return "NNW";
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
    maxTemp.textContent = `MAX: ${MaxTempInC.toFixed(1)}°C`;

    const minTemp = document.createElement("div");
    minTemp.classList.add("min-temp");
    let MinTempInC = Number.parseFloat(weatherObj.main.temp_min) - 273;
    minTemp.textContent = `MIN: ${MinTempInC.toFixed(1)}°C`;

    const maxMin = document.createElement("div");
    maxMin.classList.add("max-min");

    maxMin.appendChild(minTemp);
    maxMin.appendChild(maxTemp);

    const weatherCardTop = document.createElement("div");
    weatherCardTop.classList.add("weather-card-top");
    weatherCardTop.appendChild(weatherHeader);
    weatherCardTop.appendChild(currentTemp);
    weatherCardTop.appendChild(weatherIcon);
    weatherCardTop.appendChild(weatherDesc);
    weatherCardTop.appendChild(maxMin);

    const weatherCardBottom = document.createElement("div");
    weatherCardBottom.classList.add("weather-card-bottom");

    const leftSection = document.createElement("div");
    leftSection.classList.add("left-section");
    leftSection.textContent = "WIND";

    const windSpeed = document.createElement("div");
    windSpeed.textContent = `Speed: ${(
      Number(weatherObj.wind.speed) * 3.6
    ).toFixed(2)} km/h`;
    const windDirection = document.createElement("div");
    windDirection.textContent = "Direction: " + getWindDirection();
    const pressure = document.createElement("div");
    pressure.textContent = "Pressure: " + weatherObj.main.pressure + " hPa";
    leftSection.appendChild(windSpeed);
    leftSection.appendChild(windDirection);
    leftSection.appendChild(pressure);

    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");
    rightSection.textContent = "RAIN";

    const cloudy = document.createElement("div");
    cloudy.textContent = `Cloudiness: ${weatherObj.clouds.all}%`;
    const humidity = document.createElement("div");
    humidity.textContent = "Humidity: " + weatherObj.main.humidity + "%";
    const volume = document.createElement("div");
    if (weatherObj.hasOwnProperty("rain"))
      volume.textContent = "Volume(1h): " + weatherObj.rain["1h"] + " mm";
    rightSection.appendChild(cloudy);
    rightSection.appendChild(humidity);
    rightSection.appendChild(volume);

    weatherCardBottom.appendChild(leftSection);
    weatherCardBottom.appendChild(rightSection);

    weatherCard.appendChild(weatherCardTop);
    weatherCard.appendChild(weatherCardBottom);
    setBackground();
  } catch (error) {
    console.log(error);
    weatherCard.textContent = "City not found! :(";
    return weatherCard;
  }
  return weatherCard;
};

export default getWeatherCard;
