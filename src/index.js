import './style.css';

// getting weather data 
async function getWeatherData(location) {
  const apiKey = '8007d782d1fa9ea01ab64176725f4eb4';
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// proccesing json data 
function processWeatherData(data) {
  const main = data.main;
  const place = data.name;
  const temp = main.temp;
  const humidity = main.humidity;
  const wind = data.wind;

  return {
    main,
    place,
    humidity,
    temp,
    wind
  };
}

async function getProcessedWeatherData(location) {
  const data = await getWeatherData(location);
  return processWeatherData(data);
}

// get submit from user
const form = document.querySelector('.form')
form.addEventListener('submit', e => {
  e.preventDefault();
  const city = form.elements.city.value;
  const country = form.elements.country.value;
  const location = `${city}, ${country}`;
  getProcessedWeatherData(location).then(weatherData => {
    const placeElement = document.getElementById('place');
  const tempElement = document.getElementById('temp');
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');

  placeElement.textContent = weatherData.place;
  tempElement.textContent = weatherData.temp + 'C';
  humidityElement.textContent = weatherData.humidity + '%';
  windElement.textContent = weatherData.wind.speed + 'km/h';
  })
})

// clear displayed info 
const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', () => {
  const placeElement = document.getElementById('place');
  const tempElement = document.getElementById('temp');
  const humidityElement = document.getElementById('humidity');
  const windElement = document.getElementById('wind');

  placeElement.textContent = '';
  tempElement.textContent = '';
  humidityElement.textContent = '';
  windElement.textContent = '';
})


