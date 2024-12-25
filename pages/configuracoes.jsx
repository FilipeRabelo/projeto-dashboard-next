import Heading from "src/UI/Heading/Heading";

export default function Configuration() {
  return (
    <section>
      <Heading title={'Configurações'} subtitle={'Defina as Configurações da aplicação'} />
      <form>

        <div>
          <label htmlFor="name" className="hidden">Nome da empresa</label>
          <input type="text" name="name" id="name" placeholder="Nome da empresa" />
        </div>

        <div>
          <label htmlFor="price" className="hidden">Meta de vendas</label>
          <input type="number" name="price" id="price" placeholder="Meta de vendas" />
        </div>

        <button className="btn btn-primary">
          Salvar
        </button>
      </form>
    </section>
  )
}