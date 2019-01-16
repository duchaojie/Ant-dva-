import React, { Fragment } from 'react';
import { Form, Table, Divider, Popconfirm, message } from 'antd';
import { SearchForm, SelectMap, ModalBox } from '../../components';
import { PLAN_STATUS } from '../../actions';
// import { pagination } from '../../utils';
import { Link } from 'dva/router';
import { stringify } from 'qs';
import request from '../../utils/request';

const FormItem = SearchForm.Item;
class LoanPlanList extends React.PureComponent {
  state = {
    data: {},
    searchValues: {},
    loading: false,
    active: {},
    columns: [
      {
        title: '信托计划名称',
        dataIndex: 'planName',
      }, {
        title: '本期规模',
        dataIndex: 'planScale',
      }, {
        title: '成立日',
        dataIndex: 'planStart',
      }, {
        title: '到期终止日',
        dataIndex: 'planEnd',
      }, {
        title: '状态',
        dataIndex: 'planState',
      }, {
        title: '操作',
        render: (_, record) => {
          return (
            <Fragment>
              {/* <a onClick={() => this.onActive(record)}>查看</a> */}
              <Link to={`/planManage/list/detail?prodNo=${record}`}>查看</Link>
              <Divider type="vertical" />
              <a onClick={() => this.onActive(record)}>编辑</a>
              <Divider type="vertical" />
              <Popconfirm title="确定删除该信托计划吗?" onConfirm={() => this.onRemove(record)}>
                <a>删除</a>
              </Popconfirm>
            </Fragment>
          );
        },
      },
    ],
  };

  componentDidMount() {
    this.fetchList();
  };
  onRemove = (recode) => {
    const { planName, planNo } = recode;
    request({
      that: this,
      url: `/plan/remove.json?planNo=${planNo}`,
      method: 'DELETE',
      onSuccess: () => {
        const { searchValues } = this.state;
        message.success(`${planName} 已删除`);
        this.fetchList(searchValues);
      },
    })
  };
  onActive = (record = {}) => {
    this.setState({ active: record }, () => {
      this.modalRef.show()
    });
  };
  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { searchValues, active } = this.state;
        // code 存在时为修改
        const isEdit = !!active.planNo;
        request({
          that: this,
          url: isEdit ? '/plan/page.json' : '/plan/page.json',
          method: isEdit ? 'PUT' : 'POST',
          body: values,
          onSuccess: () => {
            this.fetchList(isEdit ? searchValues : {});
            this.modalRef.hide();
          },
        });
      }
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'configManage/queryCredProdData',
          payload: values,
        });
      }
    })
  }
  handlePagination = (pageNo) => {
    this.fetchList(pageNo)
  };

  fetchList = (params = {}) => {
    request({
      url: `/plan/page.json?${stringify(params)}`,
      onSuccess: (res) => {
        console.log(res.dataObject);
        this.setState({
          data: res.dataObject || {},
          searchValues: params,
        });
      },
    });
  };

  render() {
    const { loading, columns, data } = this.state;
    const { form } = this.props;
    const formProps = { form, cols: [6] };
    const { total, limit, currPageNo } = this.state;

    return (
      <Fragment>
        <SearchForm
          callback={(values) => { this.fetchList({ ...values }) }}
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
        {/* <PathButton name="添加" onClick={this.onActive} /> */}
        <Table
          bordered
          loading={loading}
          rowKey="planNo"
          columns={columns}
          dataSource={data.datas || []}
          pagination={{
            total: total,
            pageSize: limit,
            current: currPageNo,
          }}
        // pagination={pagination(data, (currPageNo) => {
        //   const { searchValues } = this.state;
        //   this.fetchList({ ...searchValues, currPageNo });
        // })}
        />
        <ModalBox
          ref={(r) => { this.modalRef = r }}
          title=" 添加信托计划"
          handleOk={this.handleOk}
          confirmLoading={loading}
        >
          <FormItem
            {...formProps}
            label="信托计划名称"
            fieldName="planName"
            initialValue={data.planName}
            inputProps={{ disabled: data.planName }}

          />
          <FormItem
            {...formProps}
            label="本期规模"
            fieldName="planScale"
            initialValue={data.planScale}
          />
          <FormItem
            {...formProps}
            label="成立日"
            required={false}
            fieldName="planStart"
            initialValue={data.planStart}
          />
          <FormItem
            {...formProps}
            required={false}
            label="到期终止日"
            fieldName="planEnd"
            initialValue={data.planEnd}
          />
          <FormItem
            {...formProps}
            label="状态"
            fieldName="state"
            initialValue={data.state}
          >
            <SelectMap data={PLAN_STATUS} />
          </FormItem>
        </ModalBox>
      </Fragment>
    );
  }
}

export default Form.create()(LoanPlanList);




//
// <ModalBox
// ref={(r) => {this.modalRef = r}}
// title=" 添加信托计划"
// handleOk={this.handleOk}
// confirmLoading={loading}
//   >
//   <FormItem
// {...formProps}
// label="信托计划名称"
// fieldName="planName"
// initialValue={data.planName}
// inputProps={{ disabled: data.planName }}
//
// />
// <FormItem
// {...formProps}
// label="本期规模"
// fieldName="planScale"
// initialValue={data.planScale}
// />
// <FormItem
// {...formProps}
// label="成立日"
// required={false}
// fieldName="planStart"
// initialValue={data.planStart}
//   ><DatePicker />
//   </FormItem>
//   <FormItem
// {...formProps}
// required={false}
// label="到期终止日"
// fieldName="planEnd"
// initialValue={data.planEnd}
//   ><DatePicker />
//   </FormItem>
//   <FormItem
// {...formProps}
// label="状态"
// fieldName="state"
// initialValue={data.state}
//   ><SelectMap data={PLAN_STATUS} />
// </FormItem>
// </ModalBox>
