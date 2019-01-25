
// import Breadcrumb from 'components/Breadcrumb';

// export default function ProjectAdd() {
//   return (
//     <>
//       <Breadcrumb />
//       <div>添加</div>
//     </>
//   );
// }
import React from 'react';
import { Modal, Button, Form, Input, Row, Col, Select ,Icon} from 'antd';
// import UploadFile from 'components/UploadFile';

const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 17 },
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
    const span = 12;
    const { getFieldDecorator } = this.props.form;
    const { projrctName, projrctType, description ,associatedProducts,assetsSize} = this.props;
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
          width={750}
        >
          <Form>
            <Row gutter={24}>
              <Col span={span}>
                <FormItem {...formItemLayout} label='项目名称'>
                  {getFieldDecorator('projrctName', {
                    initialValue: projrctName,
                    rules: [{
                      required: true,
                      message: '请填写名称',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={span}>
                <FormItem {...formItemLayout} label='项目类型'>
                  {getFieldDecorator('projrctType', {
                    initialValue: projrctType,
                    rules: [{
                      required: true,
                      message: '请填写类型',
                    }],
                  })(
                    <Select>
                      <Option value='鉴真质检'>鉴真质检</Option>
                      <Option value='现金流分析'>现金流分析</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={span}>
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
              </Col>
              <Col span={span}>
                <FormItem {...formItemLayout} label='资产规模'>
                  {getFieldDecorator('assetsSize', {
                    initialValue: assetsSize,
                    rules: [{
                      required: false,
                      message: '请填写规模',
                    }],
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>

              <Col span={span}>
                <FormItem {...formItemLayout} label='资产文件'>
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col span={span}>
                <FormItem {...formItemLayout} label='备注'>
                  {getFieldDecorator('description', {
                    initialValue: description,
                  })(
                    <Input.TextArea maxLength={50} />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>

    );
  }
}
