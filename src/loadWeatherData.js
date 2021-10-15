const loadWeatherData = async (cityName) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=6ded7120f84221978c0e8ab6ca889caf`,
    { mode: "cors" }
  ).catch((error) => {
    alert("city not found!");
  });
  if (!response) {
    return;
  }
  const weatherData = await response.json();
  return weatherData;
};

export default loadWeatherData;
