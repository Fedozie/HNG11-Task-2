const utcTimeSelector = document.querySelector('#utcTime');
const weekdaySelector = document.querySelector('#weekday');


//Function to display the UTC Time
const displayUTCTime = () => {
  const nowDate = new Date();
  const utcTime = nowDate.toUTCString().split(' ')[4];
  utcTimeSelector.innerText = utcTime;
}

//Function to display the current day of the week
const displayCurrentWeekday = () => {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const nowDate = new Date();
  const utcDay = nowDate.getUTCDay()
  const currentWeekday = daysOfTheWeek[utcDay]
  weekdaySelector.innerText = currentWeekday;
}


displayUTCTime();
displayCurrentWeekday();