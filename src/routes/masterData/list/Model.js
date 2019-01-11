import React, { PureComponent } from 'react';
import ModalBox from '../../../components/ModalBox';
import FormItem from '../../../components/FormItem';
import MoneyInput from '../../../components/MoneyInput';
import { Form, Row, Col, Select, Input } from 'antd';
import { genNonDuplicateID } from '../../../utils';
import { format } from 'url';

const colSpan = 12;
class ModalCreate extends React.PureComponent {
    state = { };

componentDidMount(){}
handleOk  = ()=> {
    const { from, callback =() =>{} } = this.props ;
     form.valodateFields( (err,values)=>{
         if(!err) {
             callback(values);
         };
     });
    };

    // ????
    render() {
        const { form,data } = this.props;
        const formProps = { form, cols:[8], required:false };
        return (
            <ModalBox
              ref = {(r) => {this.modalRef= r }}
              title = "ADD"
              width={750}
              handleOk= {this.handleOk}
            >
            <Row>
                <FormItem
                {...formProps}
                className= "hidden"
                label="主数据编号"
                fieldName="zsjbh"
                initialValue ={data.zsjbh || `RM_${genNonDuplicateID()}`}
                // 根据编号
                />
                <Col span={colSpan}>
                    <FormData
                        {...formProps}
                        label="名称"
                        fieldName = "zsjmc"
                        initialValue = {data.zsjmc}
                    />
                </Col>
                <Col span={colSpan}>
                    <FormItem
                        {...formProps}
                        label="版次"
                        fieldName = "bc"
                        initialValue = {data.bc || 1 }   //默认为1 || 1
                    />
                </Col>
                <Col span={colSpan}>
                    <FormItem
                        {...formProps}
                        label="部门"
                        fieldName = "bm"
                        initialValue = {data.bm}
                    >
                    <Select style= {{ width:'100%'}}>
                        <Select.Option key = "bA"> 市场部门</Select.Option>
                        <Select.Option key = "bB"> 销售部门</Select.Option>
                    </Select>
                    </FormItem>
                </Col>
                <Col span={colSpan}>
                    <FormItem
                        {...formProps}
                        label="生产线"
                        fieldName = "scx"
                        initialValue = {data.scx}
                    >
                    <Select style= {{ width:'100%'}} placeholder="选择所在生产线" >
                        <Select.Option key = "scxA">A线</Select.Option>
                        <Select.Option key = "scxB">B线</Select.Option>
                    </Select>
                    </FormItem>
                </Col>
                <Col span={colSpan}>
                    <FormItem
                        {...formProps}
                        label="厂区"
                        fieldName = "cq"
                        initialValue = {data.cq}
                    >
                    <Select style= {{ width:'100%'}} placeholder="选择所在厂区"  >
                        <Select.Option key = "cq1">A-1</Select.Option>
                        <Select.Option key = "cq2">A-2</Select.Option>
                        <Select.Option key = "cq3">A-3</Select.Option>
                    </Select>
                    </FormItem>
                </Col>
                <Col span={colSpan}>
                    <FormItem
                        {...formProps}
                        label="类型"
                        fieldName = "lx"
                        initialValue = {data.lx}
                    >
                    <Select style= {{ width:'100%'}} placeholder="选择类型"  >
                        <Select.Option key = "lx1">A类</Select.Option>
                        <Select.Option key = "lx2">B类</Select.Option>
                        <Select.Option key = "lx3">C类</Select.Option>
                    </Select>
                    </FormItem>
                </Col>
                <Col span={colSpan}>
                    <FormData
                        {...formProps}
                        label="EPR编号"
                        fieldName = "eprbh"
                        initialValue = {data.eprbh}
                    />
                </Col>
                <Col span={colSpan}>
                    <FormData
                        {...formProps}
                        label="保质期"
                        fieldName = "bzq"
                        unit="天"
                        initialValue = {data.bzq}
                    />
                </Col>


            </Row>
            </ModalBox>
        );
    }
}

export  default From.create()(ModelCreate);


