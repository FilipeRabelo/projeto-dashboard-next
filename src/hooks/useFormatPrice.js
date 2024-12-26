const useFormatPrice = (price = 0) => {

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export default useFormatPrice;