// / ant
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
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      inpValu: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handelInput = this.handelInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.handleChang('son Headers')
    }, 1000);
  }
  handleChange(e) {
    this.setState({ value: e });
  }
  handelInput = (e) => {
    this.setState({
      inpValu: e.target.value,
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.inpValu);

  };
  render() {
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
                <Input style={{ width: 220 }} onChange={this.handelInput} value={this.state.inpValu} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                {...formProps}
                label="状态"
                fieldName="state"
              >
                <Select style={{ width: 200 }} value={this.state.value} onChange={this.handleChange}>
                  <Option value="创建中">创建中</Option>
                  <Option value="存续中">存续中</Option>
                  <Option value="已创建">已创建</Option>
                  <Option value="已关闭">已关闭</Option>
                  <Option value="创建中">已停用</Option>
                </Select>
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



