import Heading from "src/UI/Heading/Heading";
import GridChart from "src/components/GridChart/GridChart";

export default function Sales() {
  return (
    <section>
      <Heading title={'Configurações'} subtitle={'Aqui está o seu histórico de vendas'} />

      <GridChart />
    </section>
  )
}