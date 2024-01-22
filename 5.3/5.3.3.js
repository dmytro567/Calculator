function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + "..."; //цей рядок піддивився бо не було повного пояснення роботи slice
  } else {
    return str;
  }
}
