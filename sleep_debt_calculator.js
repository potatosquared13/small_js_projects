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

const getActualSleepHours = () => {

};
