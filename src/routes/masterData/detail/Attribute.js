
import React from 'react';
import { Select, Transfer, Table, Divider, Popconfirm } from 'antd';
import SearchForm, { ColDom, FormItem } from '../../../components/SearchForm';
import PathButton from '../../../components/PathButton';
import ModalBox from '../../../components/ModalBox';
import AttrModal from './AttrModal';
import { genNonDuplicateID, setStorage, getStorage, storageRemove, storageModify } from "../../../utils";
class Attribute extends React.PureComponent {
  state = {
    columns: [
      {
        title: '属性名称',
        dataIndex: 'sxmc',
      }, {
        title: '选项',
        dataIndex: 'xx',
      }, {
        title: '指标要求',
        dataIndex: 'zbyq',
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
    data: getStorage(`master_attr_${this.props.id}`),
    active: {},
    mockData: [
      {
        key: '适用范围',
        title: `适用范围`,
      }, {
        key: '气味',
        title: `气味`,
      }, {
        key: '预期用途',
        title: `预期用途`,
      },
    ],
    targetKeys: [],
  };

  componentDidMount() {}

  add = () => {
    // const { data } = this.state;
    const targetKeys = [];
    // data.forEach(item => targetKeys.push(item.sxmc));
    this.setState({ targetKeys }, () => {
      this.modalRef.show();
    });
  };

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  };

  handleModify = record => {
    this.setState({
      active: record,
    }, () => {
      this.formRef.modalRef.show();
    });
  };

  modifySave = values => {
    const list = storageModify(`master_attr_${this.props.id}`, 'id', values);
    this.setState({ data: list });
    this.formRef.modalRef.hide();
  };

  onRemove = (id) => {
    const list = storageRemove(`master_attr_${this.props.id}`, 'id', id);
    this.setState({ data: list });
  };

  handleOk = () => {
    const { targetKeys } = this.state;
    const NAME = `master_attr_${this.props.id}`;

    if (targetKeys.length > 0) {
      const arr = getStorage(NAME);
      targetKeys.forEach(item => {
        arr.push({
          sxmc: item,
          id: genNonDuplicateID(1),
        });
      });

      setStorage(NAME, arr);
      this.setState({ data: arr });
    }

    this.modalRef.hide();
  };

  render() {
    const { mockData, targetKeys, columns, data, active } = this.state;

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
                  <Select style={{ width: '100%' }}>
                    <Select.Option key="ERP参考数据">ERP参考数据</Select.Option>
                    <Select.Option key="适用范围">适用范围</Select.Option>
                    <Select.Option key="总体要求">总体要求</Select.Option>
                    <Select.Option key="包装、标签、仓储、运输<">包装、标签、仓储、运输</Select.Option>
                    <Select.Option key="其他检验指标">其他检验指标</Select.Option>
                    <Select.Option key="抽样方法">抽样方法</Select.Option>
                    <Select.Option key="感官指标">感官指标</Select.Option>
                  </Select>
                </FormItem>
              </ColDom>
            </React.Fragment>
          )}
        />
        <PathButton name="添加属性" onClick={this.add} />
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
          title="添加属性"
          width={750}
          handleOk={this.handleOk}
        >
          <Transfer
            dataSource={mockData}
            showSearch={true}
            listStyle={{
              width: 300,
              height: 300,
            }}
            targetKeys={targetKeys}
            onChange={this.handleChange}
            render={item => item.title}
          />
        </ModalBox>
        <AttrModal
          wrappedComponentRef={(r) => {this.formRef = r}}
          data={active}
          callback={this.modifySave}
        />
      </React.Fragment>
    );
  }
}

export default Attribute;
