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
};

@Form.create()
@connect((state) => {
  const { info } = state.global;
  return { info };
})

export default class PersonalInfo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { form, dispatch, info } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'user/changePersonalInfo',
          payload: {
            ...values,
            userCode: info.userCode,
          },
        }).then(() => {
          dispatch({
            // 重新拉取用户信息，因为获取用户管理的接口只会在应用初始化的时候调取一次，所以修改之后还需要调用一次
            type: 'global/INFO',
          });
        })
      }
    })
  }
  render() {
    const { form, info } = this.props;
    const formProps = {
      form,
      required: false,
    }
    const { userCode, deptName, roleName, userName, phone, email } = info;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              readOnly
              label="员工编号"
              initialValue={userCode}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              readOnly
              label="登录账号"
              initialValue={info.account}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              readOnly
              label="部门"
              initialValue={deptName}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              readOnly
              label="角色"
              initialValue={roleName}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="姓名"
              fieldName="userName"
              initialValue={userName}
              inputProps={{ placeholder: '请输入姓名' }}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="手机号"
              fieldName="phone"
              initialValue={phone}
              inputProps={{ placeholder: '请输入手机号' }}
              extraRules={{
                pattern: /^1[34578]\d{9}$/,
                message: '请填写正确格式的手机号',
              }}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="邮箱"
              fieldName="email"
              initialValue={email}
              inputProps={{ placeholder: '请输入邮箱' }}
              extraRules={{
                type: 'email',
                message: '请输入正确格式的邮箱',
              }}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
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
