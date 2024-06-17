export const format = (time: Date) => {
  return new Intl.DateTimeFormat('ru-RU').format(time)
}