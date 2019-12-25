import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import autoHeight from '../autoHeight';
import styles from '../index.less';
import { formatMoney } from '../../../utils/utils';

@autoHeight()
class MiniArea extends React.PureComponent {
  render() {
    const {
      height,
      data = [],
      forceFit = true,
      color = 'rgba(24, 144, 255, 0.2)',
      borderColor = '#1089ff',
      scale = {},
      xKey='x',
      yKey='y',
      unit='元',
      borderWidth = 2,
      line,
      xAxis,
      yAxis,
      animate = true,
      isFormat,
    } = this.props;

    const padding = [36, 5, 30, 5];

    const scaleProps = {
      x: {
        type: 'cat',
        range: [0, 1],
        ...scale.x,
      },
      y: {
        min: 0,
        ...scale.y,
      },
    };

    const tooltip = [
      `${xKey}*${yKey}`,
      (x, y) => ({
        name: x,
        value: isFormat ? `${formatMoney(y)}${unit}`: `${y}${unit}`,
      }),
    ];

    const chartHeight = height + 54;

    return (
      <div className={styles.miniChart} style={{ height }}>
        <div className={styles.chartContent}>
          {height > 0 && (
            <Chart
              animate={animate}
              scale={scaleProps}
              height={chartHeight}
              forceFit={forceFit}
              data={data}
              padding={padding}
            >
              <Axis
                key="axis-x"
                name={xKey}
                label={false}
                line={false}
                tickLine={false}
                grid={false}
                {...xAxis}
              />
              <Axis
                key="axis-y"
                name={yKey}
                label={false}
                line={false}
                tickLine={false}
                grid={false}
                {...yAxis}
              />
              <Tooltip showTitle={false} crosshairs={false} />
              <Geom
                type="area"
                position={`${xKey}*${yKey}`}
                color={color}
                tooltip={tooltip}
                shape="smooth"
                style={{
                  fillOpacity: 1,
                }}
              />
              {line ? (
                <Geom
                  type="line"
                  position={`${xKey}*${yKey}`}
                  shape="smooth"
                  color={borderColor}
                  size={borderWidth}
                  tooltip={false}
                />
              ) : (
                <span style={{ display: 'none' }} />
              )}
            </Chart>
          )}
        </div>
      </div>
    );
  }
}

export default MiniArea;
