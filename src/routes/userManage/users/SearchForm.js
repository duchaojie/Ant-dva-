import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Button, Row, Col } from 'antd';
import FormItem from '../../../components/FormItem';
import BaseSelect from '../../../components/BaseSelect';

class SearchForm extends Component {
  // 机构查询
  handleSearch = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;

    form.validateFields((err, values) => {
      const { searchUserName, searchPhone, searchAccount, roleCode } = values;
      dispatch({
        type: 'userManage_list/FETCH_USER_LIST',
        payload: {
          paramsObj: {
            userName: searchUserName,
            phone: searchPhone,
            account: searchAccount,
            roleCode,
          },
          currPageNo: 1,
        },
      });
    });
  };

  render() {
    const { form, roleList } = this.props;
    const formProps = { form, required: false };

    return (
      <Form onSubmit={this.handleSearch} className="tableListForm">
        <Row>
          <Col span={5}>
            <FormItem
              {...formProps}
              label="姓名"
              fieldName="searchUserName"
              inputProps={{ placeholder: "请输入姓名" }}
            />
          </Col>
          <Col span={5}>
            <FormItem
              {...formProps}
              label="角色"
              fieldName="roleCode"
            >
              <BaseSelect
                data={roleList}
                dataFormat={{ key: 'value', value: 'label' }}
                placeholder="请选择角色"
              />
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem
              {...formProps}
              label="手机号"
              fieldName="searchPhone"
              inputProps={{ placeholder: "请输入手机号" }}
            />
          </Col>
          <Col span={5}>
            <FormItem
              {...formProps}
              label="账号"
              fieldName="searchAccount"
              inputProps={{ placeholder: "请输入账号" }}
            />
          </Col>
          <Button htmlType="submit">查询</Button>
        </Row>
      </Form>
    );
  }
}

export default connect(((state) => {
  const { roleList } = state.userManage_list;
  return { roleList };
}))(Form.create()(SearchForm));
