const AddSales = () => {
  return (
    <form>
      <div>
        <label htmlFor="dropdown" className='hidden'>Produto</label> {/* Invisível - acessibilidade */}
        input
      </div>

      <div>
        <label htmlFor="quantity" className='hidden'>Quantidade</label> {/* Invisível - acessibilidade */}
        <input type="number" name='quantity' id='quantity' min={'0'} placeholder='Quantidade'/>
      </div>

      <button className={'btn btn-primary'}>Confirmar</button>
    </form>
  )
}

export default AddSales;