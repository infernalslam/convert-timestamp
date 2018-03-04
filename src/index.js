const diff = (timeStart, timeEnd) => {
  let difference = timeEnd - timeStart
  let daysDifference = getDays(difference)
  difference -= daysDifference * 1000 * 60 * 60 * 24
  let hoursDifference = getHours(difference)
  difference -= hoursDifference * 1000 * 60 * 60
  let minutesDifference = getMiutes(difference)
  difference -= minutesDifference * 1000 * 60
  let secondsDifference = getseconds(difference)
  return {
    days: daysDifference,
    hours: hoursDifference,
    minutes: minutesDifference,
    seconds: secondsDifference
  }
}

const getDays = (timestamp) => {
  return Math.floor(timestamp / 1000 / 60 / 60 / 24)
}
const getHours = (timestamp) => {
  return Math.floor(timestamp / 1000 / 60 / 60)
}
const getMiutes = (timestamp) => {
  return Math.floor(timestamp / 1000 / 60)
}
const getseconds = (timestamp) => {
  return Math.floor(timestamp / 1000)
}

module.exports = {
  diff,
  getDays,
  getHours,
  getMiutes,
  getseconds
}
