const formatting = function (timeArg) {
  const toReturn = timeArg.toString();

  const days = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th",
    11: "11th",
    12: "12th",
    13: "13th",
    14: "14th",
    15: "15th",
    16: "16th",
    17: "17th",
    18: "18h",
    19: "19th",
    20: "20th",
    21: "21st",
    22: "22nd",
    23: "23rd",
    24: "24th",
    25: "25th",
    26: "26th",
    27: "27th",
    28: "28th",
    29: "29th",
    30: "30th",
    31: "31st",
  };
  const timeStrArr = timeArg.toString().split(" ");

  let month = timeStrArr[1];
  let day = days[timeStrArr[2]];
  let year = timeStrArr[3];
  let hour = timeStrArr[4].split(":")[0];
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour >= 12 ? (hour -= 12) : hour;

  let minute = timeStrArr[4].split(":")[1];

  return `${month} ${day}, ${year} at ${hour}:${minute} ${ampm}`;
};

module.exports = formatting;
