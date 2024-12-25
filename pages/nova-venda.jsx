// NOVA VENDAS

import AddSales from "src/components/AddSales/AddSales";
import Heading from "src/UI/Heading/Heading";

export default function NewSales() {
  return (
    <section>
      <Heading title={'Adicionar venda'} subtitle={'Adicione uma nova venda!'} />
      <div>  {/* form para venda */}
        <AddSales/>
      </div>
    </section>
  )
}