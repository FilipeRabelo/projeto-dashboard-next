import HeatMap from "src/components/HeatMap/HeatMap";
import PieChart from "src/components/PieChart/PieChart";
import SalesHistory from "src/components/SalesHistory/SalesHistory";
import Heading from "src/UI/Heading/Heading";
import styles from 'styles/Relatorio.module.scss'

export default function Report() {
  return (
    <section className={styles.section}>
      <Heading title={'Relatório'} subtitle={'Esses são os seus relatórios de vendas'} />

      <SalesHistory />

      <div className={styles.charts}>
        <HeatMap />
        <PieChart />
      </div>
    </section>
  )
}