// 折线图组件
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


export default class Line extends React.Component {
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
      height=200, // 默认高
      padding,
      data,
      legend=true,
      // fields, // 展开字段集
      xKey='x',
      yKey='y',
      title='',
      customTooltip,
      shape = 'line', // 默认折线图
      unit = '',   // Y 轴的单位
      color = 'rgba(24, 144, 255, 0.85)',
    } = this.props;
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

    const cols = {
      [xKey]: {
        range: [0, 1],
      },
    };

    return (
      <Chart
        height={height}
        data={data}
        scale={cols}
        padding={padding ||'auto'}
        onGetG2Instance={(chart) => {
          this.chart = chart;
        }}
        forceFit
      >
        {legend && <Legend />}
        <Axis name={xKey} />
        <Axis name={yKey} label={{ formatter: val => unit=== '元' ? `${formatMoney(val)}${unit}` : `${val}${unit}` }} />
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom
          type="line"
          tooltip={customTooltip && [`${xKey}*${yKey}`, (_, value) => {
            return {
              // 自定义 tooltip 上显示的 value 显示内容等。
              name: `${title}`,
              value: `${value}${unit}`,
            };
          }]}
          position={`${xKey}*${yKey}`}
          size={2}
          color={color}
          shape={shape}
        />
        <Geom
          type="point"
          position={`${xKey}*${yKey}`}
          size={4}
          shape="circle"
          color={color}
          style={{ stroke: '#fff', lineWidth: 1 }}
        />
      </Chart>
    );
  }
}
