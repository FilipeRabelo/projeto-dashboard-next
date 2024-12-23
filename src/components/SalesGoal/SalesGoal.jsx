import styles from './SalesGoal.module.scss';

const SalesGoal = () => {
  return(
    <div className={styles.salesGoal}>
      <h3>Meta de vendas diárias</h3>
      <div className={styles.chart}>    {/* div para o gráfico */ }

      </div>
      <h4>200 /1000</h4>
    </div>
  )
}

export default SalesGoal;