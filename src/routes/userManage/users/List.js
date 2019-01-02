import React, { Component } from 'react';
import { Table, Popconfirm, Divider } from 'antd';
import { connect } from 'dva';
import PathButton from '../../../components/PathButton';
import UserModal from './Create';
import { pagination, toast } from '../../../utils';
import styles from './index.less';

class List extends Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'userName',
    }, {
      title: '角色',
      dataIndex: 'roleName',
    }, {
      title: '手机号',
      dataIndex: 'phone',
    }, {
      title: '邮箱',
      dataIndex: 'email',
    }, {
      title: '账号',
      dataIndex: 'account',
    }, {
      title: '备注',
      dataIndex: 'description',
    }, {
      title: '操作',
      render: (value, records) => {
        const startStatus = records.status === '1'; // ‘1’： 启用  ‘2’： 停用
        const text = startStatus ? '停用' : '启用';
        const stopClassName = startStatus && 'stopClass';
        const resePwdtText = <span >重置密码后默认的密码为111111，<br />您确定重置密码吗？</span>
        return (
          <React.Fragment>
            <a onClick={this.handleEdit.bind(this, records)}>编辑</a>
            {
              !startStatus && (
                <React.Fragment>
                  <Divider type="vertical" />
                  <Popconfirm title="确定删除该用户?" onConfirm={this.handleDelete.bind(this, records)}>
                    <a>删除</a>
                  </Popconfirm>
                </React.Fragment>
              )
            }
            <Divider type="vertical" />
            <Popconfirm title={`确定${text}该用户?`} onConfirm={this.stopOrStart.bind(this, records)}>
              <a className={styles[stopClassName]}>{text}</a>
            </Popconfirm>
            <Divider type="vertical" />
            <Popconfirm
              title={resePwdtText}
              onConfirm={this.handleResetPwd.bind(this, records)}
              arrowPointAtCenter
            >
              <a>重置密码</a>
            </Popconfirm>
          </React.Fragment>
        )
      },
    }];
  }
  componentWillMount() {
    this.getUserList(1);
  }
  getUserList = (current) => {
    const { dispatch, searchKeywords } = this.props;
    // 获取用户列表菜单
    dispatch({
      type: 'userManage_list/FETCH_USER_LIST',
      payload: {
        currPageNo: current,
        paramsObj: searchKeywords,
      },
    });
  }
  handleAdd = () => {
    if (this.userModal) {
      this.userModal.show('add');
    }
  };
  handleEdit = async (records) => {
    const { dispatch } = this.props;
    if (this.userModal) {
      // 处理异步数据的问题
      await dispatch({
        type: 'userManage_list/GET_USER_DETAIL',
        payload: {
          userCode: records.userCode,
        },
      })
      this.userModal.show('edit');
    }
  }
  handleDelete = (records) => {
    const { dispatch, data } = this.props;
    dispatch({
      type: 'userManage_list/DELETE_USER',
      payload: {
        userCode: records.userCode,
      },
    }).then((success) => {
      if (success) {
        toast('success', '删除成功');
        this.getUserList(data.currPageNo);
      }
    })
  }
  stopOrStart = (records) => {
    // 停用、启用用户
    const { dispatch, data } = this.props;
    const status = records.status === '1'; // 停用
    dispatch({
      type: 'userManage_list/STOP_OR_START',
      payload: {
        userCode: records.userCode,
        status,
      },
    }).then((success) => {
      if (success) {
        const tipInfo = status ? '停用成功' : '启用成功';
        toast('success', tipInfo);
        this.getUserList(data.currPageNo);
      }
    })
  }
  handleResetPwd = (records) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'userManage_list/RESET_PWD',
      payload: {
        userCode: records.userCode,
      },
    })
  }
  onPagingChange = currPageNo => {
    this.getUserList(currPageNo)
  };
  render() {
    const { data, dispatch, roleList, searchKeywords, userDetail, loading } = this.props;
    return (
      <React.Fragment>
        <PathButton onClick={this.handleAdd} />
        <Table
          bordered
          columns={this.columns}
          dataSource={data.datas || []}
          rowKey={record => record.userCode}
          pagination={pagination(data, this.onPagingChange)}
          loading={loading}
        />
        <UserModal
          ref={(r) => { this.userModal = r }}
          dispatch={dispatch}
          roleList={roleList}
          searchKeywords={searchKeywords}
          userDetail={userDetail}
          data={data}
          confirmLoading={loading}
        />
      </React.Fragment>
    );
  }
}

// 监听属性，建立组件和数据的映射关系
function mapStateToProps(state) {
  const { data, searchKeywords, roleList, userDetail } = state.userManage_list;
  return {
    data,
    searchKeywords,
    roleList,
    userDetail,
    loading: state.loading.effects['userManage_list/FETCH_USER_LIST'],
  };
}

export default connect(mapStateToProps)(List);
