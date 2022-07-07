import {
  getDaysInMonth,
  startOfMonth,
  endOfMonth,
  format,
  eachDayOfInterval,
  getISODay,
  getDay,
  isMonday,
  getWeeksInMonth,
  subDays,
  previousMonday,
  differenceInDays,
  nextSunday,
  addDays,
  isSunday,
} from "date-fns";

export function getMouthData(date) {
  const result = [];
  const startMon = startOfMonth(date);
  const finishMon = endOfMonth(date);
  const countWeekInMonth = getWeeksInMonth(date);

  // + разделить массив на недели
  // arrayDays.splice(0, 7);
  // - разделить массив на недели

  //1. сколько дней существует в текущем месяце
  const countDayInMonth = getDaysInMonth(date);

  //2. заполнить массив данными
  const arrayDaysRange = eachDayOfInterval({ start: startMon, end: finishMon });

  //3.проверить, какой день был последним понедельником в предыдущем месяце
  const isMondayDay = previousMonday(startMon);

  //4. разница дней в предыдущем месяце
  const differenceDaysPrev = differenceInDays(startMon, isMondayDay);

  //5. последний день воскресения
  const isSundayDay = nextSunday(finishMon);

  //6. разница дней в слудующем месяце "МИНУС получаем"
  const differenceDaysNext = differenceInDays(isSundayDay, finishMon);

  //7.  добавить в начало массива дни
  let arrayAddPrevDays = [];
  if (!isMonday(startMon)) {
    const countDaysPrev = subDays(startMon, differenceDaysPrev);
    arrayAddPrevDays = eachDayOfInterval({
      start: countDaysPrev,
      end: subDays(startMon, 1),
    });
    // arrayAddPrevDays = arrayDaysPrev.concat(arrayDaysRange);
  }

  //8.  добавить в конец массива дни
  let arrayAddNextDays = [];
  if (!isSunday(finishMon)) {
    const countDaysNext = addDays(finishMon, differenceDaysNext);
    arrayAddNextDays = eachDayOfInterval({
      start: addDays(finishMon, 1),
      end: countDaysNext,
    });
    // arrayAddNextDays = arrayAddPrevDays.concat(arrayDaysNext);
  }

  const arrayDaysAll = [
    ...arrayAddPrevDays,
    ...arrayDaysRange,
    ...arrayAddNextDays,
  ];

  return arrayDaysAll;
}
