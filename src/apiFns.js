
const API_KEY = '1723de81b21140ddbac225948230304'
const BASE_URL = 'https://api.weatherapi.com/v1/'

const FORECAST_API = `${BASE_URL}forecast.json?key=${API_KEY}&days=3&q=`

async function weatherFetch(location){
  try {
    if(!location) return
    const response = await fetch(FORECAST_API+location)
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
