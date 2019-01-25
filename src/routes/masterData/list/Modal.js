import React from 'react';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';
import MoneyInput from '../../../components/MoneyInput';
import { Form, Row, Col, Select, Input } from 'antd';
import { genNonDuplicateID } from '../../../utils';  // 随机产生数


const colSpan = 12;
class ModalCreate extends React.PureComponent {
  state = {};
  componentDidMount() {}
  handleOk = () => {
    const { form, callback = () => {} } = this.props;
// validateFields 校验 并获取一组输入区域的值 与 error  若filedName 参数为空 则校验全部的组件
    form.validateFields((err, values) => {
      if (!err) {
        console.log('得到的值是:',values);
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
        title="新增主数据"
        width={750}
        handleOk={this.handleOk}
      >
        <Row>
          <FormItem
            {...formProps}
            className="hidden"
            label="主数据编号"
            fieldName="zsjbh"
            initialValue={data.zsjbh || `RM_${genNonDuplicateID()}`}
          />

          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="名称"
              fieldName="zsjmc"
              initialValue={data.zsjmc}
            />
          </Col>

          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="版次"
              fieldName="bc"
              initialValue={data.bc || 1}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="部门"
              fieldName="bm"
              initialValue={data.bm}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option key="部门A">部门A</Select.Option>
                <Select.Option key="部门B">部门B</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="生产线"
              fieldName="scx"
              initialValue={data.scx}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option key="生产线A">生产线A</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="厂区"
              fieldName="cq"
              initialValue={data.cq}
            >
              <Select mode="multiple" style={{ width: '100%' }}>
                <Select.Option key="厂区A">厂区A</Select.Option>
                <Select.Option key="厂区B">厂区B</Select.Option>
                <Select.Option key="厂区C">厂区C</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="类型"
              fieldName="lx"
              initialValue={data.lx}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option key="类型A">类型A</Select.Option>
                <Select.Option key="类型B">类型B</Select.Option>
                <Select.Option key="类型C">类型C</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="类别"
              fieldName="lb"
              initialValue={data.lb}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option key="类别A">类别A</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="组别"
              fieldName="zb"
              initialValue={data.zb}
            >
              <Select style={{ width: '100%' }}>
                <Select.Option key="组别A">组别A</Select.Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="EPR编号"
              fieldName="eprbh"
              initialValue={data.eprbh}
            />
          </Col>
          <Col span={colSpan}>
            <FormItem
              {...formProps}
              label="研发编号"
              fieldName="yfbh"
              initialValue={data.yfbh}
            />
          </Col>
          <Col span={colSpan}>
            <MoneyInput
              {...formProps}
              label="保质期"
              fieldName="bzq"
              unit="天"
              initialValue={data.bzq}
            />
          </Col>
          <Col span={colSpan}>
            <MoneyInput
              {...formProps}
              label="预计损耗"
              fieldName="yjsh"
              unit="%"
              initialValue={data.yjsh}
            />
          </Col>
          <Col span={24}>
            <FormItem
              form={form}
              label="评论"
              fieldName="pl"
              cols={[4]}
              initialValue={data.pl}
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
