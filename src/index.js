import './style.css';

// async function for getting weather data 
async function getWeatherData(location) {
  const apiKey = '8007d782d1fa9ea01ab64176725f4eb4';
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getWeatherData('London, ENG')

