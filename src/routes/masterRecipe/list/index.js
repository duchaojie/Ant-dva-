
import React from 'react';
import { Link } from 'dva/router';
import { Select, Table, Divider, Popconfirm } from 'antd';
import PathButton from '../../../components/PathButton';
import SearchForm, { FormItem, ColDom } from '../../../components/SearchForm';
import Modal from './Modal';
import { storageModify, getStorage, storageRemove } from '../../../utils';

class List extends React.PureComponent{
  state = {
    columns:[
      {
        title:'配方编号',
        dataIndex:'pfbh',
      },
      {
        title:'配方名称',
        dataIndex:'pfmc',
      },
      {
        title:'种类名称',
        dataIndex:'zlmc',
      },
      {
        title:'项目id',
        dataIndex:'xmid',
      },
      {
        title:'产品线',
        dataIndex:'cpx',
      },{
        title:'类别',
        dataIndex:'lb',
      },{
        title:'操作',
        render:(_,record)=>(
          <React.Fragment>
            <Link to={`/masterRecipe/list/detail?id=${record.pfbh}`}>查看</Link>
            <Divider type="vertical" />  
            {/* 分割线 */}
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.pfbh)}>
              <a>删除</a>
            </Popconfirm>
          </React.Fragment>
        ),
      },
    ],
    data: getStorage('recipe'),
  };

  onSearch = values => {
    console.log(values);
  };

  onAdd = () => {
    this.formRef.modalRef.show();
  };
  onSubmit = values => {
    const list = storageModify('recipe', 'pfbh', values);
    this.setState({ data: list }, () => {
      this.formRef.modalRef.hide();
    });
  };
  onRemove = pfbh => {
    const list = storageRemove('recipe', 'pfbh', pfbh);
    this.setState({ data: list });      
  };
   render() {
     const { columns,data } = this.state;
     return(
      <React.Fragment>
        <SearchForm                          
          colSpan={5}
          callback={this.onSearch}
          extraNode={(formProps, colSpan) => (
            <React.Fragment>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="编号"
                  fieldName="a"
                />
              </ColDom>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="名称"
                  fieldName="b"
                />
              </ColDom>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="部门"
                  fieldName="c"
                >
                  <Select>
                    <Select.Option key="A">A部门</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="类型"
                  fieldName="d"
                >
                  <Select>
                    <Select.Option key="A">A类型</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
            </React.Fragment>
          )}
        />
        <PathButton name="新增配方" onClick={this.onAdd} />
        <Table
          bordered
          rowKey="pfbh"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <Modal
          wrappedComponentRef={(r) => {this.formRef = r}}
          callback={this.onSubmit}
        />
      </React.Fragment>
    );
   }
}

export default  List;



