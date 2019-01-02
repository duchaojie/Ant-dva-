import React from 'react';
import ModalBox from '../../components/ModalBox';
import { Row, Col, Form ,Select,Input } from 'antd';
import FormItem from '../../components/FormItem';
import { genNonDuplicateID } from '../../utils';

const colSpan = 12;
class ModalCreate extends React.PureComponent {
  state = {};
  componentDidMount() {}
  handleOk = () => {
    const { form, callback = () => {} } = this.props;
// validateFields 校验 并获取一组输入区域的值 与 error  若filedName 参数为空 则校验全部的组件
    form.validateFields((err, values) => {
      if (!err) {
        callback(values);
      }
    });
  };

  render() {
    const { form, data } = this.props;
    const formProps = { form, cols: [8], required: false };

    return(
      <ModalBox
    ref={(r) => {this.modalRef = r}}
    title="新增"
    width={750}
    handleOk={this.handleOk}
      >
      <FormItem
    {...formProps}
    className="hidden"
    label="账户编号"
    fieldName="accountNumber"
    initialValue={data.accountNumber || `RM_${genNonDuplicateID()}`}
    />
    <Row>
    <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="账户性质"
    fieldName="accountProperty"
    initialValue={data.accountProperty}
      >
      <Select style={{ width: '100%' }}>
  <Select.Option key="放款">放款</Select.Option>
      <Select.Option key="还款">还款</Select.Option>
      <Select.Option key="保证金">保证金</Select.Option>
      <Select.Option key="其他">其他</Select.Option>
      </Select>
      </FormItem>
      </Col>
      <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="账户类型"
    fieldName="accountType"
    initialValue={data.accountType}
      >
      <Select style={{ width: '100%' }}>
  <Select.Option key="对公账户">对公账户</Select.Option>
      <Select.Option key="对私账户">对私账户</Select.Option>
      </Select>
      </FormItem>
      </Col>
      <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="名称"
    fieldName="accountName"
    initialValue={data.accountName}
    />
    </Col>
    <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="账号"
    fieldName="accountNo"
    initialValue={data.accountNo}
    />
    </Col>
    <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="账户机构"
    fieldName="openInsitution"
    initialValue={data.openInsitution}
      >
      <Select style={{ width: '100%' }}>
  <Select.Option key="A">A</Select.Option>
      <Select.Option key="B">B</Select.Option>
      <Select.Option key="C">C</Select.Option>
      </Select>
      </FormItem>
      </Col>
      <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="开户地"
    fieldName="accountAddress"
    initialValue={data.accountAddress}
    />
    </Col>
    <Col span={colSpan}>
      <FormItem
    {...formProps}
    label="开户行"
    fieldName="accountBank"
    initialValue={data.accountBank}
    />
    </Col>
    <Col span={colSpan}>
      <FormItem
         {...formProps}
        label="备注"
        fieldName="description"
        cols={[8]}
        initialValue={data.description}
      >
      <Input.TextArea />
      </FormItem>
      </Col>
      </Row>
      </ModalBox>
  );
  }
}

export default Form.create()(ModalCreate);
