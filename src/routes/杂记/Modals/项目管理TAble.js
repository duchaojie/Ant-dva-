import React, { Fragment } from 'react';
import { Link } from 'dva/router';
import {
  Table,
  Divider,
  Popconfirm,
} from 'antd';

export default class ProjectTable extends React.Component {
  componentDidMount(){

  }
  render() {
    const dataSource = [
      {
        key: '1',
        institutionName: 'aaaa',
        projectName: 'aaaa',
        projectType: '1111',
        setDate: '23',
        state: '23',
      },
      {
        key: '2',
        institutionName: 'aaaa',
        projectName: 'aaaa',
        projectType: '1111',
        setDate: '23',
        state: '23',
      },
    ];
    const columns = [{
      title: '机构名称',
      dataIndex: 'institutionName',
    }, {
      title: '项目名称',
      dataIndex: 'projectName',
    }, {
      title: '项目类型',
      dataIndex: 'projectType',
    }, {
      title: '创建时间',
      dataIndex: 'setDate',
    }, {
      title: '状态',
      dataIndex: 'state',
    }, {
      title: '操作',
      width: 200,
      render: (_, record) => {
        return (
          <Fragment>
            <Link to={`/project/detail/${record.taskNo}`}>查看</Link>
            <Divider type="vertical" />
            {/* <a onClick={() => this.onModify(record)}>编辑</a> */}
            <Link to={`/project/detail/${record.taskNo}`}>编辑</Link>
            <Divider type="vertical" />
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.zsjbh)}>
              <a>删除</a>
            </Popconfirm>
          </Fragment>
        );
      },
    }];
    return (
      <Table
        columns={columns}
        rowKey={record => record.key}
        dataSource={dataSource}
      />
    );
  }

}
