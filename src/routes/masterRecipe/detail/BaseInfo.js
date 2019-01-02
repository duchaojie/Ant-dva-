import React from 'react';
import { Button, Row, Col } from 'antd';
import FormItem from '../../../components/FormItem';
import H3 from  '../../../components/H3';
import BaseModel from '../list/Modal';
import { getStorageId, storageModify } from '../../../utils';
const colSpan = 6;
class BaseInfo extends React.PureComponent{
    state= {
        data: getStorageId('recipe','pfbh',this.props.id),
    };
    componentDidMount(){}

    onModify =()=>{
        this.formRef.modalRef.show();
    };
    modalCallback = values =>{
        this.setState({ data:values },()=>{
            storageModify('recipe','pfbh',values);
            this.formRef.modalRef.hide();
        } );
    };
    render(){
      const { data } =this.state;
      const { pfbh, pfmc, bc, xmid, zl, zlmc, bm, cpx, cq, lx, yfbh } = data;
       const arr = [
        ['配方编号', pfbh],
        ['配方名称', pfmc],
        ['版次', bc],
        ['项目id', xmid],
        ['种类', zl],
        ['种类名称', zlmc],
        ['部门', bm],
        ['产品线', cpx],
        ['厂区', cq],
        ['类型', lx],
        ['研发编号', yfbh],
       ];
       return (
           <React.Fragment>
               <H3
                    title="基本详情"
                    btnVisible ={false}
                    line = {false}
                    renderRightExtra = { <Button type = "primary" onClick ={this.onModify}>编辑</Button>}
                    >
                    <Row className="tableListForm">
                        {arr.map(item => (
                        <Col span={colSpan} key={item[0]}>
                            <FormItem
                            readOnly
                            label={item[0]}
                            initialValue={item[1]}
                            />
                        </Col>
                        ))}
                     </Row>
               </H3>
              <BaseModel
                wrappedComponentRef = {(r)=>{this.formRef = r }}
                data={data}
                callback={this.modalCallback}
              /> 
           </React.Fragment>

       );
    }
}

export default BaseInfo;