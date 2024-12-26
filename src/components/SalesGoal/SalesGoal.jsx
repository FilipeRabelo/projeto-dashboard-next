import { useSelector } from 'react-redux';
import styles from './SalesGoal.module.scss';
import useFormatPrice from 'src/hooks/useFormatPrice';
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
  RangesDirective,
  RangeDirective,
} from '@syncfusion/ej2-react-circulargauge';

const SalesGoal = () => {

  const { today } = useSelector(state => state.dashboard.sales);
  const { salesGoal } = useSelector(state => state.ui);

  const todaySales = useFormatPrice(today);
  const formartSalesGoal = useFormatPrice(salesGoal);

  const percentage = (today / salesGoal) * 100;

  return (
    <div className={styles.salesGoal}>
      <h3>Meta de vendas diárias</h3>

      <div className={styles.chart}>    {/* div para o gráfico */}
        
        {today !== null ? (
          <CircularGaugeComponent id='salesGoal' height='250'>
            <AxesDirective>
              <AxisDirective>
                <PointersDirective>
                  <PointerDirective value={percentage}></PointerDirective>
                </PointersDirective>
                <RangesDirective>
                  <RangeDirective start={80} end={100}></RangeDirective>
                </RangesDirective>
              </AxisDirective>
            </AxesDirective>
          </CircularGaugeComponent>
        ) : <span>Carregando</span>}
        
      </div>

      <h4>{todaySales} / {formartSalesGoal}</h4>
    </div >
  );
};

export default SalesGoal;