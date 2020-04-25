const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
    case "saturday":
      return 8;
    case "tuesday":
    case "thursday":
      return 9;
    case "wednesday":
    case "friday":
      return 7;
    default:
      return 10;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = hours => hours * 7;

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(9);
  if (actualSleepHours === idealSleepHours) return 'You got the perfect amount of sleep!';
  else if (actualSleepHours > idealSleepHours) return 'You got more sleep than needed! Sleep hours: ' + (actualSleepHours - idealSleepHours);
  else if (actualSleepHours < idealSleepHours) return 'You should get more rest! Sleep hours: ' + (actualSleepHours - idealSleepHours);
};

console.log(calculateSleepDebt())
