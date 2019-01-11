import React, { Fragment } from 'react';
import { Form, Input, Button, Select, Modal, InputNumber } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

class AddStudens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOk = this.handleOk.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }
  handleAdd() {
    this.setState({
      visible: true,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('接收的值：', values);
        this.setState({
          visible: false,
        })
        this.props.add(JSON.stringify(values));// 子组调用父组件的回调方法 向父组件传递值
        this.props.form.resetFields();// 清空提交的表单
        // 当值传递到父元素后，通过回调函数触发add()方法将参数values带到父元素
      }
    })
  }
  // 重置
  handleClear() {
    this.props.form.resetFields();
  }
  // 列表提交后就隐藏
  handleOk() {
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
        <Button type="primary" onClick={this.handleAdd}>添加用户</Button>
        <Modal title="新建用户" visible={this.state.visible} onCancel={this.handleOk} onOk={this.handleOk}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="key"
              hasFeedback
            >
              {getFieldDecorator('key', {
                rules: [{
                  required: true, message: '请输入序号',
                }],
              })(
                <Input placeholder="请输入序号" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="nid"
              hasFeedback
            >
              {getFieldDecorator('nid', {
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
                rules: [{
                  required: true, message: '请输入您的 name！',
                }],
              })(
                <Input placeholder="请输入您的用户名！" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="性别"
              hasFeedback
            >
              {getFieldDecorator('gender', {
                rules: [{
                  required: true, message: '请输入您的 gender！',
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
                rules: [{
                  required: true, message: '请选择您的 Age',
                }],
              })(
                <InputNumber placeholder="请输入年龄！" min={1} max={100} style={{ width: 275 }} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="就读学校"
              hasFeedback
            >
              {getFieldDecorator('schoolname', {
                rules: [{ required: true, message: '请输入您的就读学校' }],
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
                rules: [{ required: true, message: '请输入您的在校表现' }],
              })(
                <Input type="textarea" rows={3} placeholder="请输入您的在校表现!" />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout} style={{ padding: 10 }}>
              <Button type="primary" size="large" onClick={this.handleClear}>重置</Button>
              <Button type="primary" htmlType="submit" size="large">提交</Button>
            </FormItem>
          </Form>
        </Modal>
      </Fragment>
    )
  }
}
export default Form.create()(AddStudens);

