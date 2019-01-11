import React, { Fragment } from 'react';
import { Button, Form, Row, Col, Input } from 'antd';

class List extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values: ', values);
      }
      this.props.handleChang(JSON.stringify(values));
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
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row>
            <Col span={7}>
              <Form.Item
                {...formProps}
                label=""
                fieldName="lists"
              >
                {getFieldDecorator('lists', {
                  rules: [{ message: '随便一个数' }],
                })(
                  <Input style={{ width: 220 }} />
                )}
              </Form.Item>
            </Col>
            <Col>
              <Form.Item>
                <Button htmlType="submit">添加</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Fragment>
    )
  }


}

export default Form.create()(List);



