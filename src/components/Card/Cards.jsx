import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.scss';

const Cards = () => {

  const { today: todayOrders } = useSelector((state) => state.dashboard.orders);
  const { today, total} = useSelector((state) => state.dashboard.sales);

  const count = todayOrders?.length || 0;

  return (
    <div className={styles.cards}>
      <Card title={'Pedidos'} subtitle={'Total de pedidos hoje:'} value={count} />
      <Card title={'Vendas'} subtitle={'Total de vendas hoje:'} value={today} />
      <Card title={'Acumulado'} subtitle={'Total de vendas:'} value={total} />
    </div>
  );
};

export default Cards;