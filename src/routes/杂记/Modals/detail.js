import React from 'react';
import { Steps,Form } from 'antd';


const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 14 },
  style: { margin: 0 },
};
const Step = Steps.Step;
const FormItem = Form.Item;

export default class ProjectDetail extends React.Component {
  render() {
    return (
      <>
        <Steps progressDot current={0}>
          <Step title="待执行" />
          <Step title="执行中" />
          <Step title="已完成" />
        </Steps>
        <FormItem
          {...formItemLayout}
          label="机构名称"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="项目名称"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="创建时间"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="关联产品"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="初始文件"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="备注"
        >
          <span className="ant-form-text">{}</span>
        </FormItem>

      </>
    );
  }
}
