export const formatCurrency = (val: string) => {
  if (!val) {
    return ''
  }
  return val.replace(/-?(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
