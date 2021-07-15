export function formatDate(input: string) {
  const date = parseDate(input)

  return Intl.DateTimeFormat().format(date)
}

function parseDate(input: string) {
  const [year, month, day] = input.split('-')

  return new Date(+year, +month - 1, +day)
}
