// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//API key
const API_KEY = "";

const InputCity = document.getElementById("input");

var City;

//Get the name of the city
function getInputValue() {
  City = InputCity.value;
  console.log(City);
  submitCity();
  if (City) {
    document.querySelector(".info-container").classList.remove("invisible");
    document.querySelector(".info-container").classList.add("visible");
  }
}

//Variables
const ShowCity = document.querySelector(".city");
const Temp = document.querySelector(".temp");
const FeelsLike = document.querySelector(".feels-like");
const TempMin = document.querySelector(".temp-min");
const TempMax = document.querySelector(".temp-max");
const WeatherType = document.querySelector(".weather-type");
const WeatherDescription = document.querySelector(".weather-desc");
const WindSpeed = document.querySelector(".wind-speed");
const WindDeg = document.querySelector(".wind-deg");
const Pressure = document.querySelector(".pressure");
const Humidity = document.querySelector(".humidity");

const interval = 1000;
//API call
async function getWeather() {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`
  );
  let data = await response.json();
  return data;
}

//Fill DOM with data
function submitCity() {
  getWeather().then(
    (data) => (
      (ShowCity.innerHTML = data.name),
      (Temp.innerHTML = `${data.main.temp.toFixed(1)} ºC`),
      (FeelsLike.innerHTML = `Feels like ${data.main.feels_like.toFixed(
        1
      )} ºC`),
      (TempMin.innerHTML = `${data.main.temp_min.toFixed(1)} ºC`),
      (TempMax.innerHTML = `${data.main.temp_max.toFixed(1)} ºC`),
      (WeatherType.innerHTML = data.weather[0].main),
      (WeatherDescription.innerHTML = data.weather[0].description),
      (WindSpeed.innerHTML = `${data.wind.speed.toFixed(1)} km/h`),
      (WindDeg.innerHTML = `${data.wind.deg} º`),
      (Pressure.innerHTML = `${data.main.pressure} hPa`),
      (Humidity.innerHTML = `${data.main.humidity} %`)
    )
  );
}

setInterval(() => {
  submitCity()
}, interval);
