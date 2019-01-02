import React from 'react';
import { Divider, Tabs} from 'antd';
import BaseInfo from './BaseInfo';
import { getUrlParameter } from '../../../utils';
import Price from './Price';
import Attribute from './Attribute';
import Detection from './Detection';
import Nutrition from './Nutrition';
import Allergy from './Allergy';
import History from './History';
class Detail extends React.PureComponent {
  state = {
    id: getUrlParameter('id'),
  };

  componentDidMount() {}

  render() {
    const { id } = this.state;
    const arr =[
      ['0','价格详情',<Price id={id} />],
      ['1', '属性', <Attribute id={id} />],
      ['2', '检测', <Detection id={id} />],
      ['3', '营养值表', <Nutrition id={id} />],
      ['4', '过敏源', <Allergy id={id} />],
      ['5', '历史记录', <History id={id} />],
    ];

    return(
      <React.Fragment>
        <BaseInfo />
        <Divider type="horizontal" />
        <Tabs type ="line" defaultActiveKey = "0">
        {arr.map((item)=><Tabs.TabPane key = {item[0]} tab= {item[1]}>{item[2]}</Tabs.TabPane>)}
        </Tabs>
        <div style={{background:"pink"}}>study  study and study </div>
      </React.Fragment>
    );
  }
}
export default Detail;
