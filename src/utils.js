const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"]

const getDay = (date) => weekdays[new Date(date).getUTCDay()]
const getMonth = (date) => months[new Date(date).getUTCMonth()]

const getFormatedDate = (date) => `${getDay(date)}, ${getMonth(date)} ${date.slice(8,10)}`

export {
  getDay,
  getFormatedDate
}
