/*
新增 / 投资结构
*/
import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Radio,
} from 'antd';
import { Link } from 'dva/router';


import { connect } from 'dva';
import BaseSelect from '../../components/BaseSelect';

import RateType from '../../components/RateType';

const { Option } = Select;
const colSpan = 8;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};

const FormItem = Form.Item;
@connect(({ activeManagement }) => ({
  statusList: activeManagement.statusList,
  orgList: activeManagement.orgList,
}))

@Form.create()

export default class Add extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'activeManagement/queryStatusList',
    })
    this.props.dispatch({
      type: 'activeManagement/queryOrgList',
    })

  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      };
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { orgList } = this.props;
    const item1 = '优先级利息>次优级利息>优先级本金>次优级本金>劣后级收益';
    const item2 = '优先级利息>优先级本金>次优级利息>次优级本金>劣后级收益';
    return (
      <>
        <Form
          onSubmit={this.handleSearch}
        >
          <Row>
            <Col span={colSpan} style={{ marginLeft: '9%' }}>
              <FormItem
                {...formItemLayout}
                label="机构名称"
                fieldName="orgName"
              >
                {getFieldDecorator('orgName')(
                  <BaseSelect data={orgList} dataFormat={{ key: 'code', value: 'fullName' }} allowClear />
                )}
              </FormItem>
            </Col>
            <Col span={3} />
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="产品名称"
                fieldName="productName"
              >
                {getFieldDecorator('productName')(
                  <Input maxLength={50} />
                )}
              </FormItem>
            </Col>

            <Col span={colSpan} style={{ marginLeft: '9%' }}>
              <FormItem
                {...formItemLayout}
                label="记息规则"
                fieldName="drawRules"
              >
                {getFieldDecorator('drawRules', {
                  // rules: [{ message: '请填写记息规则' }],
                })(
                  <Select placeholder="选择一个状态">
                    <Option value="ACT/360">ACT/360</Option>
                    <Option value="ACT/365">ACT/365</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={3} />
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="付息频率"
                fieldName="payRate"
              >
                {getFieldDecorator('payRate', {
                  // rules: [{ message: '请填写付息频率' }],
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
            <Col span={colSpan} style={{ marginLeft: '9%' }}>
              <FormItem
                {...formItemLayout}
                label="循环期数"
                fieldName="cycleNper"
              >
                {getFieldDecorator('cycleNper', {
                })(
                  <Input type='number' min={0} max={9999} />
                )}
              </FormItem>
            </Col>
            <Col span={3} />
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="摊还期数"
                fieldName="backNper"
              >
                {getFieldDecorator('backNper', {
                })(
                  <Input type='number' min={0} max={9999} />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={5} style={{ paddingLeft: '11%', marginTop: '1%' }}>
              <b>优先级</b>
            </Col>
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="本金规模"
              >
                {getFieldDecorator('bjgm')(
                  <Input min={0} addonAfter="万元" />
                )}
              </FormItem>
            </Col>
            <RateType form={this.props.form} />
          </Row>
          <Row>
            <Col span={5} style={{ paddingLeft: '11%', marginTop: '1%' }}>
              <b>次先级</b>
            </Col>
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="本金规模"
              >
                {getFieldDecorator('guimo')(
                  <Input addonAfter="万元" min={0} />
                )}
              </FormItem>
            </Col>
            <RateType form={this.props.form} />
          </Row>
          <Row>
            <Col span={5} style={{ paddingLeft: '11%', marginTop: '1%' }}>
              <b>劣后级</b>
            </Col>
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="本金规模"
              >
                {getFieldDecorator('guimo')(
                  <Input addonAfter="万元" />
                )}
              </FormItem>
            </Col>
            <Col span={colSpan}>
              <FormItem
                {...formItemLayout}
                label="利率类型"
              >
                <span>无票面利率</span>
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={5} style={{ paddingLeft: '11%', marginTop: '1%' }}>
              <b>分配方案:</b>
            </Col>
            <Col span={12} style={{ marginLeft: '20px' }}>
              <FormItem
                {...formItemLayout}
              >
                {getFieldDecorator('radio-group')(
                  <Radio.Group>
                    <div><Radio value="a">{item1}</Radio></div>
                    <div><Radio disabled value="b">{item2}</Radio></div>
                  </Radio.Group>
                )}

              </FormItem>
            </Col>
          </Row>
          <div style={{ textAlign: 'center' }}>
            <Link to='/product'>
              <Button type="primary" htmlType="submit" style={{ marginLeft: '5%' }}>取消</Button>
            </Link>
            <Button type="primary" htmlType="submit" style={{ marginLeft: '15%' }}>保存</Button>
          </div>
        </Form>
      </>
    );
  }
}
