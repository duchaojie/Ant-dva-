import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
} from 'antd';


const Option = Select.Option;

const FormItem = Form.Item;
@Form.create()

export default class Daice extends Component {

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, fileldsValue) => {
      if (!err) {
        console.log(fileldsValue)
      };
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const span = 8;
    return (
      <Form
        onSubmit={this.handleSearch}
        layout="inline"
      >
        <Row type='flex'>
          <Col span={span} order={3}>
            <FormItem label="项目名称">
              {getFieldDecorator('productName')(
                <Input maxLength={50} />
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3} style={{ textAlign: 'center' }}>
            <FormItem label="状态">
              {getFieldDecorator('state', {
                rules: [{ message: '请填写状态' }],
              })(
                <Select style={{ width: 200 }} placeholder="选择一个状态">
                  <Option value="创建中">创建中</Option>
                  <Option value="存续中">存续中</Option>
                  <Option value="已创建">已创建</Option>
                  <Option value="已关闭">已关闭</Option>
                  <Option value="已停用">已停用</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={span} order={3} style={{ textAlign: 'center' }}>
            <FormItem>
              <Button type="primary" htmlType="submit">查询</Button>
            </FormItem>
          </Col>
        </Row>
      </Form>

    );
  }
}
