
import React from 'react';
import { Modal, Button, Form, Input, Icon, InputNumber } from 'antd';
// import UploadFile from 'components/UploadFile';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    sm: { span: 5 },
  },
  wrapperCol: {
    sm: { span: 14 },
  },
};


@Form.create()

export default class ProjectModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { institutionName, projrctName, description, associatedProducts, assetsSize } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <Icon type='plus' />新增项目
        </Button>
        <Modal
          title="新增用户"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        // width={750}
        >
          <Form>
            <FormItem {...formItemLayout} label='机构名称'>
              {getFieldDecorator('institutionName', {
                initialValue: institutionName,
              })(
                <Input />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='项目名称'>
              {getFieldDecorator('projrctName', {
                initialValue: projrctName,
                rules: [{
                  required: true,
                  message: '请填写项目名称',
                }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='关联产品'>
              {getFieldDecorator('associatedProducts', {
                initialValue: associatedProducts,
                rules: [{
                  required: false,
                  message: '请填写产品',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label='资产规模'>
              {getFieldDecorator('assetsSize', {
                initialValue: assetsSize,
                rules: [{
                  required: false,
                  message: '请填写规模',
                }],
              })(
                <InputNumber
                  initialValue={1000}
                  formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  style={{ width: '100%' }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label='资产文件'>
              <Input />
            </FormItem>
            <FormItem {...formItemLayout} label='备注'>
              {getFieldDecorator('description', {
                initialValue: description,
              })(
                <Input.TextArea maxLength={50} />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>

    );
  }
}
