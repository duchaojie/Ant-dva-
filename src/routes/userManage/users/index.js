import React from 'react';
import { connect } from 'dva';
import SearchForm from './SearchForm';
import List from './List';
import Create from './Create';

@connect()
export default class UserManage extends React.Component {
  
  componentWillMount() {
    // 获取角色的下拉菜单
    const { dispatch } = this.props;
    dispatch({
      type: 'userManage_list/GET_ROLE_LIST',
    })
  }
  
  render() {
    return (
      <React.Fragment>
        <SearchForm />
        <Create {...this.props} />
        <List />
      </React.Fragment>
    );
  }
}
