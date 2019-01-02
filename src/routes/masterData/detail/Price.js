
import React from 'react';
import { Form, Select, Table, Divider, Popconfirm } from 'antd';
import ModalBox from '../../../components/ModalBox';
import MoneyInput from '../../../components/MoneyInput';
import PathButton from '../../../components/PathButton';
import SearchForm, { ColDom, FormItem } from '../../../components/SearchForm';

import { getStorage, setStorage, genNonDuplicateID, storageRemove } from '../../../utils';  //增删改
class Price extends React.PureComponent{
    state ={
        supperList : getStorage('supper'),
        columns:[
            {
                title:'编号',
                dataIndex:'gysbh',
            },{
                title:'供应商民称',
                dataIndex:'gys',
            },
            {
                title:'联系方式',
                dataIndex:'lxfs',
            },{
                title:'所在地址',
                dataIndex:'szd',
            },
            {
                title:'操作',
                render(_,record){
                    <React.Fragment>
                        {/* <Link to = {`/supper/list/detail?id=${record.gysbh}`}>查看</Link> */}
                        <Divider  type ="vertical" />
                        <Popconfirm title = "confirm to delete" onConfirm = {()=>this.onRemove( record.id)}>
                        <a>删除</a>
                        </Popconfirm>
                        </React.Fragment>
                }
            },
        ],
        data: getStorage(`master_price_${this.props.id}`),
    };
    componentDidMount(){}
    onCreate =()=>{
        const{ form,id} = this.props; 
        form.validataFields ((err,values)=>{
            if(!err){
                const {supperList,data} = this.state;
                const arr = data;
                values.gys.forEach(key=>{
                    supperList.forEach(item=>{
                        if(key===item.gysbh){
                            arr.push({...item,id:genNonDuplicateID(1)});
                        }
                    })
                });
                setStorage(`master_price_${id}`,arr);
                this.setState({data:arr});
                this,modalRef.hide();
            }
        });
    };
    onRemove = (id) => {
        const list = storageRemove(`master_price_${this.props.id}`, 'id', id);
        this.setState({ data: list });
      };
      render() {
        const { form } = this.props;
        const { columns, data, supperList } = this.state;
    
        return(
          <React.Fragment>
            <SearchForm
              extraNode={(formProps, colSpan) => (
                <React.Fragment>
                  <ColDom span={colSpan}>
                    <MoneyInput
                      {...formProps}
                      label="现行价"
                      fieldName="xxj"
                      unit="元"
                    />
                  </ColDom>
                  <ColDom span={colSpan}>
                    <MoneyInput
                      {...formProps}
                      label="年平均价"
                      fieldName="npjj"
                      unit="元"
                    />
                  </ColDom>
                  <ColDom span={colSpan}>
                    <MoneyInput
                      {...formProps}
                      label="最高价"
                      fieldName="zgj"
                      unit="元"
                    />
                  </ColDom>
                </React.Fragment>
              )}
            />
            <PathButton name="关联供应商" onClick={() => this.modalRef.show()} />
            <Table
              bordered
              rowKey="id"
              columns={columns}
              dataSource={data}
              pagination={false}
            />
            <ModalBox
              title="关联供应商"
              ref={(r) => {this.modalRef = r}}
              handleOk={this.onCreate}
            >
              <FormItem
                form={form}
                cols={[6, 16]}
                label="选择供应商"
                fieldName="gys"
              >
                <Select mode="multiple" style={{ width: '100%' }}>
                  {supperList.map(item => <Select.Option key={item.gysbh}>{item.gysmc}</Select.Option>)}
                </Select>
              </FormItem>
            </ModalBox>
          </React.Fragment>
        );
    }
}

export default Form.create()(Price);
