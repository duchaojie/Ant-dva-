import React, { Component } from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import { connect } from 'dva';
import SearchForm from './SearchForm';
import RoleModal from './RoleModal';
import PathButton from '../../components/PathButton';
import { pagination, toast, isPerm } from '../../utils';

@connect((state) => {
  const{ roleListObj, authorList, roleDetail, searchRoleName } = state.roleManage;
  const { permissions } = state.global;
  return {
    permissions,
    roleListObj,
    authorList,
    roleDetail,
    searchRoleName,
    loading: state.loading.effects['roleManage/getRoleList'],
  }
})
export default class RoleList extends Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '角色名称',
      dataIndex: 'roleName',
    }, {
      title: '备注',
      dataIndex: 'description',
    }, {
      title: '操作',
      render: (value, records) => {
        return [
          <a key="1" onClick={this.handleEditOrDetail.bind(this, records, 'detail')}>查看</a>,
          <Divider type="vertical" key="2" />,
          <a key="3" onClick={this.handleEditOrDetail.bind(this, records, 'edit')}>编辑</a>,
          <Divider type="vertical" key="4" />,
          <Popconfirm key="5" title="确定删除该角色?" onConfirm={this.handleDelete.bind(this, records)}>
            <a>删除</a>
          </Popconfirm>,
        ];
      },
    }]
  }

  componentWillMount() {
    this.getRoleList(1);
  }
  getRoleList = (currPageNo) => {
    const { dispatch, searchRoleName } = this.props;
    dispatch({
      type: 'roleManage/getRoleList',
      payload: {
        currPageNo,
        roleName: searchRoleName,
      },
    })
  }
  handleEditOrDetail = async (records, type) => {
    // 使用async、await、处理获取数据异步的问题
    const { dispatch } = this.props;
    if (this.roleModal) {
      await dispatch({
        type: 'roleManage/getRoleDetail',
        payload: {
          roleCode: records.roleCode,
        },
      })
      this.roleModal.show(type);
    }
  }
  handleDelete = (records) => {
    const { dispatch, roleListObj } = this.props;
    dispatch({
      type: 'roleManage/deleteRole',
      payload: {
        roleCode: records.roleCode,
      },
    }).then((success) => {
      if (success) {
        toast('success', '删除成功');
        this.getRoleList(roleListObj.currPageNo);
      }
    })
  }
  handlePagination = (current) => {
    this.getRoleList(current);
  }
  handleAdd = () => {
    if (this.roleModal) {
      this.roleModal.show('add');
    }
  }
  render() {
    const { loading, roleListObj, authorList, dispatch, roleDetail, searchRoleName, permissions } = this.props;
    return (
      <React.Fragment>
        <SearchForm />
        {isPerm(permissions, 'role_add', <PathButton onClick={this.handleAdd.bind(this)} />)}
        <Table
          rowKey={record => record.roleCode}
          bordered
          columns={this.columns}
          dataSource={roleListObj.datas || []}
          loading={loading}
          pagination={pagination(roleListObj, this.handlePagination)}
        />
        <RoleModal
          // eslint-disable-next-line
          ref={r => this.roleModal = r}
          authorList={authorList}
          dispatch={dispatch}
          roleListObj={roleListObj}
          roleDetail={roleDetail}
          searchRoleName={searchRoleName}
          confirmLoading={loading}
        />
      </React.Fragment>
    )
  }
}
