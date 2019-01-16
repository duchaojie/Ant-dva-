import React, { Component ,Fragment }from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
} from 'antd';

 const Option = Select.Option;
 class LoanPlanSearchHeader extends Component{
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values: ', values);
        }
        this.props.handleChang(values);
      });
    }

  render(){
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
                {getFieldDecorator('planName',{
                  rules:[{message:'请填写信托计划名称'}],
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
                {getFieldDecorator('state',{
                  rules:[{message:'请填写状态'}],
                })(
                  <Select style={{ width: 200 }} placeholder="选择一个状态" >
                    <Option value="创建中">创建中</Option>
                    <Option value="存续中">存续中</Option>
                    <Option value="已创建">已创建</Option>
                    <Option value="已关闭">已关闭</Option>
                    <Option value="已停用">已停用</Option>
                  </Select>
                 )}
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
export default Form.create()(LoanPlanSearchHeader);
