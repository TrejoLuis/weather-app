
const API_KEY = '1723de81b21140ddbac225948230304'
const BASE_URL = 'https://api.weatherapi.com/v1/'

const CURRENT_API = `${BASE_URL}current.json?key=${API_KEY}&q=`
const FORECAST_API = `${BASE_URL}forecast.json?key=${API_KEY}&days=3&q=`

//Manage both current and forecast endpoints
async function weatherFetch(location, isCurrent){
  try {
    const response = isCurrent ? await fetch(CURRENT_API+location) : await fetch(FORECAST_API+location)
    if(response.status == 200) {
      return await response.json()
    } else {
      throw new Error (`Http error: ${response.status}`)
    }
  } catch(err){
    console.error(err)
  }
}

export {
  weatherFetch
}
