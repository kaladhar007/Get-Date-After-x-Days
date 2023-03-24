const addDays = require("date-fns/addDays");
const defaultDate = new Date(2020, 7, 22);
const formattedDate = (days) => {
  const finalDate = addDays(defaultDate, days);
  return `${finalDate.getDate()}-${
    finalDate.getMonth() + 1
  }-${finalDate.getFullYear()}`;
};
module.exports = formattedDate;
console.log(formattedDate(3));
