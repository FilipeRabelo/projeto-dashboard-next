import styles from './TopSales.module.scss';

const TopSales = () => {
  return(
    <div className={styles.topSales}>
      <h3>Produtos mais vendidos</h3>
      <ul className={styles.content}>   {/* lista de produtos mais vendidos*/}

      </ul>
    </div>
  )
}

export default TopSales;