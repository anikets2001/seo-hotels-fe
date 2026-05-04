export const getDateStart = (date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export const addDays = (date, count) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + count);
  return nextDate;
};

export const isSameDate = (dateA, dateB) =>
  dateA &&
  dateB &&
  dateA.getDate() === dateB.getDate() &&
  dateA.getMonth() === dateB.getMonth() &&
  dateA.getFullYear() === dateB.getFullYear();

export const isDateBefore = (source, target) =>
  getDateStart(source).getTime() < getDateStart(target).getTime();

export const buildMonthMatrix = (viewDate) => {
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let index = 0; index < firstDay; index += 1) {
    cells.push(null);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length < 42) {
    cells.push(null);
  }

  return cells;
};

export const formatLabelDate = (date) =>
  date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    weekday: "short",
  });
