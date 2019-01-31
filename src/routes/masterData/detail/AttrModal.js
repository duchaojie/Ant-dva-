import React from 'react';
import { Form, Select } from 'antd';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';

class AttrModal extends React.PureComponent {
  handleOk = () => {
    const { form, callback = () => { } } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        callback(values);
      }
    });
  }
  render() {
    const { form, data } = this.props;
    const formProps = { form, cols: [8] };

    return (
      <ModalBox
        title="属性信息修改"
        ref={(r) => { this.modalRef = r }}
        handleOk={this.handleOk}
      >
        <FormItem
          {...formProps}
          className="hidden"
          label="id"
          fieldName="id"
          initialValue={data.id}
        />
        <FormItem
          {...formProps}
          label="属性名称"
          fieldName="sxmc"
          initialValue={data.sxmc}
          inputProps={{ disabled: true }} // 禁止填写
        />
        <FormItem
          {...formProps}
          label="选项"
          fieldName="xx"
          initialValue={data.xx}
        >
          <Select style={{ width: '100%' }}>
            <Select.Option key="眼观">眼观</Select.Option>
            <Select.Option key="鼻嗅">鼻嗅</Select.Option>
            <Select.Option key="口尝">口尝</Select.Option>
          </Select>
        </FormItem>
        <FormItem
          {...formProps}
          label="指标要求"
          fieldName="zbyq"
          initialValue={data.zbyq}
        >
          <Select style={{ width: '100%' }}>
            <Select.Option key="高">高</Select.Option>
            <Select.Option key="中">中</Select.Option>
            <Select.Option key="低">低</Select.Option>
          </Select>
        </FormItem>
      </ModalBox>
    );
  }
}

export default Form.create()(AttrModal);
