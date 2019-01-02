import React from 'react';
// import { Tabs } from 'antd';
import BaseInfo from './BaseInfo';
import { getUrlParameter } from '../../../utils';
class Detail extends React.PureComponent{
    //随机产生ID
    state = {
        id: getUrlParameter('id')
    };
    render(){
        return (
            <React.Fragment>
                <BaseInfo  {...this.state}/>
                {/* <Tabs type = "card" defaultActiveKey="0">
                 
                </Tabs> */}
            </React.Fragment>
        )
    }

}
export default Detail;