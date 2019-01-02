import React from 'react';
import { Form, Button, Row, Col } from 'antd';
import FormItem from './FormItem';

const ColDom = Col;

class SearchForm extends React.PureComponent {
  handleSearch = (e) => {
    e.preventDefault();
    const { form, callback = () => {} } = this.props;

    form.validateFields((err, values) => {
      callback(values);
    });
  };
  render() {
    const { form, extraNode = () => {}, colSpan = 7 } = this.props;
    const formProps = { form, required: false };

    return (
      <Form onSubmit={this.handleSearch} className="tableListForm">
        <Row>
          {extraNode(formProps, colSpan)}
          <Button htmlType="submit">查询</Button>
        </Row>
      </Form>
    );
  }
}

export { FormItem, ColDom };
export default Form.create()(SearchForm);
