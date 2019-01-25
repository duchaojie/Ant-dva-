import React, { Component } from 'react';
import {
  Table, Badge, Menu, Dropdown, Icon,
} from 'antd';


export default class Fenxi extends Component {

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          Action 1
        </Menu.Item>
        <Menu.Item>
          Action 2
        </Menu.Item>
      </Menu>
    );
    const expandedRowRender = () => {
      // 被折叠的 表格标题
      const columns = [
        { title: '期次', dataIndex: 'date', key: 'date' },
        { title: '早偿率', dataIndex: 'name', key: 'name' },
        { title: '逾期率', key: 'state', render: () => <span><Badge status="success" />Finished</span> },
      ];
      const data = [];
      for (let i = 0; i < 3; ++i) {
        data.push({
          key: i,
          date: '2019期次',
          name: '20%',
        });
      }
      return (
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      );
    };

    // 主表格的title
    const columns = [
      { title: '结果类型', dataIndex: 'name', key: 'name' },
      { title: '占比', dataIndex: 'platform', key: 'platform' },
      { title: '年化利率%', dataIndex: 'version', key: 'version' },
      // { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      // { title: 'Creator', dataIndex: 'creator', key: 'creator' },
      // { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
      // { title: 'Action', key: 'operation', render: () => <a href="javascript;">Publish</a> },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      // 主表格的数据
      data.push({
        key: i,
        name: '等额本息',
        platform: '占比',
        version: '年化利率',
      });
    }

    return (
      <Table
        className="components-table-demo-nested"
        columns={columns}
        expandedRowRender={expandedRowRender}
        dataSource={data}
      />
    );
  }
}






















