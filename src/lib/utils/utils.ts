export const getDate = (date: string) => {
  const ourDate = new Date(date)

  const d = ourDate.getDate()
  const m = ourDate.getMonth() + 1
  const y = ourDate.getFullYear()

  return (`${d < 10 ? '0' : ''}${d}.${m < 10 ? '0' : ''}${m}.${y}`)
}
