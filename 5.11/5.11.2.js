function getWeekDay(date) {
  let days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
