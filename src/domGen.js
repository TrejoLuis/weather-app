import humidityIcon from './icons/humidity.png'
import airIcon from './icons/air.png'
import sunnyIcon from './icons/sunny.png'
import thermoIcon from './icons/thermometer.png'

function init(){
  const content = document.createElement('div')
  content.id = 'content'

  content.append(header(),main())

  document.body.appendChild(content)
}

function header(){
  const header = document.createElement('header')
  header.innerHTML = `
  <div class="logo">LOGO</div>
  <div class="search-div">
    <input type="text" id="searchCity">
    <button class="search-button">ICON</button>
  </div>
  <button id="toggleDegreeBtn">°C / °F</button>
  `

  return header
}

 function main(){
  const main = document.createElement('main')

  const forecastHeader = document.createElement('h3')
  forecastHeader.textContent = '3 Day Forecast'

  const forecastContainer = document.createElement('div')
  forecastContainer.id = 'forecastContainer'

  let cards = forecastCards()
  for(let i=0; i<3; i++){
    forecastContainer.appendChild(cards[i])
  }

  main.append(currentWeather(), forecastHeader, forecastContainer)
  
  return main
}

function currentWeather(){
  const currentCard = document.createElement('div')
  currentCard.classList.add('current-card')

  const cityDiv = document.createElement('p')
  cityDiv.classList.add('text-normal')
  cityDiv.innerHTML = `<span id="currentCity"></span>, <span id="currentRegion"></span>`

  const icon = document.createElement('img')
  icon.id = 'currentConditionIcon'

  const condition = document.createElement('p')
  condition.classList.add('text-normal')
  condition.id = 'currentCondition'

  const date = document.createElement('p')
  date.classList.add('text-small')
  date.id = 'currentDate'

  const temperature = document.createElement('p')
  temperature.classList.add('text-big', 'temperature', 'metric-system')
  temperature.id = 'currentTemperature'

  const miscDataContainer = document.createElement('div')
  miscDataContainer.classList.add('miscData-container')

  const feelsLikeCard = document.createElement('div')
  feelsLikeCard.classList.add('miscData-card')
  feelsLikeCard.innerHTML = `
  <p>Feels like</p>
  <div>
    <img src=${thermoIcon}>
    <span id='currentFeelsLike' class='temperature metric-system'></span>
  </div>
  `
  const windCard = document.createElement('div')
  windCard.classList.add('miscData-card')
  windCard.innerHTML = `
  <p>Wind</p>
  <div>
    <img src=${airIcon}>
    <span id='currentWind' class='velocity metric-system'></span> | <span id='currentWindDir'></span>
  </div>
  `

  const humidityCard = document.createElement('div')
  humidityCard.classList.add('miscData-card')
  humidityCard.innerHTML = `
  <p>Humidity</p>
  <div>
    <img src=${humidityIcon}>
    <span id='currentHumidity'></span>
  </div>
  `
  const uvCard = document.createElement('div')
  uvCard.classList.add('miscData-card')
  uvCard.innerHTML = `
  <p>UV index</p>
  <div>
    <img src=${sunnyIcon}>
    <span id='currentUv'></span>
  </div>
  `
  miscDataContainer.append(feelsLikeCard, windCard, humidityCard, uvCard)

  currentCard.append(cityDiv, icon, condition, date, temperature, miscDataContainer)

  return currentCard
}

function forecastCards(){
  const cards = []

  for(let i=0; i<3; i++){
    const card = document.createElement('div')
    card.classList.add('forecast-card')

    const day = document.createElement('p')
    day.classList.add('text-normal')

    const icon = document.createElement('img')
    icon.src = "#"

    const minMaxTemp = document.createElement('p')
    minMaxTemp.classList.add('text-small')
    minMaxTemp.innerHTML = `
    <span class='forecast-min temperature metric-system'></span> | <span class='forecast-max temperature metric-system'></span>
    `
    card.append(day, icon, minMaxTemp)

    cards.push(card)
  }

  return cards
}

export {
  init
}

