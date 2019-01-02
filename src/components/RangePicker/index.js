/*
* 业务需要的日期组件
* 功能：开始时间，结束时间等，结束时间可以选择长期
* API: {
  disabled: 是否可编辑，bool
  className: 自定义样式
  formItemLayout: 展示结构
  label: 表头提示文案，string
  format: 展示的日期格式，如 'YYYY-MM-DD'
  startValue: 开始时间默认值，必须和 format 格式一致
  endValue: 结束时间默认值，必须和 format 格式一致
  startTimeCallback(value): 开始时间选择后回调 value = format
  endTimeCallback(value): 结束时间选择后回调 value = format
}
* */

import React, { Component } from 'react';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
import styles from './index.less';

class RangePicker extends Component {
  constructor(props) {
    super(props);

    const { format = 'YYYY-MM-DD', startValue, endValue, cols = [] } = props;

    this.state = {
      format,
      endOpen: false,
      startValue: startValue ? moment(startValue, format) : null,
      endValue: endValue ? moment(endValue, format) : null,
      disabled: props.disabled,
      className: props.className,
      label: props.label || '',
      formItemLayout: props.formItemLayout || {
        labelCol: { sm: { span: cols[0] || 10 } },
        wrapperCol: { sm: { span: cols[1] || 14 } },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { format } = this.state;
    const { startValue, endValue } = nextProps;
    const s = this.state.startValue;
    const e = this.state.endValue;

    if (!s && !e && (startValue || endValue)) {
      this.setState({
        startValue: startValue ? moment(startValue, format) : null,
        endValue: endValue ? moment(endValue, format) : null,
      });
    }
  }

  onOpenChange = (open) => {
    this.setState({
      endOpen: open,
    });
  };

  onStartChange = (value) => {
    const { startTimeCallback } = this.props;
    const { format } = this.state;
    const startTime = value ? value.format(format) : null;

    // eslint-disable-next-line
    startTimeCallback ? startTimeCallback(startTime) : null;
    this.onChange('startValue', value);
  };

  onEndChange = (value) => {
    const { endTimeCallback } = this.props;
    const { format } = this.state;
    const endTime = value ? value.format(format) : null;

    // eslint-disable-next-line
    endTimeCallback ? endTimeCallback(endTime) : null;
    this.onChange('endValue', value);
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  // 结束时间选择长期后的回调
  handleLongTerm = () => {
    const { endTimeCallback } = this.props;
    const { format } = this.state;
    const time = '9999-12-30';

    this.setState({
      endOpen: false,
      endValue: moment(time, format),
    });
    // eslint-disable-next-line
    endTimeCallback ? endTimeCallback(time) : null;
  };

  disabledStartDate = (startValue) => {
    const { endValue } = this.state;
    if (!startValue || !endValue) {
      return false;
    }

    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue) => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  // 结束日期页脚自定义
  renderExtraFooter = () => {
    return <div onClick={this.handleLongTerm} className={styles.datePickerFooter}>长期</div>;
  };

  render() {
    const {
      startValue,
      endValue,
      endOpen,
      format,
      disabled,
      className,
      formItemLayout,
      label,
    } = this.state;

    return (
      <Form.Item
        {...formItemLayout}
        label={label}
        className={className}
      >
        <DatePicker
          format={format}
          className={styles.businessTime}
          placeholder="开始日期"
          showToday={false}
          disabledDate={this.disabledStartDate}
          onChange={this.onStartChange}
          value={startValue}
          disabled={disabled}
        />
        <span> ~ </span>
        <DatePicker
          format={format}
          className={styles.businessTime}
          placeholder="结束日期"
          renderExtraFooter={this.renderExtraFooter}
          showToday={false}
          onOpenChange={this.onOpenChange}
          disabledDate={this.disabledEndDate}
          onChange={this.onEndChange}
          open={endOpen}
          value={endValue}
          disabled={disabled}
        />
      </Form.Item>
    );
  }
}

export default RangePicker;
