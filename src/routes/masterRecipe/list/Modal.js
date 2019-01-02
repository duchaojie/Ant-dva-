import React from 'react';
import ModalBox from '../../../components/ModalBox';
import { Row, Col, Form ,Select} from 'antd';
import FormItem from '../../../components/FormItem';
import { genNonDuplicateID } from '../../../utils';

class ModalCreate extends React.PureComponent{
    state = {};

    componentDidMount(){}

    handleOk = () => {
        const { form, callback = () => {} } = this.props;
        form.validateFields((err, values) => {
          if (!err) {
            callback(values);
          }
        });
      };
     
      
    render() {
        const {form,data={}} = this.props;
        const { pfbh, pfmc, bc, xmid,zlmc, bm, cpx, cq, lx, lb, zb, eprbh, yfbh } = data;
        const formProps = { form,cols:[8], required: false };
        const arr = [
        {
            className :'hidden',
            label:'配方编号',
            fieldName:'pfbh',
            initialValue: pfbh || `Nu_${genNonDuplicateID(1)}`,
        },{
            label:'配方名称',
            fieldName:'pfmc',
            initalValue: pfmc,
        },
        {
            label:'版次',
            fieldName:'bc',
            initalValue: bc||2,
        },
        {
            label:'项目ID',
            fieldName:'xmid',
            initalValue: xmid,
        },
        {
            label:'种类',
            fieldName:'zlmc',
            initalValue: zlmc,
            children: (
                <Select style={{ width: '100%' }}>
                  <Select.Option key="草药">草药</Select.Option>
                  <Select.Option key="谷物">谷物</Select.Option>
                  <Select.Option key="碳水化物">碳水化物</Select.Option>
                </Select>
              ),
        },{
            label: '部门',
            fieldName: 'bm',
            initialValue: bm,
            children: (
              <Select style={{ width: '100%' }}>
                <Select.Option key="研发部">研发部</Select.Option>
                <Select.Option key="配制部">配制部</Select.Option>
                <Select.Option key="销售部">销售部</Select.Option>
              </Select>
            ),
          },{
            label: '产品线',
            fieldName: 'cpx',
            initialValue: cpx,
            children: (
              <Select style={{ width: '100%' }}>
                <Select.Option key="产品线A">产品线A</Select.Option>
                <Select.Option key="产品线B">产品线B</Select.Option>
                <Select.Option key="产品线C">产品线C</Select.Option>
              </Select>
            ),
          },{
              label: '厂区',
              fieldName: 'cq',
              initalValue: cq,
              children:(
                <Select style={{ width:'100%' }}>
                 <Select.Option key ="A厂区">A厂区</Select.Option>
                 <Select.Option key ="B厂区">B厂区</Select.Option>
                 <Select.Option key ="C厂区">C厂区</Select.Option>
                </Select>
              ),
          },{
            label: '类型',
            fieldName: 'lx',
            initalValue: lx,
            children:(
              <Select style={{ width:'100%' }}>
               <Select.Option key ="A类型">A类型</Select.Option>
               <Select.Option key ="B类型">B类型</Select.Option>
               <Select.Option key ="C类型">C类型</Select.Option>
              </Select>
            ),
        },{
            label: '类别',
            fieldName: 'lb',
            initalValue: lb,
            children:(
              <Select style={{ width:'100%' }}>
               <Select.Option key ="A类型">A型</Select.Option>
               <Select.Option key ="B类型">B型</Select.Option>
               <Select.Option key ="C类型">C型</Select.Option>
              </Select>
            ),
        },{
            label: '组别',
            fieldName: 'zb',
            initalValue: zb,
            children:(
              <Select style={{ width:'100%' }}>
               <Select.Option key ="A">A</Select.Option>
               <Select.Option key ="B">B</Select.Option>
               <Select.Option key ="C">C</Select.Option>
              </Select>
            ),
        },{
            label:'EPR编号',
            fieldName:'eprbh',
            initalValue: eprbh,
        },
        {
            label:'研发编号',
            fieldName:'yfbh',
            initalValue: yfbh,
        },   
       ];
       return (
           <ModalBox
             ref ={(r)=>{this.modalRef = r }}
             title="新增配方"
             width={750}
             handleOk ={this.handleOk}
           >
           <Row>
                {arr.map((item,index)=>{
                    if (index!==0){
                        return(
                            <Col span = {12}>
                             <FormItem {...formProps} {...item}/>
                            </Col>
                        );
                    }
                    return <FormItem {...formProps} {...item} />
                })}
           </Row>
           </ModalBox>
       );
    }
}

export default Form.create()(ModalCreate);