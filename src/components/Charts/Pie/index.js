import React from 'react';
import { Chart, Tooltip, Geom, Coord } from 'bizcharts';
import { Divider } from 'antd';
import classNames from 'classnames';
import { DataView } from '@antv/data-set';

import styles from './index.less';

export default class Pie extends React.Component {
  state = {
    legendData: [],
  };
  getG2Instance = chart => {
    this.chart = chart;
    requestAnimationFrame(() => {
      this.getLegendData();
    });
  };

  // for custom lengend view
  getLegendData = () => {
    if (!this.chart) return;
    const geom = this.chart.getAllGeoms()[0]; // 获取所有的图形
    if (!geom) return;
    const items = geom.get('dataArray') || []; // 获取图形对应的

    const legendData = items.map(item => {
      /* eslint no-underscore-dangle:0 */
      const origin = item[0]._origin;
      origin.color = item[0].color;
      origin.checked = true;
      return origin;
    });

    this.setState({
      legendData,
    });
  };

  render() {
    const {
      valueFormat,
      subTitle,
      total,
      hasLegend = false,
      className,
      style,
      height,
      forceFit = true,
      percent,
      color,
      inner = 0.75,
      animate = true,
      colors,
      lineWidth = 1,
    } = this.props;

    const { legendData } = this.state;
    const pieClassName = classNames(styles.pie, className, {
      [styles.hasLegend]: !!hasLegend,
    });
    const {
      data: propsData,
      selected: propsSelected = true,
      tooltip: propsTooltip = true,
    } = this.props;

    let data = propsData || [];
    let selected = propsSelected;
    let tooltip = propsTooltip;

    const defaultColors = colors;
    data = data || [];
    selected = selected || true;
    tooltip = tooltip || true;
    let formatColor;

    const scale = {
      x: {
        type: 'cat',
        range: [0, 1],
      },
      y: {
        min: 0,
      },
    };

    if (percent || percent === 0) {
      selected = false;
      tooltip = false;
      formatColor = value => {
        if (value === '占比') {
          return color || 'rgba(24, 144, 255, 0.85)';
        }
        return '#F0F2F5';
      };

      data = [
        {
          x: '占比',
          y: parseFloat(percent),
        },
        {
          x: '反比',
          y: 100 - parseFloat(percent),
        },
      ];
    }

    const tooltipFormat = [
      'x*percent',
      (x, p) => ({
        name: x,
        value: `${(p * 100).toFixed(2)}%`,
      }),
    ];

    const padding = [12, 0, 12, 0];

    const dv = new DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'y',
      dimension: 'x',
      as: 'percent',
    });

    return (
      <div className={pieClassName} style={style}>
        <div className={styles.chart}>
          <Chart
            scale={scale}
            height={height}
            forceFit={forceFit}
            data={dv}
            padding={padding}
            animate={animate}
            onGetG2Instance={this.getG2Instance}
          >
            {!!tooltip && <Tooltip showTitle={false} />}
            <Coord type="theta" innerRadius={inner} />
            <Geom
              style={{ lineWidth, stroke: '#fff' }}
              tooltip={tooltip && tooltipFormat}
              type="intervalStack"
              position="percent"
              color={['x', percent || percent === 0 ? formatColor : defaultColors]}
              selected={selected}
            />
          </Chart>

          {(subTitle || total) && (
            <div className={styles.total}>
              {subTitle && <h4 className="pie-sub-title">{subTitle}</h4>}
              {/* eslint-disable-next-line */}
              {total && (
                <div className="pie-stat">{typeof total === 'function' ? total() : total}</div>
              )}
            </div>
          )}
        </div>

        {hasLegend && (
          <ul className={styles.legend}>
            {legendData.map((item, i) => (
              <li key={item.x} onClick={() => this.handleLegendClick(item, i)}>
                <span
                  className={styles.dot}
                  style={{
                    backgroundColor: !item.checked ? '#aaa' : item.color,
                  }}
                />
                <span className={styles.legendTitle}>{item.x}</span>
                <Divider type="vertical" />
                <span className={styles.percent}>
                  {`${(Number.isNaN(item.percent) ? 0 : item.percent * 100).toFixed(2)}%`}
                </span>
                <span className={styles.value}>{valueFormat ? valueFormat(item.y) : item.y}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
