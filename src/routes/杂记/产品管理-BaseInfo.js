// // 基础信息
// import React from 'react';

// export default function BaseInfo() {
//   return <>基础信息页</>
// }


import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  DatePicker,
} from 'antd';

const Option = Select.Option;
const colSpan = 12;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormItem = Form.Item;

@Form.create()

export default class Add extends Component {
  componentDidMount() {
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values: ', values);
      }
      // this.props.handleChang(values);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
      >
        <Row>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="机构名称"
            >
              {getFieldDecorator('productName')(
                <Input maxLength={50} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="产品名称"
            >
              {getFieldDecorator('productName')(
                <Input maxLength={50} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="起算日"
            >
              {getFieldDecorator('startDate', {
                rules: [{ message: '请填写日期' }],
              })(
                <DatePicker style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="截止日"
            >
              {getFieldDecorator('enddate', {
                rules: [{ message: '请填写截止日' }],
              })(
                <DatePicker style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="付息频率"
              unit="%"
            >
              {getFieldDecorator('payRate', {
                rules: [{ message: '请填写付息频率' }],
              })(
                <Select placeholder="选择一个状态">
                  <Option value="月">月</Option>
                  <Option value="季度">季度</Option>
                  <Option value="半年">半年</Option>
                  <Option value="年">年</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="记息规则"
            >
              {getFieldDecorator('drawRules', {
                rules: [{ message: '请填写记息规则' }],
              })(
                <Select placeholder="选择一个状态">
                  <Option value="ACT/360">ACT/360</Option>
                  <Option value="ACT/360">ACT/365</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="首次偿付日"
            // 在起算日后 截止日前
            >
              {getFieldDecorator('payDate', {
                rules: [{ message: '请填写日期' }],
              })(
                <DatePicker style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="总期数"
            // 摊还期数+循环期数
            >
              {getFieldDecorator('allCount', {
              })(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="循环期数"
            >
              {getFieldDecorator('cycleNper', {
              })(
                <Input type='number' min={0} max={9999} />
              )}
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formItemLayout}
              label="摊还期数"
            >
              {getFieldDecorator('backNper', {
              })(
                <Input type='number' min={0} max={9999} />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row type='flex' style={{ marginTop: '5%',textAlign:'center'}}>
          <Col span={colSpan} order={2}>
            <Button type="primary" htmlType="submit" style={{ width: '20%' }}>取消</Button>
          </Col>

          <Col span={colSpan} order={2}>
            <Button type="primary" htmlType="submit" style={{ width: '20%' }}>保存</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
