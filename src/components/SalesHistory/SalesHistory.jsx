import { useSelector } from 'react-redux';
import {
  AxisModel, Category, ChartComponent, ColumnSeries, DataLabel, Inject,
  Legend, LegendSeriesModel, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';

const data = [
  { month: 'Jan', sales: 35 },
  { month: 'Feb', sales: 28 },
  { month: 'Mar', sales: 34 },
  { month: 'Apr', sales: 32 },
  { month: 'May', sales: 40 },
  { month: 'Jun', sales: 32 },
  { month: 'Jul', sales: 35 },
  { month: 'Aug', sales: 55 },
  { month: 'Sep', sales: 38 },
  { month: 'Oct', sales: 30 },
  { month: 'Nov', sales: 25 },
  { month: 'Dec', sales: 32 }
];

const tooltip = { enable: true, shared: false }
const primaryyAxis = { labelFormat: '${value}K' }
const primarxyAxis = { valueType: 'Category' }
const legendSettings = { visible: true }
const marker = { dataLabel: { visible: true } };

const SalesHistory = () => {

  const {merged} = useSelector((state) => state.dashboard.orders);

  const ordersWithProduct = merged? [...merged] : [];
  const months = ordersWithProduct.sort((a, b) => new Date(a.date) - new Date(b.date)); // ordem crescente

  return (
    <div>
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
    </div>
  );
};

export default SalesHistory;