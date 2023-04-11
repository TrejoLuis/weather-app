import {weatherFetch} from './apiFns.js'

function listenersInit(){

  const citySearchTxt = document.querySelector('#searchCity')
  const citySearchBtn = document.querySelector('.search-div > button')

  const toggleDegreesBtn = document.querySelector('#toggleDegreeBtn')

  //MAIN CARD
  const currentCity = document.querySelector('#currentCity')
  const currentRegion = document.querySelector('#currentRegion')

  //condition ICON

  const currentCondition = document.querySelector('#currentCondition')

  const currentTemp = document.querySelector('#currentTemperature')
  //MISC CARDS
  const currentFeelsLike = document.querySelector('#currentFeelsLike')
  const currentWind = document.querySelector('#currentWind')
  const currentWindDir = document.querySelector('#currentWindDir')
  const currentHumidity = document.querySelector('#currentHumidity')
  const currentUv = document.querySelector('#currentUv')

  //FORECAST CARDS
  const forecastCards = document.querySelectorAll('.forecast-card')

  //Caching feching data
  let weatherData = null 
  // let weatherDataOld = null

  console.log(citySearchTxt)
  console.log(forecastCards)
  citySearchBtn.addEventListener('click', fillWeatherData)

  async function fillWeatherData(){
    weatherData = await weatherFetch(citySearchTxt.value)
    if(!weatherData) return
    console.log(weatherData)
    
    //MainCard
    currentCity.textContent = weatherData.location.name
    currentRegion.textContent = weatherData.location.region
    currentCondition.textContent = weatherData.current.condition.text
    currentTemp.textContent = weatherData.current.temp_c
    //MiscCards
    currentFeelsLike.textContent = weatherData.current.feelslike_c
    currentWind.textContent = weatherData.current.wind_kph
    currentWindDir.textContent = weatherData.current.wind_dir
    currentHumidity.textContent = weatherData.current.humidity
    currentUv.textContent = weatherData.current.uv

    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    for (let i=0; i<3; i++){
      forecastCards[i].childNodes[0].textContent = 
        weekdays[new Date(weatherData.forecast.forecastday[i].date).getUTCDay()] 
      forecastCards[i].childNodes[2].children[0].textContent = 
        weatherData.forecast.forecastday[i].day.mintemp_c
      forecastCards[i].childNodes[2].children[1].textContent = 
        weatherData.forecast.forecastday[i].day.maxtemp_c
    }
  }
}


export {
  listenersInit
}
