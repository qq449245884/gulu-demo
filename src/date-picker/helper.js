export default {
  firstDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth (date) {
    let [year, month, day] = getYearMonthDate(date)
    return new Date(year, month + 1, 0)
  },
  getYearMonthDate,
  addMonth(date, n) {
    let [_1, month, _2] = getYearMonthDate(date)
    let newMonth = month + n
    let copy = new Date(date)
    copy.setMonth(newMonth)
    return copy
  },
  addYear(date, n) {
    let [year] = getYearMonthDate(date)
    let newYear = year + n
    let copy = new Date(date)
    copy.setFullYear(newYear)
    return copy
  }
}

function getYearMonthDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}