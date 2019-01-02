import React, { Component } from 'react'
import { Select } from 'antd';

const Option = Select.Option;

export default class BaseSelect extends Component {
  render() {
    const { data = [], dataFormat = {}  } = this.props;
    return (
      <Select {...this.props}>
        {
          data.map(ele => {
            return <Option value={ele[dataFormat.key]}>{ele[dataFormat.value]}</Option>
          })
        }
      </Select>
    )
  }
}
