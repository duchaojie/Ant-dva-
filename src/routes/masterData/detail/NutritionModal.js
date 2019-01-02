import React from 'react';
import { Form, Select } from 'antd';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';
import MoneyInput from '../../../components/MoneyInput';

class NutritionModal extends React.PureComponent {
  handleOk = () => {
    const { form, callback = () => {} } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        callback(values);
      }
    });
  };

  render() {
    const { form, data } = this.props;
    const { id, yycf, hl, dw } = data;
    const formProps = { form, cols: [8] };

    return(
      <ModalBox
        title="营养值修改"
        ref={(r) => {this.modalRef = r}}
        handleOk={this.handleOk}
      >
        <FormItem
          {...formProps}
          className="hidden"
          label="营养成分"
          fieldName="id"
          initialValue={id}
        />
        <FormItem
          {...formProps}
          label="营养成分"
          fieldName="yycf"
          initialValue={yycf}
          inputProps={{ disabled: true }}
        />
        <MoneyInput
          {...formProps}
          label="含量"
          fieldName="hl"
          initialValue={hl}
          unit=""
        />
        <FormItem
          {...formProps}
          label="单位"
          fieldName="dw"
          initialValue={dw}
        >
          <Select style={{ width: '100%' }}>
            <Select.Option key="g">g</Select.Option>
            <Select.Option key="mg">mg</Select.Option>
          </Select>
        </FormItem>
      </ModalBox>
    );
  }
}

export default Form.create()(NutritionModal);
