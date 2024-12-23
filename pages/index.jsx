import Heading from 'src/UI/Heading/Heading';
import Link from 'next/link';
import styles from '../styles/Dashboard.module.scss';
import Cards from 'src/components/Card/Cards';
import SalesHistory from 'src/components/SalesHistory/SalesHistory';
import SalesGoal from 'src/components/SalesGoal/SalesGoal';

export default function Home() {
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
          <SalesGoal />
        </section>
      </section>

    </section>
  );
}
