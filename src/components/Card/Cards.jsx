import Card from './Card';
import styles from './Cards.module.scss';

const Cards = () => {
  return(
    <div className={styles.cards}>
      <Card title={'Pedidos'} subtitle={'Total de pedidos hoje:'} value={'20'} />
      <Card title={'Vendas'} subtitle={'Total de vendas hoje:'} value={'R$590'} />
      <Card title={'Acumulado'} subtitle={'Total de vendas:'} value={'R$2560'} />
    </div>
  )
}

export default Cards;