import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'antd';
import { connect } from 'dva';
import FormItem from '../../components/FormItem';

const colSpan = 15;
const btnFormItemLayout = {
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14, offset: 10 },
  },
}
@Form.create()
@connect()
export default class SecureSetting extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/changePwd',
          payload: values,
        }).then(() => {
          form.resetFields();
        });
      }
    })
  }
  // 校验密码
  validatePwd = (form, value, callback) => {
    const rePwd = form.getFieldValue('rePwd');
    if (value && rePwd) {
      form.validateFields(['rePwd'], { force: true });
    }
    callback();
  }
  validateConfirmPwd = (form, value, callback) => {
    if (value && value !== form.getFieldValue('newPwd')) {
      callback('输入的两个密码不一致');
    } else {
      callback();
    }
  }
  render() {
    const { form } = this.props;
    const formProps = {
      required: true,
      form,
    }
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="原始密码"
              fieldName="oldPwd"
              inputProps={{ placeholder: '请输入原始密码', type: "password" }}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="新密码"
              fieldName="newPwd"
              inputProps={{ placeholder: '请输入新密码', type: "password" }}
              validatorCallback={this.validatePwd.bind(this, form)}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="确认密码"
              fieldName="rePwd"
              inputProps={{ placeholder: '请输入确认密码', type: "password" }}
              validatorCallback={this.validateConfirmPwd.bind(this, form)}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              readOnly
              isChildren
              formItemLayout={btnFormItemLayout}
            >
              <Button htmlType="submit" type="primary">提交</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}
