import { useSelector } from 'react-redux';
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import useGetMonth from 'src/hooks/useGetMonth';

// const data = [
//   { month: 'Jan', sales: 35 },
//   { month: 'Feb', sales: 28 },
//   { month: 'Mar', sales: 34 },
//   { month: 'Apr', sales: 32 },
//   { month: 'May', sales: 40 },
//   { month: 'Jun', sales: 32 },
//   { month: 'Jul', sales: 35 },
//   { month: 'Aug', sales: 55 },
//   { month: 'Sep', sales: 38 },
//   { month: 'Oct', sales: 30 },
//   { month: 'Nov', sales: 25 },
//   { month: 'Dec', sales: 32 }
// ];

const tooltip = { enable: true, shared: false }
const primaryyAxis = { labelFormat: 'R$ {value}' }
const primarxyAxis = { valueType: 'Category' }
const legendSettings = { visible: true }
const marker = { dataLabel: { visible: true } };

const SalesHistory = () => {
  const { merged } = useSelector((state) => state.dashboard.orders);
  const getMonth = useGetMonth();
  const ordersWithProduct = merged ? [...merged] : [];

  const months = [
    ...new Set(ordersWithProduct
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .map((order) => getMonth(order.date))
    ),
  ];

  const sales = months.map((month) => ordersWithProduct
    .filter((order) => getMonth(order.date) === month)
    .map((order) => order.amount)
    .reduce((acc, curr) => acc + curr, 0)
  );

  const data = months.map((month, i) => ({ month, sales: sales[i] })).slice(-12);

  // console.log(data);

  return (
    <div>
      {data.length > 0 ? (
        <ChartComponent
          id="charts"
          primaryXAxis={primarxyAxis}
          legendSettings={legendSettings}
          primaryYAxis={primaryyAxis}
          tooltip={tooltip}
        >
          <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName='month'
              yName='sales'
              name='Vendas'
              marker={marker}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      ) : <span>Carregando...</span>}
    </div>
  );

};

export default SalesHistory;