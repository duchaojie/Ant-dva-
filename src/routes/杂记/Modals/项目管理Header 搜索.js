import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  DatePicker,
} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const colSpan = 8;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};

class ProjectSearchForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values: ', values);
      }
      // this.props.handleChang(values);
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { form } = this.props;
    const formProps = {
      required: false,
      form,
    }

    const span = 8;
    return (
      <Form
        onSubmit={this.handleSubmit}
        s
        layout="inline"
      >
        <Row type='flex'>
          <Col span={span} order={3}>
            <FormItem
              {...formProps}
              label="机构名称"
              fieldName="institutionName"
            >
              {getFieldDecorator('institutionName', {
                rules: [{ message: '请填写机构名称' }],
              })(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3}>
            <FormItem
              {...formProps}
              label="项目名称"
              fieldName="projectName"
            >
              {getFieldDecorator('projectName', {
                rules: [{ message: '请填写项目名称' }],
              })(
                <Input />
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3}>
            <FormItem
              {...formProps}
              label="项目类型"
              fieldName="projectType"
            >
              {getFieldDecorator('projectType',{
                 rules: [{ message: '请填写项目类型' }],
              })(
                <Select style={{ width: '170px' }}>
                  <Option value='现金流测算'>现金流测算</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <Row type='flex'>
          <Col span={span} order={3}>
            <FormItem
              label="项目状态"
              {...formProps}
              fieldName="state"
            >
              {getFieldDecorator('state',{
                rules: [{ message: '请填写项目状态' }],
              })(
                <Select style={{ width: '170px' }}>
                  <Option value='待执行'>待执行</Option>
                  <Option value='执行中'>执行中</Option>
                  <Option value='已完成'>已完成</Option>
                  <Option value='已撤销'>已撤销</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3}>
            <FormItem
              {...formProps}
              label="创建时间"
              fieldName="setDate"
            >
              {getFieldDecorator('setDate')(
                <DatePicker />
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3}>
            <FormItem style={{ paddingLeft: '20' }}>
              <Button type="primary" htmlType="submit">查询</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default Form.create()(ProjectSearchForm);






// import Breadcrumb from 'components/Breadcrumb';

// export default function ProjectAdd() {
//   return (
//     <>
//       <Breadcrumb />
//       <div>添加</div>
//     </>
//   );
// }
