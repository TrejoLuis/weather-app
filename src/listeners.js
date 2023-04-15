import {weatherFetch} from './apiFns.js'
import {getDay, getFormatedDate} from './utils.js'

function listenersInit(){

  const citySearchTxt = document.querySelector('#searchCity')
  const citySearchBtn = document.querySelector('.search-div > button')

  const toggleDegreesBtn = document.querySelector('#toggleDegreeBtn')

  //MAIN CARD
  const currentCity = document.querySelector('#currentCity')
  const currentRegion = document.querySelector('#currentRegion')
  const currentCard = document.querySelector('.current-card')
  //HOURLY CONTAINER
  const hourlyContainer = document.querySelector('.hourly-container')
  const closeHourlyData = document.querySelector('.close-pane')

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

  //SYSTEM DEPENDANT VALUES
  const systemDependantValues = document.querySelectorAll('.temperature, .velocity')

  let weatherData = null 
  let isMetric = true

  console.log(citySearchTxt)
  console.log(forecastCards)

  //LISTENERS
  window.addEventListener('load', firstLoad)
  citySearchBtn.addEventListener('click', getWeatherData)
  toggleDegreesBtn.addEventListener('click', toggleMetricSys)
  forecastCards.forEach(card => card.addEventListener('click', toggleHourly))
  closeHourlyData.addEventListener('click', closePanel)

  function closePanel(){
    hourlyContainer.classList.add('hidden')
    currentCard.classList.remove('hidden')
  }

  function toggleHourly(e){
    console.log(e.currentTarget)
    //Hidding current card, show hourly data
    currentCard.classList.add('hidden')
    hourlyContainer.classList.remove('hidden')

    //Clicked the same day
    if(hourlyContainer.firstChild.firstChild.textContent == e.currentTarget.firstChild.textContent)
      return
    let id = e.currentTarget.attributes[0].value
    let hoursData = weatherData.forecast.forecastday[id].hour
    hourlyContainer.attributes['card-id'].value = id
    hourlyContainer.firstChild.firstChild.textContent = forecastCards[id].firstChild.textContent
    console.log(id)
    //Fill ul
    let ul = hourlyContainer.children[1]
    for(let i=0; i<24; i++){
      //Hourly element Temp
      ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
        isMetric ? hoursData[i].temp_c : hoursData[i].temp_f
      //Hourly element Icon 
      ul.children[i].firstChild.firstChild.lastChild.src = 
        hoursData[i].condition.icon
    }
  }

  async function firstLoad(){
    weatherData = await weatherFetch('Cancun')

    fillWeatherData()
    //first hourly data - current day
    let hoursData = weatherData.forecast.forecastday[0].hour
    hourlyContainer.setAttribute('card-id', 0)
    hourlyContainer.firstChild.firstChild.textContent = forecastCards[0].firstChild.textContent
    //Fill ul
    let ul = hourlyContainer.children[1]
    for(let i=0; i<24; i++){
      //Hourly element Temp
      ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
        isMetric ? hoursData[i].temp_c : hoursData[i].temp_f
      //Hourly element Icon 
      ul.children[i].firstChild.firstChild.lastChild.src = 
        hoursData[i].condition.icon
    }
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
      //Toggle hourlyData
      let id = hourlyContainer.attributes['card-id'].value
      let ul = hourlyContainer.children[1]
      let hoursData = weatherData.forecast.forecastday[id].hour
      for(let i=0; i<24; i++){
        ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
          hoursData[i].temp_f
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
      //Toggle hourlyData
      let id = hourlyContainer.attributes['card-id'].value
      let ul = hourlyContainer.children[1]
      let hoursData = weatherData.forecast.forecastday[id].hour
      for(let i=0; i<24; i++){
        ul.children[i].firstChild.firstChild.firstChild.children[0].textContent = 
          hoursData[i].temp_c
      }
      isMetric = true 
    }
    systemDependantValues.forEach(ele => ele.classList.toggle('metric-system'))
  }
  async function getWeatherData(){
    try{
      console.log(weatherData)
      let tempWeather = await weatherFetch(citySearchTxt.value)
      //Caching data
      if(tempWeather) weatherData = tempWeather
      if(weatherData) fillWeatherData()
      currentCard.classList.remove('hidden')
      hourlyContainer.classList.add('hidden')
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
    currentTemp.textContent = isMetric ? weatherData.current.temp_c : weatherData.current.temp_f
    //MiscCards
    currentFeelsLike.textContent = isMetric ? weatherData.current.feelslike_c : weatherData.current.feelslike_f
    currentWind.textContent = isMetric ? weatherData.current.wind_kph : weatherData.current.wind_mph
    currentWindDir.textContent = weatherData.current.wind_dir
    currentHumidity.textContent = weatherData.current.humidity
    currentUv.textContent = weatherData.current.uv

    //Forecast
    for (let i=0; i<3; i++){
      forecastCards[i].childNodes[0].textContent = 
        getDay(weatherData.forecast.forecastday[i].date)
      forecastCards[i].childNodes[1].src = 
        weatherData.forecast.forecastday[i].day.condition.icon
      forecastCards[i].childNodes[2].children[0].textContent = isMetric 
        ? weatherData.forecast.forecastday[i].day.mintemp_c
        : weatherData.forecast.forecastday[i].day.mintemp_f
      forecastCards[i].childNodes[2].children[1].textContent = isMetric
        ? weatherData.forecast.forecastday[i].day.maxtemp_c
        : weatherData.forecast.forecastday[i].day.maxtemp_f
    }
  }
}


export {
  listenersInit
}
