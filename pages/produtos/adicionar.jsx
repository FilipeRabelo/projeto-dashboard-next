import Heading from "src/UI/Heading/Heading";

export default function AddProduct() {
  return (
    <section>
      <Heading title={'Adicionar produto'} subtitle={'Preencha os campos para adicionar um produto'} />
      <form>
        <div>
          <label htmlFor="name" className="hidden">Nome Produto</label>
          <input type="text" name="name" id="name" placeholder="None do produto" />
        </div>

        <div>
          <label htmlFor="price" className="hidden">Preço do Produto</label>
          <input type="number" name="price" id="price" placeholder="Preço do Produto" />
        </div>

        <div>
          <label htmlFor="image" className="hidden">Imagem do Produto</label>
          <input type="file" name="image" id="image" />
        </div>

        <button className="btn btn-primary">
          Adicionar Produto
        </button>
      </form>
    </section>
  )
}