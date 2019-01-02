import React from "react";
import { Cascader, Form, Select} from "antd";
import provinces from "../config/provinces";
import cities from "../config/cities";
import areas from "../config/areas.js";
// console.log(provinces);
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};
const { Option } = Select;
areas.forEach(area => {
  const matchCity = cities.filter(city => city.code === area.cityCode)[0];
  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code
    });
  }
});

cities.forEach(city => {
  const matchProvince = provinces.filter(
    province => province.code === city.provinceCode
  )[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children
}));
//console.log(options);
class BaseCascaders extends React.PureComponent{
  render() {
    const { getFieldDecorator } = this.props.form;
    const span = 4;
    return (
      <Cascader
    options={options}
    showSearch
    placeholder="请选择地址"
    style={{ width: 400 }}
    />
  );
  }

}
export default Form.create()(BaseCascaders);


