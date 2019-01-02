
import React from 'react';
import { Form, Select, Transfer, Table, Popconfirm, Divider } from 'antd';
import SearchForm, { ColDom, FormItem } from '../../../components/SearchForm';
import PathButton from '../../../components/PathButton';
import ModalBox from '../../../components/ModalBox';
import { eachSelect, genNonDuplicateID, setStorage, getStorage, storageRemove, storageModify } from '../../../utils';
import { DETECTION_TYPE } from '../../../actions/map';

class Detection extends React.PureComponent {
  state = {
    columns: [
      {
        title: '项目名称',
        dataIndex: 'jcmc',
      }, {
        title: '类型',
        dataIndex: 'lx',
      }, {
        title: '指标',
        dataIndex: 'zb',
      }, {
        title: '单位',
        dataIndex: 'dw',
      }, {
        title: '检测方法',
        dataIndex: 'ff',
      }, {
        title: '操作',
        render: (_, record) => (
          <React.Fragment>
            <a onClick={() => this.handleModify(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否删除该项？" onConfirm={() => this.onRemove(record.id)}>
              <a>删除</a>
            </Popconfirm>
          </React.Fragment>
        ),
      },
    ],
    
    data: getStorage(`master_detect_${this.props.id}`),
    mockData: [
      {
        key: '水分',
        title: `水分`,
        description: `属性1介绍`,
      }, {
        key: '粒度',
        title: `粒度`,
        description: `属性2介绍`,
      }, {
        key: '盐分',
        title: '盐分',
        description: `属性3介绍`,
      },
    ],
    targetKeys: [],
    activeData: {},
  };
     handleModify=(record)=>{
       this.setState({activeData:record},()=>{
         this.dwModalRef.show();
       });
     };
     add =()=>{
         this.setState({ targetKeys :[]},()=>{
           this.modalRef.show();
         })
     };
     handleChange = (targetKeys)=>{
       this.setState({targetKeys})
     };
     onRemove = id =>{
       const list = storageRemove(` master_detect_${this.props.id}`,'id',id);
       this.setState({ data:list });
     };
  handleOk = () => {
    const { targetKeys } = this.state;
    const NAME = `master_detect_${this.props.id}`;

    if (targetKeys.length > 0) {
      const arr = getStorage(NAME);
      targetKeys.forEach(item => {
        let obj = {
          id: genNonDuplicateID(1),
          jcmc: item,
        };
        if (item === '水分') {
          obj = {
            ...obj,
            lx: '类型A',
            zb: '指标1',
            ff: '方法A',
          };
        } else if (item === '粒度') {
          obj = {
            ...obj,
            lx: '类型B',
            zb: '指标2',
            ff: '方法B',
          };
        } else {
          obj = {
            ...obj,
            lx: '类型C',
            zb: '指标3',
            ff: '方法C',
          };
        }
        arr.push(obj);
      });

      setStorage(NAME, arr);
      this.setState({ data: arr });
    }

    this.modalRef.hide();
  };

  handleDw = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { activeData } = this.state;
        activeData.dw = values.dw;
        const data = storageModify(`master_detect_${this.props.id}`, 'id', activeData);
        this.setState({ data }, () => {
          this.dwModalRef.hide();
        });
      }
    });
  };

  render() {
    const { mockData, targetKeys, columns, data } = this.state;
    const { form } = this.props;

    return(
      <React.Fragment>
        <SearchForm
          extraNode={(formProps, colSpan) => (
            <React.Fragment>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="供应商"
                  fieldName="a"
                >
                  <Select style={{ width: '100%' }}>
                    <Select.Option key="供应商1">供应商1</Select.Option>
                    <Select.Option key="供应商2">供应商2</Select.Option>
                    <Select.Option key="供应商3">供应商3</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
              <ColDom span={colSpan}>
                <FormItem
                  {...formProps}
                  label="类型"
                  fieldName="b"
                >
                  {eachSelect(DETECTION_TYPE)}
                </FormItem>
              </ColDom>
            </React.Fragment>
          )}
        />
        <PathButton name="添加检测要求" onClick={this.add} />
        <Table
          bordered
          // loading={loading}
          rowKey="id"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <ModalBox
          ref={(r) => {this.dwModalRef = r}}
          title="编辑单位"
          handleOk={this.handleDw}
        >
          <FormItem
            cols={[6]}
            form={form}
            label="单位"
            fieldName="dw"
          >
            <Select style={{ width: '100%' }}>
              <Select.Option key="mg/100g">mg/100g</Select.Option>
              <Select.Option key="mg/100ml">mg/100ml</Select.Option>
            </Select>
          </FormItem>
        </ModalBox>
        <ModalBox
          ref={(r) => {this.modalRef = r}}
          title="添加检测要求"
          width={750}
          handleOk={this.handleOk}
        >
          <Transfer
            dataSource={mockData}
            showSearch
            listStyle={{
              width: 300,
              height: 300,
            }}
            targetKeys={targetKeys}
            onChange={this.handleChange}
            render={item => item.title}
          />
        </ModalBox>
      </React.Fragment>
    );
  }
}

export default Form.create()(Detection);
