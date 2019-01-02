import React from 'react';
import { Cascader } from 'antd';
import List from '../config/list';

const province= List; //省市的数据；数组 ;
console.log(province);
function onChange(value) {
  console.log(value);
}

export default function Text(){
  return (
    <Cascader style={{width:'500px'}} options={province} onChange={onChange} placeholder="Please select" />
)
}







