
import React from 'react';
import { Link } from 'dva/router';
import { Table, Divider, Popconfirm } from 'antd';
import PathButton from '../../components/PathButton';
import Modal from './Modal';
import { getStorage, storageModify, storageRemove } from '../../utils';
import Tables from './Table/index';


class List extends React.PureComponent {
  state = {
    columns: [
      {
        title: '账户编号',
        dataIndex: 'accountNumber',
      }, {
        title: '账户性质',
        dataIndex: 'accountProperty',
      }, {
        title: '名称',
        dataIndex: 'accountName',
      }, {
        title: '账户号',
        dataIndex: 'accountNo',
      }, {
        title: '开户行',
        dataIndex: 'accountBank',
      }, {
        title: '备注',
        dataIndex: 'description',
      }, {
        title: '操作',
        render: (_, record) => (
          <React.Fragment>
            <Link to={`/account/list/detail?id=${record.accountNumber}`}>查看</Link>
            <Divider type="vertical" />
            <a onClick={() => this.onModify(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.accountNumber)}>
              <a>删除</a>
            </Popconfirm>
          </React.Fragment>
        ),
      },
    ],
    data: getStorage('account'),//   master  获取本地的数据 localStorage
    active: {},
  };
  // 查找
  onSearch = values => {
    console.log(values);
  };
  // 添加
  onAdd = () => {
    this.setState({ active: {} }, () => {
      this.formRef.modalRef.show();
    });
  };
  // 编辑
  onModify = record => {
    this.setState({ active: record }, () => {
      this.formRef.modalRef.show();
    });
  };
  // 删除
  onRemove = accountNumber => {
    const list = storageRemove('account', 'accountNumber', accountNumber);
    this.setState({ data: list });
  };

  modalCallback = values => {
    const list = storageModify('account', 'accountNumber', values);
    this.formRef.modalRef.hide();
    this.setState({ data: list });
  };

  render() {
    const { columns, data, active } = this.state;
    //  搜索框的布局
    return (
      <React.Fragment>
        {/* <PathButton name="新增主数据" onClick={this.onAdd} /> */}
        {/* 增加数据的按钮  onAdd */}
        {/* <Table
          bordered // 是否展示外边框和列边框 默认 false
          // loading={loading}
          rowKey="accountNumber"  // 每行的key 的取值
          columns={columns}  // 表格列的配置描述
          dataSource={data}  // 数据数组
          pagination={false} // 分页器  false 不展示分页
        />
        <Modal
        // 经过 Model 的Form.create  之后要拿到 ref 使用 rc-form 提供的 wrappedComponentRef
          wrappedComponentRef={(r) => {this.formRef = r}}  //
          data={active}
          callback={this.modalCallback}  // modalCallback 方法
        /> */}
        <Tables />
      </React.Fragment>
    );
  }
}

export default List;









