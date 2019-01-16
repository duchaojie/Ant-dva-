import React, { Component, Fragment } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
} from 'antd';
// import { SelectMap } from '../../../components';
// import { PLAN_STATUS } from '../../../actions';

const Option = Select.Option;

class LoanSearchHeader extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.handleChang('son Headers')
    }, 1000);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { form } = this.props;
    const formProps = {
      required: false,
      form,
    }
    return (
      <Fragment>
        <Form layout="inline" onSubmit={this.handleSubmit} >
          <Row>
            <Col span={7}>
              <Form.Item
                {...formProps}
                label="信托计划名称"
                fieldName="planName"
              >
                {getFieldDecorator('信托计划名称', {
                  rules: [{ message: '请填写信托计划名称' }],
                })(
                  <Input style={{ width: 220 }} />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                {...formProps}
                label="状态"
                fieldName="state"
              >
                {getFieldDecorator('状态', {
                  rules: [{ message: '请填写状态' }],
                })(
                  <Select style={{ width: 200 }} placeholder="选择一个状态" >
                    <Option value="创建中">创建中</Option>
                    <Option value="存续中">存续中</Option>
                    <Option value="已创建">已创建</Option>
                    <Option value="已关闭">已关闭</Option>
                    <Option value="已停用">已停用</Option>
                  </Select>
                )}
                {/* <SelectMap data={PLAN_STATUS}  style={{ width: 220 }}  /> */}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button htmlType="submit" >查询</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Fragment>
    );
  }

}
export default Form.create()(LoanSearchHeader);






















// {/* <Select style={{ width: 200 }} placeholder="选择一个状态" onChange={this.handleSelectChange}> */}
// handleSelectChange = (value) => {
//   console.log(value);
//   // this.props.form.setFieldsValue({   ///setFieldsValue 设置一组输入控件的值
//   //   // note: `你的选择是, ${value === '信托计划名称' ? '状态' : '信托计划名称'}!`,
//   // });
// }



// hanleSelectChange = (e) => {
//   const { options } = e.target
//   const selectedValues = Object.keys(options)
//     .filter(item => options[item].selected)
//     .map(item => options[item].value)
//   this.setState({
//     selectedValues,
//   })
// }



// handleSearch = (e) =>{
//   e.preventDefault();
//   this.setState({
//     num:event.target.value,
//   });
// }

// handleSearch = (e) => {
//   e.preventDefault();
//   const { form, callback = () => {} } = this.props;
//   form.validateFields((err, values) => {
//     if(!err){
//       this.setState({
//         searchValues:event.target.values
//       });
//     }
//     callback(values);

//   });
// };



