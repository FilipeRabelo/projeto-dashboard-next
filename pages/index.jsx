import Heading from 'src/UI/Heading/Heading';
import Link from 'next/link';
import styles from '../styles/Dashboard.module.scss';
import Cards from 'src/components/Card/Cards';

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

      <section className={styles.columns}>
        <section className={styles.columns1}>
          <Cards/>
        </section>
        
        <section className={styles.columns2}></section>
      </section>

    </section>
  );
}
