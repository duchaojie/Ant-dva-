import React, { Component } from 'react';
import { connect } from 'dva';
import RoleList from './List';

@connect()
export default class RoleManage extends Component {
  componentWillMount() {
    // 获取form表单中的权限配置
    const { dispatch } = this.props;
    dispatch({
      type: 'roleManage/getAuthor',
    })
  }
  render() {
    return <RoleList />;
  }
}
