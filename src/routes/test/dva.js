
import React, { Component, Fragment } from 'react';
import {
  Button,
} from 'antd';
// import BreadCrumb from 'components/BreadCrumb';
import AuthorizedComponent from 'components/AuthorizedComponent';
import UserListSearch from './components/UserListSearch';
import UserListTable from './components/UserListTable';
import AddUserModal from './components/AddUserModal';

export default class UserManage extends Component {
  state = {
    visiable: false,
  }
  onCancel = () => {
    this.setState({
      visiable: false,
    });
  }
  showModal = () => {
    this.setState({
      visiable: true,
    });
  }
  render() {
    const { visiable } = this.state;
    return (
      <Fragment>
        <Fragment >
          <UserListSearch />
          <AuthorizedComponent authorityCode="mgr_add">
            <Button type="primary" style={{ marginBottom: 25 }} onClick={this.showModal}>添加用户</Button>
          </AuthorizedComponent>
          <UserListTable showModal={this.showModal} />
        </Fragment>
        <AddUserModal
          visiable={visiable}
          onCancel={this.onCancel}
        />
      </Fragment>
    );
  }
}
