
import React, { Fragment } from 'react';
import { Form, Table, Divider, Popconfirm, message } from 'antd';
import { Link } from 'dva/router';
import { stringify } from 'qs';
import request from '../../utils/request';
import LoanPlanSearchHeader from './components/LoanPlanSearchHeader';

class LoanPlanList extends React.PureComponent {
  state = {
    data: {},
    searchValues:{},
    loading:false,
  };

  componentDidMount() {
    this.fetchList()
  };
  handleChang = (value) => {
    this.fetchList(value);
  }
  onRemove = (recode) => {
    const { planName,planNo} = recode;
    request({
      that: this,
      url:`/plan/remove.json?planNo=${planNo}`,
      method: 'DELETE',
      onSuccess:()=> {
        const { searchValues } = this.state;
        message.success(`${planName} 已删除`);
        this.fetchList(searchValues);
      },
    })
  };

  fetchList = (params = {}) => {
    request({
      url: `/plan/page.json?${stringify(params)}`,
      onSuccess: (res) => {
        this.setState({
          data: res.dataObject || {},
          searchValues: params,
        });
      },
    });
  };
  changePage = (pageNO) => {
    this.setState({
      current: pageNO,
    }, () => {
      let params = this.state.params;
      params = {
        ...params,
        pageNum: this.state.current,
        pageSize: 2,
      }
      this.fetchList(params)
    })
  }
  render() {
    const { loading, data } = this.state;
    const { total, limit, currPageNo } = this.state;
    const columns = [
      {
        title: '信托计划名称',
        dataIndex: 'planName',
      }, {
        title: '本期规模',
        dataIndex: 'planScale',
      }, {
        title: '成立日',
        dataIndex: 'planStart',
      },{
        title: '到期终止日',
        dataIndex: 'planEnd',
      },{
        title: '状态',
        dataIndex: 'planState',
      },{
        title: '操作',
        render: (_, record) => {
          return (
            <Fragment>
              <Link to={`/planManage/list/detail?prodNo=${record.planNo}`}>查看</Link>
              <Divider type="vertical" />
              <Link to={`/planManage/list/relationProduct?planNo=${record.planNo}`}>编辑</Link>
              <Divider type="vertical" />
              <Popconfirm title="确定删除该信托计划吗?" onConfirm={() => this.onRemove(record)}>
                <a>删除</a>
              </Popconfirm>
            </Fragment>
          );
        },
      },
    ];
    return (
      <Fragment>
        <LoanPlanSearchHeader handleChang={value => this.handleChang(value)}  />
        <Table
          bordered
          loading={loading}
          rowKey={recode => recode.planNo}
          columns={columns}
          dataSource={data.datas || []}
          pagination={{
            total: total,
            pageSize: limit,
            current: currPageNo,
            onChange: this.changePage,
          }}
        />
      </Fragment>
    );
  }
}

export default Form.create()(LoanPlanList);
