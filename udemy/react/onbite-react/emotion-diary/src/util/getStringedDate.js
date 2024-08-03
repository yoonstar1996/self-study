export const getStringedDate = (targetDate) => {
  let year = String(targetDate.getFullYear());
  let month = String(targetDate.getMonth() + 1).padStart(2, "0");
  let date = String(targetDate.getDate()).padStart(2, "0");

  // if (month < 10) {
  //   month = `0${month}`;
  // }

  // if (date < 10) {
  //   date = `0${date}`;
  // }

  return `${year}-${month}-${date}`;
};
