import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import 'hammerjs';

import { getAreaData, getDataYears, getPieData, getSeries } from '../data/metrics';

export default function Dashboard() {
  const chartContainer = React.useRef<HTMLDivElement>(null);

  const exportPDF = () => {
    let element = chartContainer.current || document.body;
    savePDF(element, {

    })
  }

  return (
    <>
      <div className="actions">
        <Button icon="file-pdf" onClick={exportPDF} primary={true}>Export as PDF</Button>
      </div>
      <div className="chart-container" ref={chartContainer}>
        <Chart style={{ height: 350 }}>
          <ChartTitle text="Revenue Attribution" />
          <ChartLegend position="top" orientation="horizontal" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={getDataYears()} startAngle={45} />
          </ChartCategoryAxis>
          <ChartSeries>
            {getSeries().map((item, idx) => (
              <ChartSeriesItem
                key={idx}
                type="column"
                tooltip={{
                  visible: true,
                }}
                data={item.data}
                name={item.name}
              />
            ))}
          </ChartSeries>
        </Chart>

        <Chart style={{ height: 350 }}>
          <ChartTitle text="New Sales" />
          <ChartLegend position="top" orientation="horizontal" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={getDataYears()} startAngle={45} />
          </ChartCategoryAxis>
          <ChartSeries>
            {getSeries().map((item, idx) => (
              <ChartSeriesItem
                key={idx}
                type="line"
                tooltip={{
                  visible: true,
                }}
                data={item.data}
                name={item.name}
              />
            ))}
          </ChartSeries>
        </Chart>


        <Chart style={{ height: 350 }}>
          <ChartTitle text="Renewal Sales" />
          <ChartLegend position="top" orientation="horizontal" />
          <ChartCategoryAxis>
            <ChartCategoryAxisItem categories={getDataYears()} startAngle={45} />
          </ChartCategoryAxis>
          <ChartSeries>
            {getAreaData().map((item, idx) => (
              <ChartSeriesItem
                key={idx}
                type="area"
                tooltip={{
                  visible: true,
                }}
                data={item.data}
                name={item.name}
              />
            ))}
          </ChartSeries>
        </Chart>

        <Chart style={{ height: 350 }}>
          <ChartTitle text="Profit Distribution" />
          <ChartLegend position="top" orientation="horizontal" />
          <ChartSeries>
            <ChartSeriesItem
              type="pie"
              overlay={{
                gradient: "sharpBevel",
              }}
              tooltip={{
                visible: true,
              }}
              data={getPieData()}
              categoryField="name"
              field="share"
            />
          </ChartSeries>
        </Chart>
      </div>
    </>
  )
}