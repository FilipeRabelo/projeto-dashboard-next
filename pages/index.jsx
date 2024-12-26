import Heading from 'src/UI/Heading/Heading';
import Link from 'next/link';
import styles from '../styles/Dashboard.module.scss';
import Cards from 'src/components/Card/Cards';
import SalesHistory from 'src/components/SalesHistory/SalesHistory';
import SalesGoal from 'src/components/SalesGoal/SalesGoal';
import TopSales from 'src/components/TopSales/TopSales';
import client from 'src/sanity';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createOrdersWithProduct, populateOrders, populateProducts, populateSales } from 'src/store/dashboard-slice';
import { setConfig } from 'src/store/ui-slice';

export default function Home({ orders, products, config }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateOrders(orders));
    dispatch(populateProducts(products));
    dispatch(setConfig(config));
    dispatch(createOrdersWithProduct());
    dispatch(populateSales());
  }, []);

  return (
    <section className={styles.dashboard}>

      <Heading
        title={'Olá 👋, Seja Bem-Vindo!'}
        subtitle={'Confira seus resultados de hoje.'}
      />

      <Link href={'/nova-venda'} className='btn btn-primary'>
        Nova Venda
      </Link>

      <section className={styles.column}>
        <section className={styles.column1}>
          <Cards />
          <SalesHistory />   {/* histórico de vendas dos últimos messes */}
        </section>

        <section className={styles.column2}>     {/* Metas de vendas e top produtos + vendidos*/}
          <SalesGoal /> {/* vendas */}
          <TopSales />  {/* produtos */}
        </section>
      </section>

    </section>
  );
}

// getStaticProps é renderizado antes de toda a pagina seja renderizada
// requisição dos 3 esquemas

export const getStaticProps = async () => {   // pega os dados do banco de dados e envia como props para o componente

  const orders = await client.fetch('*[_type == "orders"]'); // dando um fetch no db onde o type for = orders
  const products = await client.fetch('*[_type == "products"]'); // dando um fetch no db onde o type for = orders
  const config = await client.fetch('*[_type == "config"]'); // dando um fetch no db onde o type for = orders

  return {
    props: {
      orders,
      products,
      config
    }
  };

};