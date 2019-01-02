import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'antd';
import { connect } from 'dva';
import FormItem from '../../components/FormItem';

@Form.create()
@connect()
export default class SearchForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'roleManage/getRoleList',
          payload: {
            ...values,
            currPageNo: 1,
          },
        })
      }
    })
  }
  render() {
    const { form } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="tableListForm">
        <Row>
          <Col span={6}>
            <FormItem
              label="角色名称"
              fieldName="roleName"
              form={form}
              required={false}
              inputProps={{ placeholder: '请填写角色名称' }}
            />
          </Col>
          <Col span={6}>
            <Button htmlType="submit">查询</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}
