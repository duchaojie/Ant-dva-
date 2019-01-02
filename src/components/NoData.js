import React from 'react';
import noData from '../assets/noData.png';

export default function NoData(props) {
  const {
    style,
    text = '暂无数据',
  } = props;
  const getStyle = {
    ...style,
    textAlign: 'center',
  };
  return (
    <div style={getStyle}>
      <img width="150px" height="150px" src={noData} alt="暂无数据" />
      <div style={{ marginTop: 10 }}>{text}</div>
    </div>
  );
}
