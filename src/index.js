import './style.css';

// getting weather data 
async function getWeatherData(location) {
  const apiKey = '8007d782d1fa9ea01ab64176725f4eb4';
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

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

getProcessedWeatherData("New York, US").then(weatherData => {
  console.log(weatherData);
});

