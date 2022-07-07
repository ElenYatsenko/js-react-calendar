import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isMonday,
  subDays,
  previousMonday,
  differenceInDays,
  nextSunday,
  addDays,
  isSunday,
} from "date-fns";

export function getMouthData(date) {
  //1. получить границы текущего месяца
  const startMon = startOfMonth(date);
  const finishMon = endOfMonth(date);

  //2. заполнить массив данными
  const arrayDaysRange = eachDayOfInterval({ start: startMon, end: finishMon });

  //3.проверить, какой день был последним понедельником в предыдущем месяце
  const isMondayDay = previousMonday(startMon);

  //4. разница дней в предыдущем месяце
  const differenceDaysPrev = differenceInDays(startMon, isMondayDay);

  //5. последний день воскресения
  const isSundayDay = nextSunday(finishMon);

  //6. разница дней в слудующем месяце
  const differenceDaysNext = differenceInDays(isSundayDay, finishMon);

  //7.  добавить в начало массива дни
  let arrayAddPrevDays = [];
  if (!isMonday(startMon)) {
    const countDaysPrev = subDays(startMon, differenceDaysPrev);
    arrayAddPrevDays = eachDayOfInterval({
      start: countDaysPrev,
      end: subDays(startMon, 1),
    });
  }

  //8.  добавить в конец массива дни
  let arrayAddNextDays = [];
  if (!isSunday(finishMon)) {
    const countDaysNext = addDays(finishMon, differenceDaysNext);
    arrayAddNextDays = eachDayOfInterval({
      start: addDays(finishMon, 1),
      end: countDaysNext,
    });
  }

  const arrayDaysAll = [
    ...arrayAddPrevDays,
    ...arrayDaysRange,
    ...arrayAddNextDays,
  ];

  return arrayDaysAll;
}
