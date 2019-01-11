import React, { Fragment } from 'react';
import { Form, Input, Button, Select, Modal } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmits = this.handleSubmits.bind(this);
    this.handleOk = this.handleOk.bind(this)
    this.handleOkOrCancel = this.handleOkOrCancel.bind(this);
  }
  handleAdd() {
    this.setState({
      visible: true,
    });
  }
  handleSubmits(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {

      if (!err) {
        console.log('up接收的值：', values);
        this.setState({
          visible: false,
        })
      }
      this.props.handleUpdata(JSON.stringify(values));
    })
  }

// 列表提交后就隐藏
  handleOk() {
    this.setState({
      visible: false,
    });
  }
  handleOkOrCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 8,
      },
    };
    return (
      <Fragment>
        <a onClick={this.handleAdd}>修改</a>
        <Modal title={this.props.pass.name} visible={this.state.visible} onCancel={this.handleOk} onOk={this.handleOk}>
          <Form onSubmit={this.handleSubmits}>
            <FormItem
              {...formItemLayout}
              label="key"
              hasFeedback
            >
              {getFieldDecorator('key', {
                initialValue: this.props.pass.key,
                rules: [{
                  required: true, message: '请输入序号',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="nid"
              hasFeedback
            >
              {getFieldDecorator('nid', {
                initialValue: this.props.pass.nid,
                rules: [{
                  required: true, message: '请输入key',
                }],
              })(
                <Input placeholder="请输入key" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="用户名"
              hasFeedback
            >
              {getFieldDecorator('name', {
                initialValue: this.props.pass.name,
                rules: [{
                  message: '请输入您的 name！',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="性别"
              hasFeedback
            >
              {getFieldDecorator('gender', {
                initialValue: this.props.pass.gender,
                rules: [{
                  message: '请输入您的 gender！',
                }],
              })(
                <Select placeholder="请选择您的性别">
                  <Option value="男">男</Option>
                  <Option value="女">女</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="年龄"
              hasFeedback
            >
              {getFieldDecorator('age', {
                initialValue: this.props.pass.age,
                rules: [{
                  message: '请选择您的 Age',
                }],
              })(
                <Input placeholder="请输入年龄！" type='number' min={1} max={100} style={{ width: 275 }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="就读学校"
              hasFeedback
            >
              {getFieldDecorator('schoolname', {
                initialValue: this.props.pass.schoolname,
                rules: [{ message: '请输入您的就读学校' }],
              })(
                <Input placeholder="请输入您的就读学校！" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="在校表现"
              hasFeedback
            >
              {getFieldDecorator('description', {
                initialValue: this.props.pass.description,
                rules: [{ message: '请输入您的在校表现' }],
              })(
                <Input type="textarea" rows={3} placeholder="请输入您的在校表现!" />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout} style={{ padding: 10 }}>
              <Button type="primary" htmlType="submit" size="large">提交</Button>
            </FormItem>
          </Form>
        </Modal>
      </Fragment>
    )
  }
}
export default Form.create()(Update);


