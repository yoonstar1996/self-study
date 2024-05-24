function getElements() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.getHour();

  return {
    month: month >= 10 ? month : "0" + month,
    day: day >= 10 ? day : "0" + day,
    hour: hour >= 10 ? hour : "0" + hour,
  };
}

function getDateTime() {
  const currentDatTime = getDateTime(new Date());
  return {
    month: (currentDatTime.month = "분 전"),
    day: (currentDatTime.day = "분 전"),
    hour: (currentDatTime.hour = "분 전"),
  };
}

function genRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}
