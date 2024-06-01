function getDateAgo(date, days) {
  let date = new Date(date.getTime());
  date.setDate(date.getDate() - days);
  return date.getDate();
}
