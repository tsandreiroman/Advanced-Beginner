export const charLoggerWithVar = () => {
  let log = [];

  for (var i = 1; i <= 3; i++) {
    log = [...log, () => i]
  }

  return log;
}

export const charLoggerWithLet = () => {
  let log = [];

  for (let i = 1; i <= 3; i++) {
    log = [...log, () => i]
  }

  return log;
}

export const timeLogger = (date) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
  logTime: function() { return `Today is ${this.day}.${this.month}.${this.year}`}
});

export default {
  charLoggerWithVar,
  charLoggerWithLet,
  timeLogger,
}
