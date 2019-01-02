import React from 'react';
import {Table, Button, Modal, Form, Input, Radio,} from 'antd';



const dataSource = [
  
  {
    key: '1',
    name: '定存',
    age: '5年～10年',
    address: '1%',
    ctime:'2018-12-12',
    change:'编辑'
  }, 
  {
    key: '2',
    name: '定存',
    age: '5年～10年',
    address: '1%',
    ctime:'2018-12-12',
    change:'编辑'
  }, 
{
  key: '3',
  name: '贷款',
  age: '',
  address: '',
  ctime:'',
  change:''
}];

const columns = [{
      title: '类型',
      dataIndex: 'name',
      key: 'name',
}, {
      title: '期限',
      dataIndex: 'age',
      key: 'age',
}, {
      title: '利率',
      dataIndex: 'address',
      key: 'address',
},{
      title: '更新日期',
      dataIndex: 'ctime',
      key: 'ctime',
},
{
  title: '操作',
  dataIndex: 'change',
  key: 'change',
}

];
const FormItem = Form.Item;

 const CollectionCreateForm = Form.create()(
  // eslint-disable-next-line
 class extends React.Component {
    render() {
      const {
        visible, onCancel, onCreate, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="新增基准利率"
          okText="添加"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="类型">
              {getFieldDecorator('title', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="期限">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="利率">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>新增</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


export default function Test() {

	return  <div>
            <CollectionsPage />
            <Table columns={columns} dataSource={dataSource} /> 
          </div>

}




