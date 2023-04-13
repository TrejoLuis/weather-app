import {weatherFetch} from './apiFns.js'
import  {getDay, getFormatedDate} from './utils.js'

function listenersInit(){

  const citySearchTxt = document.querySelector('#searchCity')
  const citySearchBtn = document.querySelector('.search-div > button')

  const toggleDegreesBtn = document.querySelector('#toggleDegreeBtn')

  //MAIN CARD
  const currentCity = document.querySelector('#currentCity')
  const currentRegion = document.querySelector('#currentRegion')

  //condition ICON
  const currentConditionIcon = document.querySelector('#currentConditionIcon')
  const currentCondition = document.querySelector('#currentCondition')

  const currentDate = document.querySelector('#currentDate')

  const currentTemp = document.querySelector('#currentTemperature')
  //MISC CARDS
  const currentFeelsLike = document.querySelector('#currentFeelsLike')
  const currentWind = document.querySelector('#currentWind')
  const currentWindDir = document.querySelector('#currentWindDir')
  const currentHumidity = document.querySelector('#currentHumidity')
  const currentUv = document.querySelector('#currentUv')

  //FORECAST CARDS
  const forecastCards = document.querySelectorAll('.forecast-card')
  const forecastTemps = document.querySelectorAll('.forecast-min, .forecast-max')

  let weatherData = null 
  let isMetric = true

  console.log(citySearchTxt)
  console.log(forecastCards)

  //LISTENERS
  window.addEventListener('load', firstLoad)
  citySearchBtn.addEventListener('click', getWeatherData)
  toggleDegreesBtn.addEventListener('click', toggleMetricSys)

  async function firstLoad(){
    weatherData = await weatherFetch('Cancun')

    fillWeatherData()
  }
  function toggleMetricSys(){
    if(isMetric){
      currentTemp.textContent = weatherData.current.temp_f
      currentFeelsLike.textContent = weatherData.current.feelslike_f
      currentWind.textContent = weatherData.current.wind_mph

      for (let i=0; i<3; i++){
        forecastCards[i].childNodes[2].children[0].textContent = 
          weatherData.forecast.forecastday[i].day.mintemp_f
        forecastCards[i].childNodes[2].children[1].textContent = 
          weatherData.forecast.forecastday[i].day.maxtemp_f
      }
      isMetric = false
    } else {
      currentTemp.textContent = weatherData.current.temp_c
      currentFeelsLike.textContent = weatherData.current.feelslike_c
      currentWind.textContent = weatherData.current.wind_kph

      for (let i=0; i<3; i++){
        forecastCards[i].childNodes[2].children[0].textContent = 
          weatherData.forecast.forecastday[i].day.mintemp_c
        forecastCards[i].childNodes[2].children[1].textContent = 
          weatherData.forecast.forecastday[i].day.maxtemp_c
      }
      isMetric = true 
    }
    currentTemp.classList.toggle('metric-system')
    currentFeelsLike.classList.toggle('metric-system')
    currentWind.classList.toggle('metric-system')
    forecastTemps.forEach(spn => spn.classList.toggle('metric-system'))
  }
  async function getWeatherData(){
    try{
      console.log(weatherData)
      let tempWeather = await weatherFetch(citySearchTxt.value)
      //Caching data
      if(tempWeather) weatherData = tempWeather
      if(weatherData) fillWeatherData()
    } catch (err) {
      console.error(err)
    }
  }

  function fillWeatherData(){
    
    //MainCard
    currentCity.textContent = weatherData.location.name
    currentRegion.textContent = weatherData.location.region
    currentConditionIcon.src = weatherData.current.condition.icon
    currentCondition.textContent = weatherData.current.condition.text
    currentDate.textContent = getFormatedDate(weatherData.location.localtime)
    currentTemp.textContent = weatherData.current.temp_c
    //MiscCards
    currentFeelsLike.textContent = weatherData.current.feelslike_c
    currentWind.textContent = weatherData.current.wind_kph
    currentWindDir.textContent = weatherData.current.wind_dir
    currentHumidity.textContent = weatherData.current.humidity
    currentUv.textContent = weatherData.current.uv

    //Forecast
    for (let i=0; i<3; i++){
      forecastCards[i].childNodes[0].textContent = 
        getDay(weatherData.forecast.forecastday[i].date)
      forecastCards[i].childNodes[1].src = 
        weatherData.forecast.forecastday[i].day.condition.icon
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
