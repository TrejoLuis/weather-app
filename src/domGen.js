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
  <button id="toggleDegreeBtn">°C / °F</button>
  <div class="search-div">
    <input type="text" id="searchCity">
    <button class="search-button">ICON</button>
  </div>
  `

  return header
}

 function main(){
  const main = document.createElement('main')

  const currentContainer = document.createElement('div')
  currentContainer.appendChild(currentWeather())

  const forecastHeader = document.createElement('h3')
  forecastHeader.textContent = '3 Day Forecast'

  const forecastContainer = document.createElement('div')
  forecastContainer.textContent = 'FORECAST CONTAINER'
  forecastContainer.id = 'forecastContainer'

  let cards = forecastCards()
  for(let i=0; i<3; i++){
    forecastContainer.appendChild(cards[i])
  }

  main.append(currentContainer, forecastHeader, forecastContainer)
  
  return main
}

function currentWeather(){
  const currentCard = document.createElement('div')

  const cityDiv = document.createElement('div')
  cityDiv.innerHTML = `<span id="currentCity"></span>, <span id="currentRegion"></span>`

  const icon = document.createElement('div')
  icon.textContent = 'ICON'

  const condition = document.createElement('p')
  condition.id = 'currentCondition'

  const temperature = document.createElement('p')
  temperature.id = 'currentTemperature'

  const miscDataContainer = document.createElement('div')
  miscDataContainer.classList.add('miscData-container')

  const feelsLikeCard = document.createElement('div')
  feelsLikeCard.classList.add('miscData-card')
  feelsLikeCard.innerHTML = `
  <p>Feels like</p>
  <div>
    <img src="#">
    <span id='currentFeelsLike'></span>
  </div>
  `
  const windCard = document.createElement('div')
  windCard.classList.add('miscData-card')
  windCard.innerHTML = `
  <p>Wind</p>
  <div>
    <img src="#">
    <span id='currentWind'></span> | <span id='currentWindDir'></span>
  </div>
  `

  const humidityCard = document.createElement('div')
  humidityCard.classList.add('miscData-card')
  humidityCard.innerHTML = `
  <p>Humidity</p>
  <div>
    <img src="#">
    <span id='currentHumidity'></span>
  </div>
  `
  const uvCard = document.createElement('div')
  uvCard.classList.add('miscData-card')
  uvCard.innerHTML = `
  <p>UV index</p>
  <div>
    <img src="#">
    <span id='currentUv'></span>
  </div>
  `
  miscDataContainer.append(feelsLikeCard, windCard, humidityCard, uvCard)

  currentCard.append(cityDiv, icon, condition, temperature, miscDataContainer)

  return currentCard
}

function forecastCards(){
  const cards = []

  for(let i=0; i<3; i++){
    const card = document.createElement('div')
    card.classList.add('forecast-card')

    const day = document.createElement('p')
    day.classList.add('forecast-day')

    const icon = document.createElement('img')
    icon.src = "#"

    const minMaxTemp = document.createElement('p')
    minMaxTemp.innerHTML = `
    <span class='forecast-min'></span> min | <span class='forecast-max'></span> max
    `

    card.append(day, icon, minMaxTemp)

    cards.push(card)
  }

  return cards
}

export {
  init
}

