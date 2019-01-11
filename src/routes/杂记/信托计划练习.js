import React, { Fragment } from 'react';
import { Form, Table, Divider, Popconfirm, message } from 'antd';
import { SearchForm, SelectMap } from '../../components';
import { PLAN_STATUS } from '../../actions';
import { Link } from 'dva/router';
import { stringify } from 'qs';
import request from '../../utils/request';
import LoanSearchHeader from './components/LoanSearchHeader';

const FormItem = SearchForm.Item;
class LoanPlanList extends React.PureComponent {
  state = {
    data: {},
    searchValues:{},
    loading:false,
  };

  componentDidMount() {
    this.fetchList();
  };

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

  render() {
    const { loading, data } = this.state;
    const { total,limit,currPageNo } = this.state;
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
      <LoanSearchHeader/>
      <SearchForm
    callback={(values) => {this.fetchList({ ...values })}}
    extraNode={(props, colSpan) => (
    <Fragment>
    <SearchForm.Col span={colSpan}>
      <FormItem
    {...props}
    label="信托计划名称"
    fieldName="planName"
      />
      </SearchForm.Col>
      <SearchForm.Col span={colSpan}>
      <FormItem
    {...props}
    label="状态"
    fieldName="state"
      >
      <SelectMap data={PLAN_STATUS} />
    </FormItem>
    </SearchForm.Col>
    </Fragment>
  )}
    />
    <Table
    bordered
    loading={loading}
    rowKey={recode => recode.planNo}
    columns={columns}
    dataSource={data.datas || []}
    pagination={{
      total: total,
        pageSize: 1,
        current: currPageNo,
        onChange: this.handlePagination,
    }}
    />
    </Fragment>
  );
  }
}

export default Form.create()(LoanPlanList);




import React, { Component ,Fragment }from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
} from 'antd';
import { SearchForm,SelectMap } from '../../../components';
import { PLAN_STATUS } from '../../../actions';

// const colSpan = 6;
const FormItem = SearchForm.Item;

class LoanSearchHeader extends Component{

  // handleSearch = (e) => {
  //   e.preventDefault();
  //   const { form, callback = () => {} } = this.props;
  //   const { form: { validateFields } } = this.props;
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       dispatch({
  //         type: 'planManage/queryPlanData',
  //         payload: values,
  //       });
  //     }
  //   })
  // }


  render(){
    const { form } = this.props;
    const formProps = {
      required: false,
      form,
    }
    return (
      <Fragment>
      <Form layout="inline" onSubmit={this.handleSearch} >
      <Row>
      <Col span={7}>
      <Form.Item
    {...formProps}
    label="信托计划名称"
    fieldName="planName"
      >
      <Input style={{ width: 220 }} />
    </Form.Item>
    </Col>
    <Col span={6}>
      <Form.Item
    {...formProps}
    label="状态"
    fieldName="state"
      >
      <SelectMap data={PLAN_STATUS}  style={{ width: 220 }} />
    {/* <Select style={{ width: 200 }} >
                  <Option value="创建中">创建中</Option>
                </Select> */}
  </Form.Item>
    </Col>
    <Col>
    <Form.Item>
    <Button htmlType="submit" >查询</Button>
      </Form.Item>
      </Col>
      </Row>
      </Form>
      </Fragment>
  );
  }

}
export default Form.create()(LoanSearchHeader);
