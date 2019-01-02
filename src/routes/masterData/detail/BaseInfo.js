import React from 'react';
import { Row, Col, Button } from 'antd';
import FormItem from '../../../components/FormItem';
import H3 from '../../../components/H3';
import BaseModal from '../list/Modal';
import { getUrlParameter, getStorageId, storageModify } from '../../../utils';

class BaseInfo extends React.PureComponent {
  state = {
    data: getStorageId('master', 'zsjbh', getUrlParameter('id')),
  };

  onModify = () => {
    this.formRef.modalRef.show();
  };

  modalCallback = (values) => {
    this.setState({ data: values }, () => {
      storageModify('master', 'zsjbh', values);
      this.formRef.modalRef.hide();
    });
  };

  render() {
    const { data } = this.state;
    const { zsjbh, zsjmc, bc, bm, scx, cq, lx, lb, zb, eprbh, yfbh, bzq, yjsh, pl } = data;
    const arr = [
      ['编号', zsjbh],
      ['名称', zsjmc],
      ['版次', bc],
      ['部门', bm],
      ['生产线', scx],
      ['厂区', cq ? cq.join('、') : ''], //多选
      ['类型', lx],
      ['类别', lb],
      ['组别', zb],
      ['ERP编号', eprbh],
      ['研发编号', yfbh],
      ['保质期', bzq],
      ['预计损耗', `${yjsh}%`],  //限定
    ];

    return(
      <H3
        title="基本信息"
        btnVisible={false}
        line={false}
        renderRightExtra={<Button type="primary" onClick={this.onModify}>编辑</Button>}
      >
        <Row className="tableListForm">
          {arr.map(item => (
            <Col span={6} key={item[0]}>
              <FormItem
                readOnly
                label={item[0]}
                initialValue={item[1]}
              />
            </Col>
          ))}
          <Col span={12}>
            <FormItem
              readOnly
              label="评论"
              initialValue={pl}
            />
            {/* */}
          </Col>
        </Row>
        <BaseModal
          wrappedComponentRef={(r) => {this.formRef = r}}
          data={data}
          callback={this.modalCallback}
        />
      </H3>
    );
  }
}

export default BaseInfo;
