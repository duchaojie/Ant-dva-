
import React from 'react';
import { Link } from 'dva/router';
import { Table, Divider, Popconfirm } from 'antd';
import PathButton from '../../components/PathButton';
import Modal from './Modal';
import { getStorage, storageModify, storageRemove } from '../../utils';  //本地存储

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
    return(
      <React.Fragment>
        <PathButton name="新增主数据" onClick={this.onAdd} />
        {/* 增加数据的按钮  onAdd */}
        <Table
          bordered //是否展示外边框和列边框 默认 false
          // loading={loading}
          rowKey="accountNumber"  //每行的key 的取值
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











// import React from 'react';
// import {Table, Button, Modal, Form, Input, Radio,} from 'antd';
//
//
//
// const dataSource = [
//
//   {
//     key: '1',
//     name: '定存',
//     age: '5年～10年',
//     address: '1%',
//     ctime:'2018-12-12',
//     change:'编辑'
//   },
//   {
//     key: '2',
//     name: '定存',
//     age: '5年～10年',
//     address: '1%',
//     ctime:'2018-12-12',
//     change:'编辑'
//   },
// {
//   key: '3',
//   name: '贷款',
//   age: '',
//   address: '',
//   ctime:'',
//   change:''
// }];
//
// const columns = [{
//       title: '类型',
//       dataIndex: 'name',
//       key: 'name',
// }, {
//       title: '期限',
//       dataIndex: 'age',
//       key: 'age',
// }, {
//       title: '利率',
//       dataIndex: 'address',
//       key: 'address',
// },{
//       title: '更新日期',
//       dataIndex: 'ctime',
//       key: 'ctime',
// },
// {
//   title: '操作',
//   dataIndex: 'change',
//   key: 'change',
// }
//
// ];
// const FormItem = Form.Item;
//
//  const CollectionCreateForm = Form.create()(
//   // eslint-disable-next-line
//  class extends React.Component {
//     render() {
//       const {
//         visible, onCancel, onCreate, form,
//       } = this.props;
//       const { getFieldDecorator } = form;
//       return (
//         <Modal
//           visible={visible}
//           title="新增基准利率"
//           okText="添加"
//           onCancel={onCancel}
//           onOk={onCreate}
//         >
//           <Form layout="vertical">
//             <FormItem label="类型">
//               {getFieldDecorator('title', {
//                 rules: [{ required: true, message: 'Please input the title of collection!' }],
//               })(
//                 <Input />
//               )}
//             </FormItem>
//             <FormItem label="期限">
//               {getFieldDecorator('description')(<Input type="textarea" />)}
//             </FormItem>
//             <FormItem label="利率">
//               {getFieldDecorator('description')(<Input type="textarea" />)}
//             </FormItem>
//           </Form>
//         </Modal>
//       );
//     }
//   }
// );
//
// class CollectionsPage extends React.Component {
//   state = {
//     visible: false,
//   };
//
//   showModal = () => {
//     this.setState({ visible: true });
//   }
//
//   handleCancel = () => {
//     this.setState({ visible: false });
//   }
//
//   handleCreate = () => {
//     const form = this.formRef.props.form;
//     form.validateFields((err, values) => {
//       if (err) {
//         return;
//       }
//
//       console.log('Received values of form: ', values);
//       form.resetFields();
//       this.setState({ visible: false });
//     });
//   }
//
//   saveFormRef = (formRef) => {
//     this.formRef = formRef;
//   }
//
//   render() {
//     return (
//       <div>
//         <Button type="primary" onClick={this.showModal}>新增</Button>
//         <CollectionCreateForm
//           wrappedComponentRef={this.saveFormRef}
//           visible={this.state.visible}
//           onCancel={this.handleCancel}
//           onCreate={this.handleCreate}
//         />
//       </div>
//     );
//   }
// }
//
//
// export default function Test() {
//
// 	return  <div>
//             <CollectionsPage />
//             <Table columns={columns} dataSource={dataSource} />
//           </div>
//
// }
//
//
//
//
//
//
//
