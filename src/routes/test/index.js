/**
 * 动态添加
 */
import React, { Component } from 'react'
import { Table, Tooltip, Icon, Popconfirm, Button } from 'antd';

export default class Tables extends Component {
  state = {
    loading: false,
    data: [{
      trialAmt: 1232313,
      trialTaxAmt: 12,
      current: 3000,
      key: '01',
    }, {
      trialAmt: 3847,
      trialTaxAmt: 490,
      current: 34000,
      key: '02',
    }],
  }

  inedx = 0;
  delete = (key) => {
    const { data } = this.state;
    const newData = data.filter(item => item.key !== key);
    this.setState({ data: newData });

  }
  newMember = () => {
    console.log('添加list');
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }))
    newData.push({
      key: `NEW_TEMP_ID_${this.index}`,
      trialAmt: 234,
      trialTaxAmt: 34,
      newMember: 6586,
    });
    this.index += 1; // ?
    this.setState({ data: newData });
    // this.props.change(newData); // ?
  }
  render() {
    const columns = [
      {
        title: (
          <span>
            当期应付金额(元)
            <Tooltip
              placement="top"
              title="不含税"
            >
              <Icon type="question-circle-o" style={{ color: '#1890ff', marginLeft: 4 }} />
            </Tooltip>
          </span>
        ),
        dataIndex: 'trialAmt',
        key: 'trialAmt',
        width: "30%",
      },
      {
        title: '应付增值税(元)',
        dataIndex: 'trialTaxAmt',
        key: 'trialTaxAmt',
        width: '30%',
      }, {
        title: '当前可用资金',
        dataIndex: 'current',
        key: 'current',
        width: '20%',
      },
      {
        title: '操作',
        key: 'action',
        width: '20%',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          return (
            <span>
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.delete(record.key)}>
                <Icon style={{ fontSize: 20, cursor: 'pointer' }} type="minus-circle-o" />
              </Popconfirm>
            </span>
          );
        },
      },
    ];
    return (
      <div>
        <Table
          rowKey='key'
          title={() => (
            <div>
              <Button type="primary" icon="plus" onClick={this.newMember}>新增Tablelsit</Button>
            </div>
          )}
          columns={columns}
          dataSource={this.state.data}
          pagination={false}
          bordered
        />
      </div>
    )
  }
}
