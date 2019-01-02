// import React from 'react';

// function MasterRecipe() {
//   return (
//       <div>
//         选择配方
//       </div>
//   );
// }
// export default MasterRecipe;

import React from 'react';
import { Table, Form, Input } from 'antd';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';
import PathButton from '../../../components/PathButton';
import { eachSelect, storageModify, getStorage, genNonDuplicateID } from '../../../utils';

const COUNTRY = ['中国', '美国', '欧盟'];
const ALLERGY_LIST = {
  '中国': ['酒精', '虾、蟹', '鱼类及其制品'],
  '美国': ['牛奶', '鸡蛋', '花生', '小麦', '大豆'],
  '欧盟': ['甲壳类及其制品', '蛋及其制品', '芹菜及其制品', '芥末及其制品'],
}
class Allergy extends React.PureComponent {
  constructor(props) {
    super(props); 
    // console.log(props);
    this.storageName = `master_allergy_${props.id}`;
    this.state = {
      columns: [
        {
          title: '国别',
          dataIndex: 'gb',
        }, {
          title: '致敏源类型',
          dataIndex: 'lb',
        }, {
          title: '详细信息',
          dataIndex: 'memo',
        },
      ],
      lbData: [],
      data: getStorage(this.storageName),  //数据来源
    };
  }

  componentDidMount() {}

  onAdd = () => {
    this.modalRef.show();
  };

  handleOk = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ data: storageModify(this.storageName, 'id', values) }, () => {
          this.modalRef.hide();
        });
      }
    });
  };

  render() {
    const { columns, data, lbData } = this.state;
    const { form } = this.props;
    const formProps = { form, cols: [7] };

    return(
      <React.Fragment>
        <PathButton onClick={this.onAdd} name="添加过敏源" />
        <Table
          bordered
          // loading={loading}
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <ModalBox
          ref={(r) => {this.modalRef = r}}
          title="添加过敏源"
          handleOk={this.handleOk}
        >
          <FormItem
            {...formProps}
            className="hidden"
            label="id"
            fieldName="id"
            initialValue={genNonDuplicateID(1)}
          />
          <FormItem
            {...formProps}
            label="国别"
            fieldName="gb"
          >
            {eachSelect(COUNTRY, {
              onChange: (key) => {
                this.setState({ lbData: ALLERGY_LIST[key] });
              },
            })}
          </FormItem>
          <FormItem
            {...formProps}
            label="类别"
            fieldName="lb"
          >  
            {eachSelect(lbData, { placeholder: '请先选择国别' })}
          </FormItem>
          <FormItem
            {...formProps}
            label="详细信息"
            fieldName="memo"
          >
            <Input.TextArea />
          </FormItem>
        </ModalBox>
      </React.Fragment>
    );
  }
}

export default Form.create()(Allergy);
