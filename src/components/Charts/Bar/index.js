
import React from 'react';
import {
  Chart,
  Tooltip,
  Geom,
  Axis,
  Legend,
} from 'bizcharts';
import { formatMoney } from '../../../utils/utils';
// import { DataView } from '@antv/data-set';
import styles from '../index.less';

export default class Bar extends React.Component {
  componentDidMount() {
    this.forceFitTime = setTimeout(() => {
      if (this.chart) {
        this.chart.forceFit();
      }
    }, 50);
  }
  componentWillUnmount() {
    clearTimeout(this.forceFitTime);
  }
  render() {
    const {
      height = 300,
      title,
      data,
      legend = true,
      // fields,
      xKey = 'x',
      yKey = 'y',
      unit = '',
      color = 'rgba(24, 144, 255, 0.85)',
      padding,
      legnedPosition = 'bottom',
      customTooltip,
      isFormat,
    } = this.props;
    const scale = {
      [xKey]: {
        type: 'cat',
      },
      y: {
        min: 0,
      },
    };

    // let transData = data;
    // if (fields) {
    //   const dv = new DataView();
    //   dv.source(data).transform({
    //     type: 'fold',
    //     fields: fields, // 展开字段集
    //     key: xKey, // key字段
    //     value: yKey, // value字段
    //   });
    //   transData = dv;
    // }

    return (
      <div className={styles.chart} style={{ height }}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            data={data}
            padding={padding || 'auto'}
            onGetG2Instance={(chart) => {
              this.chart = chart;
            }}
            forceFit
          >
            <Axis
              name={xKey}
              title={false}
            />
            <Axis name={yKey} min={0} label={{ formatter: val =>  unit=== '元' ? `${formatMoney(val)}${unit}` : `${val}${unit}` }} />
            {legend && <Legend position={legnedPosition} />}
            <Tooltip
              crosshairs={{
                type: "y",
              }}
            />
            <Geom
              type="interval"
              position={`${xKey}*${yKey}`}
              tooltip={customTooltip && [`${xKey}*${yKey}`, (x, value) => {
                // 自定义 tooltip 上显示的 value 显示内容等。
                return {
                  name: `${title}`,
                  // value: `${value}${unit}`,
                  value: isFormat ? `${formatMoney(value)}${unit}` : `${value}${unit}`,
                };
              }]}
              color={color}
              adjust={[
                {
                  type: "dodge",
                  marginRatio: 1 / 32,
                },
              ]}
            />
          </Chart>
        </div>
      </div>
    );
  }
}
