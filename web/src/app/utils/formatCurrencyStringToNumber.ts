export function formatCurrencyStringToNumber(value: string) {
  return Number(value.replace(/\./g, '').replace(',', '.'));
}
