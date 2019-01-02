// import React, { Fragment } from 'react';
// import { Link } from 'dva/router';
// import { Select, Table, Divider, Popconfirm } from 'antd';
// import PathButton from '../../../components/PathButton';
// import SearchForm, { FormItem, ColDom } from '../../../components/SearchForm';
// import Modal from './Modal';
// import { getStorage, storageModify, storageRemove } from '../../../utils';

// class List extends React.PureComponent {
//     state={
//         columns:[
//         {
//               title:'主数据编号',
//               dataIndex:'zsjbh',
//         },{
//             title:'名称',
//             dataIndex:'zsjmc',
//         },{
//             title:'生产线',
//             dataIndex:'scx',
//         },{
//             title:'厂区',
//             dataIndex:'cq',
//         },{
//             title:'类型',
//             dataIndex:'lx',
//         },
//         {
//             title:'类别',
//             dataIndex:'lb',
//         },{
//             title:'组别',
//             dataIndex:'zb',
//         },{
//             title:'操作',
//             render:(_,recode) => (
//                 <React.Fragment>
//                 <Divider type ='vertical'/>
//                    <a onClick= {()=>this.Modify(recode)}>编辑</a>
//                 <Divider type='vertical'/>
//                 <Popconfirm title="confirm to delete?" onConfirm={()=>this.onRemove(record.zsjbh)}>
//                  <a>删除</a>
//                 </Popconfirm>
//                 </React.Fragment>
//             ),
//         },
//        ],
//        data:getStorage('master'),
//        active:{},
//     };
//     onSearch = values =>{
//         console.log(values);
//     };
//     onAdd = () => {
//         this.setState({ active:{} },()=>{
//             this.formRef.modalRef.show();
//         });
//     };
//     onRemove = zsjbh =>{
//         const list = storageRemove('master','zsjbh',zsjbh);
//         this.setState({ data: list});
//     };
//     onModify = recode => {
//         this.setState({ active: recode },()=>{
//             this.formRef.modalRef.show();  //formRef.modalRef?
//         });
//     };
//     modalCallback = values => {
//         const list = storageModify('master','zsjbh',zsjbh);
//         this.formRef.modalRef.hide();
//         this.setState({ data:list });
//     };

//     rebder() {
//         const { columns,data,active } = this.state;
//         return(
//             <React.Fragment>
//               <SearchForm
//                 colSpan={5}
//                 callback={this.onSearch}
//                 extraNode={(formProps, colSpan) => (
//                   <React.Fragment>
//                     <ColDom span={colSpan}>
//                       <FormItem
//                         {...formProps}
//                         label="编号"
//                         fieldName="a"
//                       />
//                     </ColDom>
//                     <ColDom span={colSpan}>
//                       <FormItem
//                         {...formProps}
//                         label="名称"
//                         fieldName="b"
//                       />
//                     </ColDom>
//                     <ColDom span={colSpan}>
//                       <FormItem
//                         {...formProps}
//                         label="部门"
//                         fieldName="c"
//                       >
//                         <Select>
//                           <Select.Option key="A">A部门</Select.Option>
//                         </Select>
//                       </FormItem>
//                     </ColDom>
//                     <ColDom span={colSpan}>
//                       <FormItem
//                         {...formProps}
//                         label="类型"
//                         fieldName="d"
//                       >
//                         <Select>
//                           <Select.Option key="A">A类型</Select.Option>
//                         </Select>
//                       </FormItem>
//                     </ColDom>
//                   </React.Fragment>
//                 )}
//               />
//               <PathButton name="新增主数据" onClick={this.onAdd} />
//               <Table
//                 bordered
//                 // loading={loading}
//                 rowKey="zsjbh"
//                 columns={columns}
//                 dataSource={data}
//                 pagination={false}
//               />
//               <Modal
//                 wrappedComponentRef={(r) => {this.formRef = r}}
//                 data={active}
//                 callback={this.modalCallback}
//               />
//             </React.Fragment>
//           );
//     }
// }
// export default List;


import React from 'react';
import { Link } from 'dva/router';
import { Select, Table, Divider, Popconfirm } from 'antd';
import PathButton from '../../../components/PathButton';
import SearchForm, { FormItem, ColDom } from '../../../components/SearchForm';
import Modal from './Modal';
import { getStorage, storageModify, storageRemove } from '../../../utils';

class List extends React.PureComponent {

  state = {
    columns: [
      {
        title: '主数据编号',
        dataIndex: 'zsjbh',
      }, {
        title: '名称',
        dataIndex: 'zsjmc',
      }, {
        title: '部门',
        dataIndex: 'bm',
      }, {
        title: '生产线',
        dataIndex: 'scx',
      }, {
        title: '厂区',
        dataIndex: 'cq',
        render: text => text ? text.join('、') : '',
      }, {
        title: '类型',
        dataIndex: 'lx',
      }, {
        title: '类别',
        dataIndex: 'lb',
      }, {
        title: '组别',
        dataIndex: 'zb',
      }, {
        title: '操作',
        render: (_, record) => (
          <React.Fragment>
            <Link to={`/masterData/list/detail?id=${record.zsjbh}`}>查看</Link>
            <Divider type="vertical" />
            <a onClick={() => this.onModify(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.zsjbh)}>
              <a>删除</a>
            </Popconfirm>
          </React.Fragment>
        ),
      },
    ],
    data: getStorage('master'),//   master  获取本地的数据 localStorage
    active: {},
  };
//查找
    onSearch = values => {
        console.log(values);
    };
//添加
    onAdd = () => {
        this.setState({ active: {} }, () => {
        this.formRef.modalRef.show();
        });
    };
//编辑
    onModify = record => {
        this.setState({ active: record }, () => {
        this.formRef.modalRef.show();
        });
    };
//删除
    onRemove = zsjbh => {
        const list = storageRemove('master', 'zsjbh', zsjbh);
        this.setState({ data: list });
    };

    modalCallback = values => {
        const list = storageModify('master', 'zsjbh', values);
        this.formRef.modalRef.hide();
        this.setState({ data: list });
    };

  render() {
    const { columns, data, active } = this.state;
//  搜索框的布局
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
                    <Select.Option key="A">市场部门</Select.Option>
                    <Select.Option key="B">销售部门</Select.Option>
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
                    <Select.Option key="A">职员</Select.Option>
                    <Select.Option key="B">主管</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
            </React.Fragment>
          )}
        />
        <PathButton name="新增主数据" onClick={this.onAdd} />
        {/* 增加数据的按钮  onAdd */}
        <Table
          bordered //是否展示外边框和列边框 默认 false
          // loading={loading}
          rowKey="zsjbh"  //每行的key 的取值
          columns={columns}  //表格列的配置描述
          dataSource={data}  //数据数组
          pagination={false} //分页器  false 不展示分页
        />
        <Modal
        // 经过 Model 的Form.create  之后要拿到 ref 使用 rc-form 提供的 wrappedComponentRef
          wrappedComponentRef={(r) => {this.formRef = r}}  //
          data={active}
          callback={this.modalCallback}  //modalCallback 方法
        />
      </React.Fragment>
    );
  }
}

export default List;

// formRef.modalRef  ?
